import { TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useScale } from '../../../../hooks/useScale'
import { Image } from 'expo-image'
import AnimatedPaw from '../../../../components/AnimatedPaw'
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import * as Haptics from 'expo-haptics'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const AnimatedBall = ({ setText, setStage }) => {

    const { s, vs } = useScale()

    const [balldrop, setBalldrop] = useState<boolean>(false)

    const bottom = useSharedValue(vs(280));
    const rotation = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        const rotate = `${interpolate(
            rotation.value,
            [0, 1],
            [0, 180],
            Extrapolate.CLAMP
        )}deg`;

        return {
            bottom: bottom.value,
            transform: [{ rotate }],
        };
    });

    const triggerHaptic = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
        setTimeout(() => {
            setText('The ball just dropped on the ground.')
        }, 500);
        setTimeout(() => {
            setStage(2)
        }, 3000);
    };

    const handlePress = () => {
        setBalldrop(true);

        bottom.value = withTiming(0, { duration: 800 }, (finished) => {
            if (finished) {
                runOnJS(triggerHaptic)();
            }
        });
        rotation.value = withTiming(1, { duration: 800 });
    };

    return (
        <AnimatedTouchableOpacity onPress={() => handlePress()} activeOpacity={1} style={[animatedStyle, { width: vs(65), height: vs(65), justifyContent: 'center', alignItems: 'center', position: 'absolute' }]}>
            <Image style={{ width: vs(74), height: vs(74) }} contentFit='contain' source={require('../../staticAssets/balldark.png')} />
            {!balldrop && <AnimatedPaw color={'light'} />}       
        </AnimatedTouchableOpacity>
    )
}

export default AnimatedBall
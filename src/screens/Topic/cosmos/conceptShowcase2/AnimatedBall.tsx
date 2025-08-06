import { TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useScale } from '../../../../hooks/useScale'
import { Image } from 'expo-image'
import AnimatedPaw from '../../../../components/AnimatedPaw'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming, Easing } from 'react-native-reanimated'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const AnimatedBall = ({ setText, setStage }) => {

    const { s, vs } = useScale()

    const [balldrop, setBalldrop] = useState<boolean>(false)

    const translateY = useSharedValue(0);

    const scale = useSharedValue(1)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: translateY.value }
            ],
        };
    });

    const pulseStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }]
        }
    })

    useEffect(() => {   
        setText('Tap on the ball to drop it.')
    }, [])

    const handlePress = () => {
        setBalldrop(true)

        translateY.value = withRepeat(
            withSequence(
                withTiming(30, { duration: 1000 }),
                withTiming(10, { duration: 1000 })
            ),
            -1,
            true
        );

        scale.value = withRepeat(
            withSequence(
                withTiming(1.05, { duration: 1000 }),
                withTiming(1, { duration: 1000 })
            ),
            -1,
            true
        )

        setTimeout(() => {
            setText('Ohh, it didn’t fall. It floats, right?')
        }, 1500);
    }

    return (
        <AnimatedTouchableOpacity onPress={() => handlePress()} activeOpacity={1} style={[animatedStyle, { width: vs(65), height: vs(65), justifyContent: 'center', alignItems: 'center', position: 'absolute' }]}>
            <Animated.Image style={[{ width: vs(74), height: vs(74) }, pulseStyle]} contentFit='contain' source={require('../../staticAssets/balldark.png')} />
            {!balldrop && <AnimatedPaw color={'dark'} />}       
        </AnimatedTouchableOpacity>
    )
}

export default AnimatedBall
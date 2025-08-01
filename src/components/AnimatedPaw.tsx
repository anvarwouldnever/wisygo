import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'
import { useScale } from '../hooks/useScale';

const AnimatedPaw = () => {

    const scale = useSharedValue(1);

    const { s } = useScale()

    useEffect(() => {
        scale.value = withRepeat(
            withTiming(1.2, { duration: 500 }),
            -0.8,
            true
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    return (
        <Animated.Image
            source={require('../../assets/paw.png')}
            style={[
                {
                    width: s(60),
                    height: s(60),
                    position: 'absolute',
                    right: -s(20),
                    bottom: -s(15),
                    pointerEvents: 'none'
                },
                animatedStyle
            ]}
        />
    )
}

export default AnimatedPaw
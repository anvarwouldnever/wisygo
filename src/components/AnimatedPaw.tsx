import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'
import { useScale } from '../hooks/useScale';

const AnimatedPaw = ({ color }) => {

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
            source={color === 'light'? require('../../assets/pawlight.png') : require('../../assets/pawdark.png')}
            style={[
                {
                    width: s(55),
                    height: s(55),
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
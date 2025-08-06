import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'
import { useScale } from '../hooks/useScale';

const AnimatedPaw = ({ color }) => {

    const scale = useSharedValue(1);

    const { s, vs } = useScale()

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
                    width: vs(55),
                    height: vs(55),
                    position: 'absolute',
                    right: -vs(20),
                    bottom: -vs(15),
                    pointerEvents: 'none'
                },
                animatedStyle
            ]}
        />
    )
}

export default AnimatedPaw
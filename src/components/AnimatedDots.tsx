import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS, Easing } from 'react-native-reanimated';

const DOT_COUNT = 3;
const DOT_JUMP = 8;
const DURATION = 350;
const EASING = Easing.inOut(Easing.quad);

const AnimatedDots = () => {

    const translateYs = Array.from({ length: DOT_COUNT }, () => useSharedValue(0));

    const startAnimation = async() => {
        while (true) {
            for (let i = 0; i < DOT_COUNT; i++) {
                await new Promise<void>((resolve) => {
                    translateYs[i].value = withTiming(-DOT_JUMP, {
                        duration: DURATION,
                        easing: EASING,
                    }, () => {
                        translateYs[i].value = withTiming(0, {
                            duration: DURATION,
                            easing: EASING,
                        }, () => {
                            runOnJS(resolve)();
                        });
                    });
                });
            }
        }
    };

    useEffect(() => {
        startAnimation();
    }, []);

    const Dot = ({ index }: { index: number }) => {
        const animatedStyle = useAnimatedStyle(() => ({
            transform: [{ translateY: translateYs[index].value }],
        }));
    
        return (
            <Animated.View
                style={[
                    {
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'white',
                        marginHorizontal: 3,
                        marginTop: DOT_JUMP / 2
                    },
                    animatedStyle,
                ]}
            />
        );
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'center' }}>
            <Dot index={0} />
            <Dot index={1} />
            <Dot index={2} />
        </View>
    )
}

export default AnimatedDots
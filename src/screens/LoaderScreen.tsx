import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Dimensions, Text, TouchableOpacity, Platform } from "react-native";
import Logo from "../components/Logo";
import Svg, { Circle } from 'react-native-svg';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, useAnimatedProps, useDerivedValue, FadeInDown, runOnUI  } from "react-native-reanimated";
import { ReText } from "react-native-redash"
import { useNavigation } from "@react-navigation/native";
import { useScale } from "../hooks/useScale";

const { width, height } = Dimensions.get('window');
const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const circleCY = height * (100 / 932);
const circleCX = width * (100 / 430);
const bigCircleRadius = (height * (500 / 932)) / (2 * Math.PI);
const strokeDashArray = height * (500 / 932);
const svgHeight = height * (170 / 800);
const svgWidth = width * (170 / 360);
const logoTop = height * (320 / 932);
const circleContainerSize = { height: height * (170 / 932), width: width * (170 / 430)}
const textFontSize = height * (24 / 800);
const messageTop = height * (550 / 932);
const buttonTop = height * (800 / 932);

const LoaderScreen = () => {

    const [text, setText] = useState('Finding activities that matches your child’s skills!')
    
    const progress = useSharedValue(0)
    const navigation = useNavigation()

    const { vs, windowWidth } = useScale()

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: strokeDashArray * (1 - progress.value)
    }))

    const progressText = useDerivedValue(() => {
        return `${Math.floor(progress.value * 100)}%`
    })

    const angle = useSharedValue(-Math.PI / 2);

    useEffect(() => {
        runOnUI(() => {
            angle.value = withTiming(2 * Math.PI - Math.PI / 2, { duration: 1500 });
        })();
    }, []);

    useEffect(() => {
        runOnUI(() => {
            progress.value = withTiming(1, { duration: 1500 });
            angle.value = withTiming(2 * Math.PI - Math.PI / 2, { duration: 1500 });
        })();
    
        const timeout = setTimeout(() => {
            setText('We have matched activities that fit your child!');
        }, 1300);
    
        return () => clearTimeout(timeout);
    }, []);


    const animatedStyle = useAnimatedStyle(() => {
        const centerX = width / 2;
        const centerY = height / 2;

        return {
            transform: [
                { translateX: centerX + bigCircleRadius * Math.cos(angle.value) - centerX },
                { translateY: centerY + bigCircleRadius * Math.sin(angle.value) - centerY },
            ],
        };
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <Logo />
                
            <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: logoTop, ...circleContainerSize, paddingHorizontal: vs(24) }}>
                <Svg style={{ position: 'absolute', height: svgHeight, width: svgWidth }}>
                    <AnimatedCircle 
                        cy={circleCY}
                        cx={circleCX}
                        r={bigCircleRadius}
                        stroke={'#91B049'}
                        strokeWidth={10}
                        strokeDasharray={strokeDashArray}
                        strokeDashoffset={strokeDashArray * 0.7}
                        fill={'white'}
                        animatedProps={animatedProps}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                        transform={`rotate(265 ${circleCX} ${circleCY})`}
                    />
                </Svg>

                <ReText style={{ position: 'absolute', color: '#222222', fontSize: textFontSize, fontWeight: '600', width: width * (150 / 360), textAlign: 'center' }} text={progressText} />
                
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                    <Animated.Image source={require('../../assets/pinkpaw.png')} style={[animatedStyle, {width: vs(18), height: vs(18), borderRadius: 100}]} />
                </View>
            </View>

            <Animated.Text entering={FadeInDown.duration(400)} key={text} style={{ width: windowWidth - vs(48), color: '#222222', fontWeight: '600', fontSize: Platform.isPad ? vs(22) : vs(20), textAlign: 'center', lineHeight: Platform.isPad ? vs(30) : vs(28), position: 'absolute', top: messageTop, paddingHorizontal: vs(24)}}>
                {text}
            </Animated.Text>
                
            {text === 'We have matched activities that fit your child!' && 
                <AnimatedTouchableOpacity onPress={() => navigation.navigate('Subscription')} entering={FadeInDown.duration(400)} style={{ position: 'absolute', top: buttonTop, backgroundColor: '#504297', width: windowWidth - vs(48), height: vs(56), borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: Platform.isPad ? vs(16) : vs(14), fontWeight: '600', textAlign: 'center', lineHeight: 24 }}>
                        Continue
                    </Text>
                </AnimatedTouchableOpacity>
            }
        </SafeAreaView>
    )
}

export default LoaderScreen;
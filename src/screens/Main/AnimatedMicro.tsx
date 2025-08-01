import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import Animated, { FadeIn, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useScale } from '../../hooks/useScale';
import { Image } from 'expo-image';
import * as Haptics from 'expo-haptics';
import AnimatedPaw from '../../components/AnimatedPaw';
import AnimatedDots from '../../components/AnimatedDots';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const AnimatedMicro = ({ paw, setPaw, setText, setTopic }) => {

    const { s } = useScale()

    const [microOn, setMicroOn] = useState<boolean>(false)
    const [thinking, setThinking] = useState<boolean>(false)

    const press = async () => {
        if (thinking || (!paw && !microOn)) return;
    
        if (microOn) {
            setThinking(true);
            setTimeout(() => {
                setText("Hey there! I'm happy to hear your voice.")
                setTopic(true)
            }, 2000);
        } else {
            setMicroOn(true);
            setPaw(false);
        }
    
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    };    

    const animatedMicro = useAnimatedStyle(() => {

        const scaleX = withTiming(microOn ? 1.2 : 1, {duration: 300})
        const scaleY = withTiming(microOn ? 1.2 : 1, {duration: 300})
        const backgroundColor = withTiming(microOn? "#504297" : "#B3ABDB", { duration: 300 })
        const borderWidth = withTiming(microOn? 5 : 0, {duration: 300})
        const borderColor = withTiming(microOn? '#B3ABDB80' : '#B3ABDB80', {duration: 300})
    
        return {
            transform: [{ scaleX }, { scaleY }], backgroundColor, borderWidth, borderColor
        };
    });

    return (
        <View style={{backgroundColor: '#B3ABDB80', padding: s(5), borderRadius: 100, marginTop: s(30)}}>
            <AnimatedTouchableOpacity onPress={() => press()} activeOpacity={1} style={[animatedMicro, { borderRadius: 100, backgroundColor: '#B3ABDB', justifyContent: 'center', alignItems: 'center', width: s(82), height: s(82)}]}>
                {thinking? <AnimatedDots /> : <Image style={{width: s(42), height: s(42)}} source={microOn ? require('./staticAssets/microon.png') : require('./staticAssets/microoff.png')} contentFit='contain' />}
            </AnimatedTouchableOpacity>
            {paw && <AnimatedPaw />}
            {microOn && !thinking && <Animated.Text entering={FadeIn.duration(300)} style={{color: '#504297', fontWeight: '300', position: 'absolute', alignSelf: 'center', bottom: -s(35), fontSize: s(14)}}>Tap again to send</Animated.Text>}
        </View>
    )
}

export default AnimatedMicro;
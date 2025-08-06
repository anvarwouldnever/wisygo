import { View, StyleSheet, Platform } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing, FadeIn, FadeOut } from 'react-native-reanimated';
import { useScale } from '../../hooks/useScale';

const AnimatedText = ({ setPaw, setText, text, stage, setTopic }) => {

    const { s, vs } = useScale()

    const texts = [
        'Hi there, friend! 👋 I’m Wisy the Panda!',
        'Let’s go on a fun learning adventure together!',
        'Can you say ‘Hello, Wisy!’ after you tap the button? 🎤 I can’t wait to hear your voice!',
        'We’re back. What else do you want to explore?',
        'Tap on the microphone button and tell me what other topics you like?'
    ]

    useEffect(() => {
        if (stage === 0) {
            let i = 4;
            setText(texts[3]);
            setTopic(null)
        
            const interval = setInterval(() => {
                setText(texts[i]);
        
                i++;
        
                if (i === texts.length) {
                    clearInterval(interval);
                    setTimeout(() => setPaw(true), 2000);
                }
            }, 2000);
        
            return () => clearInterval(interval);
        } else {
            let i = 1;
            setText(texts[0]);

            const interval = setInterval(() => {
                setText(texts[i]);

                if (i === 2) {
                    clearInterval(interval);
                    setTimeout(() => setPaw(true), 2000);
                }

                i++;
            }, 2000);

            return () => clearInterval(interval);
        }
    }, []);

    return (
        <View style={{width: '85%', height: 'auto', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ width: '100%', height: 'auto', minHeight: vs(88), backgroundColor: 'white', borderRadius: s(16), padding: vs(15) }}>
                <Animated.Text key={text} entering={FadeIn.duration(400).easing(Easing.bezier(0.25, 0.1, 0.25, 1))} exiting={FadeOut.duration(400).easing(Easing.bezier(0.25, 0.1, 0.25, 1))} style={{ fontWeight: '500', fontSize: Platform.isPad ? vs(16) : vs(14), lineHeight: Platform.isPad? vs(20) : vs(18), width: '100%' }}>
                    {text}
                </Animated.Text>
            </View>
            <View style={styles.triangle} />         
        </View>
    )
}

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        transform: [{ rotate: '180deg' }],
    }
})

export default AnimatedText;
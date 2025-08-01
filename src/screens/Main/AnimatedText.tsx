import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing, FadeIn, FadeOut } from 'react-native-reanimated';
import { useScale } from '../../hooks/useScale';

const AnimatedText = ({ setPaw, setText, text }) => {

    const { s } = useScale()

    const texts = [
        'Hi there, friend! 👋 I’m Wisy the Panda!',
        'Let’s go on a fun learning adventure together!',
        'Can you say ‘Hello, Wisy!’ after you tap the button? 🎤 I can’t wait to hear your voice!',
    ]

    useEffect(() => {
        let i = 1;
        setText(texts[0]);
    
        const interval = setInterval(() => {
            setText(texts[i]);
    
            i++;
    
            if (i === texts.length) {
                clearInterval(interval);
                setTimeout(() => setPaw(true), 2000);
            }
        }, 2000);
    
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={{width: '85%', height: 'auto', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ width: '100%', height: 'auto', minHeight: s(88), backgroundColor: 'white', borderRadius: s(16), padding: s(15) }}>
                <Animated.Text key={text} entering={FadeIn.duration(400).easing(Easing.bezier(0.25, 0.1, 0.25, 1))} exiting={FadeOut.duration(400).easing(Easing.bezier(0.25, 0.1, 0.25, 1))} style={{ fontWeight: '500', fontSize: s(14), lineHeight: s(18), width: '100%' }}>
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

export default AnimatedText
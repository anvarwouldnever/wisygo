import { View, StyleSheet, Platform } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing, FadeIn, FadeOut } from 'react-native-reanimated';
import { useScale } from '../../../../hooks/useScale';

const AnimatedText = ({ setText, text, setStage, stage }) => {

    const { s, vs } = useScale()

    const texts = [
        'Let’s try dropping the ball now in space',
        'Tap on the ball to drop it.',
        'It’s because the gravity is much weaker in space',
        'Do you want to explore something else?'
    ]

    useEffect(() => {
        if (stage === 1) {
            setText(texts[0])

            setTimeout(() => {
                setStage(2)
                setText(null)
            }, 2000);
        } else if (stage === 3) {
            let i = 3;
            setText(texts[2])

            const interval = setInterval(() => {
                setText(texts[i]);
                i++;

                if (i === texts.length) {
                    clearInterval(interval);
                }
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [stage]);

    return (
        <View style={{width: '85%', height: 'auto', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ width: '100%', height: 'auto', minHeight: vs(88), backgroundColor: 'white', borderRadius: s(16), padding: vs(15) }}>
                <Animated.Text key={text} entering={FadeIn.duration(400).easing(Easing.bezier(0.25, 0.1, 0.25, 1))} exiting={FadeOut.duration(400).easing(Easing.bezier(0.25, 0.1, 0.25, 1))} style={{ fontWeight: '500', fontSize: Platform.isPad? vs(16) : vs(14), lineHeight: Platform.isPad? vs(20) : vs(18), width: '100%' }}>
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
        marginTop: -1
    }
})

export default AnimatedText;
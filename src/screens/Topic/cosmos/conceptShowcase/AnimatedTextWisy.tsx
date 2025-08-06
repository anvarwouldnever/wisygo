import { View, StyleSheet, Platform } from 'react-native'
import React from 'react'
import Animated, { Easing, FadeIn, FadeOut } from 'react-native-reanimated';
import { useScale } from '../../../../hooks/useScale';
import { Image } from 'expo-image';

const AnimatedTextWisy = ({ text, setText }) => {

    const { s, vs } = useScale()

    return (
        <View style={{width: '85%', height: 'auto', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: vs(100)}}>
            <View style={{ width: '100%', height: 'auto', minHeight: vs(88), backgroundColor: 'white', borderRadius: s(16), padding: vs(15) }}>
                <Animated.Text key={text} entering={FadeIn.duration(400).easing(Easing.bezier(0.25, 0.1, 0.25, 1))} exiting={FadeOut.duration(400).easing(Easing.bezier(0.25, 0.1, 0.25, 1))} style={{ fontWeight: '500', fontSize: Platform.isPad? vs(16) : s(14), lineHeight: Platform.isPad? vs(20) : vs(18), width: '100%' }}>
                    {text}
                </Animated.Text>
            </View>
            <View style={styles.triangle} />
            <Image style={{ width: vs(64), height: vs(64), position: 'absolute', right: -s(10), bottom: -s(5) }} contentFit='contain' source={require('../../staticAssets/headwisy.png')} />         
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

export default AnimatedTextWisy
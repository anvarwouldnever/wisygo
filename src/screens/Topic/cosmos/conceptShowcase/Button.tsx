import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useScale } from '../../../../hooks/useScale'
import Animated, { FadeIn } from 'react-native-reanimated'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const Button = ({ setStage }) => {

    const { s, vs } = useScale()

    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return <View style={{width: vs(152), height: vs(56), marginTop: vs(66)}} />;

    return (
        <AnimatedTouchableOpacity onPress={() => setStage(3)} entering={FadeIn} style={{ width: s(152), height: vs(56), backgroundColor: '#B3ABDB', justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginTop: vs(66) }}>
            <Text style={{color: '#504297', fontSize: Platform.isPad? vs(16) :  vs(14), fontWeight: '600'}}>Go to space 🚀</Text>
        </AnimatedTouchableOpacity>
    )
}

export default Button;
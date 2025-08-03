import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useScale } from '../../../../hooks/useScale'
import Animated, { FadeIn } from 'react-native-reanimated'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const Button = ({ setStage }) => {

    const { s } = useScale()

    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return <View style={{width: s(152), height: s(56), marginTop: s(66)}} />;

    return (
        <AnimatedTouchableOpacity onPress={() => setStage(3)} entering={FadeIn} style={{ width: s(152), height: s(56), backgroundColor: '#B3ABDB', justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginTop: s(66) }}>
            <Text style={{color: '#504297', fontSize: s(14), fontWeight: '600'}}>Go to space 🚀</Text>
        </AnimatedTouchableOpacity>
    )
}

export default Button;
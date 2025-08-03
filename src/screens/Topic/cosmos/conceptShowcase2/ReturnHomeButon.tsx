import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useScale } from '../../../../hooks/useScale'
import Animated, { FadeIn } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const ReturnHomeButon = () => {
    const { s } = useScale()
    
    const [show, setShow] = useState<boolean>(false);

    const navigation = useNavigation()

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return <View style={{width: s(152), height: s(56), marginTop: s(66)}} />;

    return (
        <AnimatedTouchableOpacity onPress={() => navigation.navigate('Main', { stage: 0 })} entering={FadeIn} style={{ width: s(152), height: s(56), backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginTop: s(66) }}>
            <Text style={{color: '#504297', fontSize: s(14), fontWeight: '600'}}>Let’s return home</Text>
        </AnimatedTouchableOpacity>
    )
}

export default ReturnHomeButon
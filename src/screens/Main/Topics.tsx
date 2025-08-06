import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useScale } from '../../hooks/useScale'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const Topics = ({ setText }) => {

    const { s, vs } = useScale();

    const [show, setShow] = useState<boolean>(false);

    const navigation = useNavigation();

    const press = () => {
        setShow(false)

        setTimeout(() => {
            navigation.navigate('Topic')
        }, 3000);

        setTimeout(() => {
            setText('Great choice! Have you ever heard of something called gravity?')
        }, 1000);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
            setText('Let’s learn something. Which topic you like more? Cosmos or Nature? Tab on the button..')
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return <View style={{height: vs(56), marginTop: Platform.isPad? vs(70) : vs(66)}} />;

    return (
        <Animated.View exiting={FadeOut.duration(1500)} entering={FadeIn.duration(500)} style={{ width: '85%', height: vs(56), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Platform.isPad? vs(70) : vs(66) }}>
            <TouchableOpacity onPress={() => press()} style={{width: '48%', height: '100%', backgroundColor: '#B3ABDB', borderRadius: 100, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: Platform.isPad? vs(16) : vs(14), color: '#504297', fontWeight: '600'}}>Cosmos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '48%', height: '100%', backgroundColor: '#B3ABDB', borderRadius: 100, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: Platform.isPad? vs(16) : vs(14), color: '#504297', fontWeight: '600'}}>Nature</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Topics;
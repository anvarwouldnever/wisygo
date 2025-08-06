import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'
import { useNavigation } from '@react-navigation/native'
import * as Haptics from 'expo-haptics';

const Button = ({ chosenLang }) => {

    const { s, vs } = useScale()

    const navigation = useNavigation()

    const navigate = () => {
        navigation.navigate('Onboarding')
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    return (
        <TouchableOpacity onPress={chosenLang === null? () => {} : () => navigate()} style={{width: '100%', height: vs(56), alignSelf: 'center', borderRadius: 100, opacity: chosenLang === null? 0.5 : 1, backgroundColor: '#504297', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: vs(14), color: 'white', fontWeight: '600'}}>{"Continue"}</Text>
        </TouchableOpacity>
    )
}

export default Button
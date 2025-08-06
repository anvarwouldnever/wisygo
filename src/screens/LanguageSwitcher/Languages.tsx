import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale';

const Languages = ({ setChosenLang, chosenLang }) => {

    const { s, vs } = useScale()

    const languages = [
        { name: "English", tag: "en" },
        { name: "Latvian", tag: "lv" }
    ];

    return (
        <View style={{width: '100%', height: vs(490), gap: vs(12)}}>
            {languages.map((language, index) => {
                return (
                    <TouchableOpacity key={index} activeOpacity={0.5} onPress={() => setChosenLang(language)} style={{borderWidth: 1, opacity: chosenLang === null? 1 : chosenLang?.name === language?.name? 1 : 0.5, borderColor: chosenLang === null? '#E5E5E5' : chosenLang?.name === language?.name? '#22222' : '#E5E5E5', width: '100%', height: vs(56), alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 100}}>
                        <Text style={{fontSize: vs(14), color: '#222222', fontWeight: '600'}}>{language?.name}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default Languages
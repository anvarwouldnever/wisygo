import { View, Text, TextInput, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { withTiming } from 'react-native-reanimated'
import { useScale } from '../../hooks/useScale'

const Name = ({ inputHeight, setName, name }) => {

    const { vs } = useScale()

    const handleFocus = () => {
        inputHeight.value = withTiming(vs(200), { duration: 200 })
    }

    const handleBlur = () => {
        inputHeight.value = withTiming(vs(460), { duration: 300 })
    }

    useEffect(() => {
        return () => {
            handleBlur()
        }
    }, [])

    return (
        <View style={{ width: '100%', height: 'auto', gap: vs(16), alignItems: 'center', justifyContent: 'center'}}>

            <Text style={{ height: vs(28), fontSize: Platform.isPad ? vs(22) : vs(20), fontWeight: '600', textAlign: 'center' }}>What's Your Child's Name?</Text>

            <TextInput 
                style={{ width: '100%', height: vs(56), alignSelf: 'center', borderWidth: 1, borderRadius: 100, paddingHorizontal: vs(16), borderColor: '#E5E5E5', fontSize: Platform.isPad ? vs(16) : vs(14), color :'#222222', fontWeight: '600', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                value={name}
                onChangeText={(text: string) => setName(text)}
                placeholder='Adam'
                onFocus={() => handleFocus()}
                onBlur={() => handleBlur()}
                placeholderTextColor={'#B1B1B1'}
                keyboardAppearance='dark'
            />

        </View>
    )
}

export default Name
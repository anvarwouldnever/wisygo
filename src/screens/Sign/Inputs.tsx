import { View, Text, TextInput, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'

const Inputs = ({ setEmail, setPassword, error, action }) => {

    const { s, vs } = useScale()

    return (
        <View style={{height: 'auto', gap: vs(12)}}>

            <TextInput 
                style={{height: vs(56), fontSize: Platform.isPad? vs(16) : vs(14), fontWeight: '600', color: '#222222', width: '100%', borderRadius: 100, borderWidth: 1, borderColor: error ? '#D83636' : '#E5E5E5', paddingHorizontal: vs(16) }}
                placeholder='Email address'
                placeholderTextColor={'#B1B1B1'}
                keyboardType='email-address'
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput 
                style={{height: vs(56), fontSize: Platform.isPad? vs(16) : vs(14), fontWeight: '600', color: '#222222', width: '100%', borderRadius: 100, borderWidth: 1, borderColor: error ? '#D83636' : '#E5E5E5', paddingHorizontal: vs(16) }}
                placeholder='Password'
                placeholderTextColor={'#B1B1B1'}
                keyboardType='visible-password'
                onChangeText={(text) => setPassword(text)}
            />

            {error && <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), color: '#D83636', paddingHorizontal: vs(16), fontWeight: '600' }}>{error}</Text>}

            {action === 'log in' &&

                <TouchableOpacity style={{ marginLeft: vs(16), justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), color: '#555555', fontWeight: '600' }}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>
            }

        </View>
    )
}

export default Inputs
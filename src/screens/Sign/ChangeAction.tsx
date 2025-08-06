import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'

const ChangeAction = ({ setAction, action, setError }) => {

    const { vs } = useScale()

    const toggleAction = () => {
        setError(null)
        setAction(action === 'log in' ? 'sign up' : 'log in')
    }

    return (
        <View style={{height: 'auto', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: vs(40), gap: vs(3)}}>
        
            <Text style={{ fontSize: Platform.isPad? vs(14) : vs(12), fontWeight: '600', color: '#555555', alignSelf: 'center'}}>
                {action === 'log in' ? "I don't have an account" : "I already have an account."}
            </Text>

            <TouchableOpacity onPress={() => toggleAction()} style={{justifyContent: 'center', alignItems: 'center', height: 'auto'}}>
                <Text style={{ fontSize: Platform.isPad? vs(14) : vs(12), fontWeight: '600', color: '#504297', alignSelf: 'center'}}>
                    {action === 'log in' ? "Sign up" : "Log in"}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default ChangeAction
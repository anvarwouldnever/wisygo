import { View, Text, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'

const Button = ({ handleSign, loading }) => {

    const { vs } = useScale()

    return (
        <TouchableOpacity onPress={() => handleSign()} style={{height: vs(56), borderRadius: 100, backgroundColor: '#504297', justifyContent: 'center', alignItems: 'center'}}>
            {loading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text style={{ fontSize: Platform.isPad ? vs(16) : vs(14), color: 'white', fontWeight: '600'}}>
                    Continue
                </Text>
            )}
        </TouchableOpacity>
    )
}

export default Button
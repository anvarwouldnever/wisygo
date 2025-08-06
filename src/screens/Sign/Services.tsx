import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useScale } from '../../hooks/useScale'

const Services = () => {

    const { s, vs } = useScale()

    return (
        <View style={{ height: 'auto', gap: vs(12) }}>

            <TouchableOpacity style={{height: vs(56), borderWidth: 1, borderColor: '#E5E5E5', borderRadius: 100, paddingHorizontal: vs(16), flexDirection: 'row', alignItems: 'center', gap: vs(8)}}>
                <Ionicons name='logo-google' size={vs(24)} color={'black'} />
                <Text style={{fontSize: vs(14), fontWeight: '600', color: '#222222'}}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: vs(56), borderWidth: 1, borderColor: '#E5E5E5', borderRadius: 100, paddingHorizontal: vs(16), flexDirection: 'row', alignItems: 'center', gap: vs(8)}}>
                <Ionicons name='logo-apple' size={vs(24)} color={'black'} />
                <Text style={{fontSize: vs(14), fontWeight: '600', color: '#222222'}}>Continue with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: vs(56), borderWidth: 1, borderColor: '#E5E5E5', borderRadius: 100, paddingHorizontal: vs(16), flexDirection: 'row', alignItems: 'center', gap: vs(8)}}>
                <Ionicons name='logo-facebook' size={vs(24)} color={'black'} />
                <Text style={{fontSize: vs(14), fontWeight: '600', color: '#222222'}}>Continue with Facebook</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Services
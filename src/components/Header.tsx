import { View, Text } from 'react-native'
import React from 'react'
import Logo from './Logo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useScale } from '../hooks/useScale';

const Header = () => {

    const { s, vs } = useScale()

    return (
        <View style={{height: 'auto', width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: vs(24)}}>
            
            <Logo />
            
            <View style={{height: '100%', width: 'auto', gap: vs(8), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                
                <Text style={{fontSize: vs(24), fontWeight: '600', color: '#000000', textAlignVertical: 'center'}}>EN</Text>

                <Ionicons name='chevron-down' size={vs(22)} color={'#000000'} />   

            </View>

        </View>
    )
}

export default Header
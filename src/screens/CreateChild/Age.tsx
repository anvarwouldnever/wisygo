import { View, Text, Platform, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { useScale } from '../../hooks/useScale'
import RNDateTimePicker from "@react-native-community/datetimepicker";

const Age = ({ birthday, setBirthday }) => {

    const { vs } = useScale()
      
    const onChange = (event, selectedDate) => {
        if (selectedDate) {
            setBirthday(selectedDate);
        }
    };

    return (
        <View style={{ height: vs(376), justifyContent: 'space-between' }}>

            <View style={{ height: 'auto', width:'100%', gap: vs(16), alignItems: 'center', justifyContent: 'center' }}>
                
                <Text style={{ width: '100%', textAlign: 'center', fontSize: Platform.isPad? vs(22) : vs(20), fontWeight: '600' }}>
                    How old is your child?
                </Text>
                
                <TouchableOpacity style={{ width: '100%', height: vs(56), alignSelf: 'center', borderRadius: 100, paddingHorizontal: vs(16), borderColor: '#E5E5E5', justifyContent: 'center', alignItems: 'center', borderWidth: 1 }}>
                    <RNDateTimePicker
                        value={birthday} 
                        onChange={onChange}
                        themeVariant="light"
                        style={{ backgroundColor: 'white', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}
                        accentColor="#007AFF"
                        display='compact'
                        mode='date'
                    />
                </TouchableOpacity>

            </View>

            <Text style={{ width: '100%', textAlign: 'center', color: '#555555', fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '500', lineHeight: Platform.isPad ? vs(22) : vs(20), paddingHorizontal: vs(20) }}>We need the age for generating appropriate games and date to celebrate with Wisy the Birthday</Text>
        
        </View>
    )
}

export default Age;
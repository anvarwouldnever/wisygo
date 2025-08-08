import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useScale } from '../hooks/useScale'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'

const SubscriptionScreen = () => {

    const { vs } = useScale()

    const [trial, setTrial] = useState<string>('Annual')

    const navigation = useNavigation()

    return (
        <LinearGradient colors={['#ACA5F6', '#3E269D']} style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', width: '100%'}}>
            
            <View style={{height: vs(700), borderTopLeftRadius: vs(24), borderTopRightRadius: vs(24), backgroundColor: 'white', width: '100%', paddingHorizontal: vs(24), gap: vs(40), paddingTop: vs(16)}}>

                <View style={{ width: '100%', height: vs(24), alignItems: 'center' }}/>

                <View style={{ height: vs(270), width: '100%', gap: vs(24)}}>

                    <Text style={{ fontSize: Platform.isPad ? vs(22) : vs(20), fontWeight: '600', color: '#222222', textAlign: 'center' }}>No commitment, try it out first</Text>

                    <View style={{ gap: vs(12), width: '100%', height: 'auto', alignItems: 'center' }}>

                        <View style={{height: vs(48), width: '100%', flexDirection: 'row', gap: vs(10), alignItems: 'center'}}>

                            <Image source={require('../../assets/happyface.png')} contentFit='contain' style={{height: vs(48), width: vs(48)}} />

                            <Text style={{ fontSize: Platform.isPad ? vs(17) : vs(15), fontWeight: '400', color: '#555555', lineHeight: vs(24), flexShrink: 1  }}>More than 3000 satisfied customers</Text>

                        </View>

                        <View style={{height: vs(48), width: '100%', flexDirection: 'row', gap: vs(10), alignItems: 'center'}}>

                            <Image source={require('../../assets/checkmark.png')} contentFit='contain' style={{height: vs(48), width: vs(48)}} />

                            <Text style={{ fontSize: Platform.isPad ? vs(17) : vs(15), fontWeight: '400', color: '#555555', lineHeight: vs(24), flexShrink: 1 }}>Award winning app in 2024</Text>

                        </View>

                        <View style={{height: vs(48), width: '100%', flexDirection: 'row', gap: vs(10), alignItems: 'center'}}>

                            <Image source={require('../../assets/award.png')} contentFit='contain' style={{height: vs(48), width: vs(48)}} />

                            <Text numberOfLines={2} style={{ fontSize: Platform.isPad ? vs(17) : vs(15), flexShrink: 1, fontWeight: '400', color: '#555555', textAlign: 'left', lineHeight: Platform.isPad ? vs(24) : vs(22) }}>According to EU2030 pre-school guidelines</Text>

                        </View>

                    </View>

                </View>

                <View style={{ gap: vs(12), width: '100%' }}>

                    <TouchableOpacity onPress={() => setTrial('Annual')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: vs(16), paddingVertical: vs(12), borderWidth: 2, borderColor: trial === 'Annual' ? '#504297' : '#E5E5E5', backgroundColor: '#fff', borderRadius: 14 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: vs(12) }}>
                            <View style={{ width: vs(20), height: vs(20), borderRadius: vs(10), borderWidth: 2, borderColor: trial === 'Annual' ? '#504297' : '#ccc', alignItems: 'center', justifyContent: 'center', backgroundColor: trial === 'Annual' ? '#504297' : '#fff' }}>
                                {trial === 'Annual' && <View style={{ width: vs(10), height: vs(10), borderRadius: vs(5), backgroundColor: '#fff' }} />}
                            </View>
                            <View style={{gap: vs(8)}}>
                                <Text style={{ fontSize: Platform.isPad ? vs(18) : vs(16), fontWeight: '600', color: '#000' }}>Annual</Text>
                                <Text style={{ fontSize:  Platform.isPad ? vs(16) : vs(14), color: trial === 'Annual' ? '#504297' : '#777' }}>Save 45%</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end', gap: vs(8) }}>
                            <Text style={{ fontSize: Platform.isPad ? vs(18) : vs(16), fontWeight: '600', color: '#000' }}>€88.88/year</Text>
                            <Text style={{ fontSize:  Platform.isPad ? vs(16) : vs(14), color: '#777' }}>€7.40/month</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setTrial('Monthly')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: vs(16), paddingVertical: vs(12), borderWidth: 2, borderColor: trial === 'Monthly' ? '#504297' : '#E5E5E5', backgroundColor: '#fff', borderRadius: 14 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: vs(12) }}>
                            <View style={{ width: vs(20), height: vs(20), borderRadius: vs(10), borderWidth: 2, borderColor: trial === 'Monthly' ? '#504297' : '#ccc', alignItems: 'center', justifyContent: 'center', backgroundColor: trial === 'Monthly' ? '#504297' : '#fff' }}>
                                {trial === 'Monthly' && <View style={{ width: vs(10), height: vs(10), borderRadius: vs(5), backgroundColor: '#fff' }} />}
                            </View>
                            <View style={{gap: vs(8)}}>
                                <Text style={{ fontSize: Platform.isPad ? vs(18) : vs(16), fontWeight: '600', color: '#000' }}>Monthly</Text>
                                <Text style={{ fontSize: Platform.isPad ? vs(16) : vs(14), color: trial === 'Monthly' ? '#504297' : '#777' }}>Cancel anytime</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end', gap: vs(8) }}>
                            <Text style={{ fontSize: Platform.isPad ? vs(18) : vs(16), fontWeight: '600', color: '#000' }}>€12.99/month</Text>
                            <Text style={{ fontSize: Platform.isPad ? vs(16) : vs(14), color: '#777' }}>€155.88/year</Text>
                        </View>
                    </TouchableOpacity>

                </View>



                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ width: '100%', height: vs(56), backgroundColor: '#504297', justifyContent: 'center', alignItems: 'center', borderRadius: 100 }} >
                    <Text style={{fontSize: Platform.isPad ? vs(16) : vs(14), fontWeight: '600', color: 'white'}}>Start 7-day free trial</Text>
                </TouchableOpacity>

            </View>

        </LinearGradient>
    )
}

export default SubscriptionScreen
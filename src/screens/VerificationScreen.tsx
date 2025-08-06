import { View, SafeAreaView, Text, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Logo from '../components/Logo';
import { useScale } from '../hooks/useScale';
import { Image } from 'expo-image';
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons';

const VerificationScreen = () => {

    const { s, vs } = useScale()

    const [modal, setModal] = useState<boolean>(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', gap: vs(24) }}>

            <Logo />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: vs(40), width: '100%', paddingHorizontal: vs(24) }}>

                <View style={{ width: '100%', height: vs(454), alignItems: 'center', justifyContent: 'center', gap: vs(24) }}>
                    
                    <Image source={require('../../assets/verification.png')} style={{ width: vs(244), height: vs(244) }} contentFit='contain' />

                    <View style={{ width: '100%', height: 'auto', gap: vs(12) }}>
                        
                        <Text style={{ fontSize: Platform.isPad ? vs(22) : vs(20), fontWeight: '600', color: '#222222', textAlign: 'center' }}>Follow instructions to proceed</Text>

                        <Text style={{ fontSize: Platform.isPad ? vs(16) : vs(14), fontWeight: '400', lineHeight: Platform.isPad ? vs(26) : vs(24), textAlign: 'center', color: '#555555' }}>There’s a link sent to your email address. Please open it on this device.</Text>
                        
                    </View>

                </View>

                <View style={{ width: '100%', height: 'auto', gap: vs(12) }}>
                    
                    <TouchableOpacity onPress={() => setModal(true)} style={{ height: vs(56), borderRadius: 100, borderWidth: 1, borderColor: '#504297', justifyContent: 'center', alignItems: 'center', backgroundColor: '#504297' }}>
                        <Text style={{ fontSize: Platform.isPad ? vs(16) : vs(14), fontWeight: '600', color: 'white' }}>Open inbox</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: vs(56), borderRadius: 100, borderWidth: 1, borderColor: '#D4D1D1', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                        <Text style={{ fontSize: Platform.isPad ? vs(16) : vs(14), fontWeight: '600', color: '#504297' }}>Resend code in 00:20</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <Modal animationOutTiming={300} backdropTransitionOutTiming={1} onBackdropPress={() => setModal(false)} style={{ width: '100%', margin: 0, alignItems: 'center', justifyContent: 'flex-end' }} isVisible={modal} backdropOpacity={0.3} >
                <View style={{ height: vs(262), width: '100%', backgroundColor: 'white', borderTopLeftRadius: vs(24), borderTopRightRadius: vs(24), paddingHorizontal: vs(24), paddingTop: vs(8), alignItems: 'center', gap: vs(24) }}>

                    <View style={{ backgroundColor: '#D4D1D1', borderRadius: 100, height: vs(4), width: s(48) }} />

                    <View style={{gap: vs(16), justifyContent: 'center', alignItems: 'center', height: 'auto', width: '100%'}}>

                        <Text style={{ fontSize: Platform.isPad ? vs(18) : vs(16), fontWeight: '600', color: '#222222', alignSelf: 'flex-start'}}>Choose email provider</Text>

                        <View style={{gap: vs(12), width: '100%'}}>

                            <TouchableOpacity style={{height: vs(56), borderWidth: 1, width: '100%', borderColor: '#E5E5E5', borderRadius: 100, paddingHorizontal: vs(16), flexDirection: 'row', alignItems: 'center', gap: vs(8), justifyContent: 'space-between'}}>
                                <View style={{ height: 'auto', alignItems: 'center', justifyContent: 'center', gap: vs(8), flexDirection: 'row'}}>
                                    <Ionicons name='logo-google' size={vs(24)} color={'black'} />
                                    <Text style={{fontSize: Platform.isPad? vs(16) : vs(14), fontWeight: '600', color: '#222222'}}>Open Gmail</Text>
                                </View>
                                <Ionicons name='arrow-forward-sharp' size={vs(24)} color={'black'} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{height: vs(56), borderWidth: 1, width: '100%', borderColor: '#E5E5E5', borderRadius: 100, paddingHorizontal: vs(16), flexDirection: 'row', alignItems: 'center', gap: vs(8), justifyContent: 'space-between'}}>
                                <View style={{ height: 'auto', alignItems: 'center', justifyContent: 'center', gap: vs(8), flexDirection: 'row'}}>
                                    <Ionicons name='logo-apple' size={vs(24)} color={'black'} />
                                    <Text style={{fontSize: Platform.isPad? vs(16) : vs(14), fontWeight: '600', color: '#222222'}}>Open Mail</Text>
                                </View>
                                <Ionicons name='arrow-forward-sharp' size={vs(24)} color={'black'} />
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>
            </Modal>

        </SafeAreaView>
    )
}

export default VerificationScreen;
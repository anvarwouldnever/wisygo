import { View, SafeAreaView } from 'react-native'
import React from 'react'
import { useScale } from '../hooks/useScale';
import Slides from './Onboarding/Slides';

import Buttons from './Onboarding/Buttons';
import Header from '../components/Header';

const OnboardingScreen = () => {

    const { vs } = useScale()

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            
            <Header />

            <View style={{flex: 1, width: '100%', alignItems: 'center', padding: vs(24), backgroundColor: 'white', height: 'auto', justifyContent: 'space-between'}}>

                <Slides />

                <Buttons />

            </View>
            
        </SafeAreaView>
    )
}

export default OnboardingScreen;
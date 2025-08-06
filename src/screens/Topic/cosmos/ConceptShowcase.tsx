import { View } from 'react-native'
import React from 'react'
import { useScale } from '../../../hooks/useScale'
import AnimatedBall from './conceptShowcase/AnimatedBall'
import AnimatedWisyText from './conceptShowcase/AnimatedTextWisy'
import Animated, { FadeOut } from 'react-native-reanimated'

const ConceptShowcase = ({ text, setText, setStage }) => {

    return (
        <Animated.View exiting={FadeOut} style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderWidth: 1 }}>
            <View style={{backgroundColor: '#C4DF84', width: '100%', height: '75%', alignItems: 'center', justifyContent: 'center'}}>
                <AnimatedWisyText text={text} setText={setText} />
                <AnimatedBall setStage={setStage} setText={setText} />
            </View>
            <View style={{backgroundColor: '#B3ABDB', width: '100%', height: '25%'}}>
                            
            </View>
        </Animated.View>
    )
}

export default ConceptShowcase;
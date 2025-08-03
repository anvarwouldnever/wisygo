import { ImageBackground, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { Image } from 'expo-image'
import { useScale } from '../../../hooks/useScale'
import AnimatedText from './conceptShowcase2/AnimatedText'
import AnimatedTextWisy from './conceptShowcase2/AnimatedTextWisy'
import AnimatedBall from './conceptShowcase2/AnimatedBall'
import ProceedButton from './conceptShowcase2/ProceedButton'
import ReturnHomeButon from './conceptShowcase2/ReturnHomeButon'
import { StatusBar } from 'expo-status-bar'

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground)

const ConceptShowcase2 = ({ text, setText }) => {

    const { s, vs } = useScale()

    const [stage, setStage] = useState<number>(1)

    return (
        <AnimatedImageBackground entering={FadeIn.duration(600)} style={{flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}} source={require('../staticAssets/background.png')}>
            <StatusBar style='light' />
            { stage === 1 ? 

                <Animated.View entering={undefined} exiting={FadeOut.duration(600)} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <AnimatedText stage={stage} text={text} setStage={setStage} setText={setText} />
                        
                    <Image source={require('../../Main/staticAssets/wisy.png')} style={{ width: '100%', height: s(300) }} contentFit='contain' />

                    <View style={{width: s(152), height: s(56), marginTop: s(66)}} />
                </Animated.View>

            : stage === 2 ? 
                
                <Animated.View key={stage} exiting={FadeOut.duration(600)} entering={FadeIn.duration(600)} style={{backgroundColor: 'transparent', width: '100%', height: '75%', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0}}>
                    
                    <AnimatedTextWisy text={text} setText={setText} />
                    <AnimatedBall setStage={setStage} setText={setText} />
                    
                    {text === 'Ohh, it didn’t fall. It floats, right?' && <ProceedButton setStage={setStage} /> }
                </Animated.View>

            : stage === 3 ?

                <Animated.View key={stage} entering={FadeIn.duration(600)} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <AnimatedText stage={stage} text={text} setStage={setStage} setText={setText} />
                        
                    <Image source={require('../../Main/staticAssets/wisy.png')} style={{ width: '100%', height: s(300) }} contentFit='contain' />

                    <ReturnHomeButon />
                </Animated.View>

                : null

            }

        </AnimatedImageBackground>
    )
}

export default ConceptShowcase2;
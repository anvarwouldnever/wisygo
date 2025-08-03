import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ConceptShowcase from './Topic/cosmos/ConceptShowcase';
import * as Haptics from 'expo-haptics'
import AnimatedText from './Topic/cosmos/conceptShowcase/AnimatedText';
import { Image } from 'expo-image';
import ConceptShowcase2 from './Topic/cosmos/ConceptShowcase2';
import { useScale } from '../hooks/useScale';
import Button from './Topic/cosmos/conceptShowcase/Button';
import Animated, { FadeIn } from 'react-native-reanimated';

const TopicScreen = () => {

    const { s, vs } = useScale()

    const [text, setText] = useState<string>('Let’s try simulating it here on Earth. Tap on the ball to drop it.')

    useEffect(() => {
        if (text) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        }
    }, [text])

    const [stage, setStage] = useState<number>(1)

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            { stage === 1 ?

                <ConceptShowcase setStage={setStage} text={text} setText={setText} />

            : stage === 2 ? 

                <Animated.View entering={FadeIn} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#C4DF84'}}>
                    <AnimatedText stage={stage} text={text} setText={setText} />
                    
                    <Image source={require('./Main/staticAssets/wisy.png')} style={{ width: '100%', height: s(300) }} contentFit='contain' />
            
                    <Button setStage={setStage} />
                </Animated.View>

            : stage === 3 ?
                <ConceptShowcase2 text={text} setText={setText} /> : null
            }
        </View>
    )
}

export default TopicScreen;
import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image';
import { useScale } from '../hooks/useScale';
import AnimatedText from './Main/AnimatedText';
import AnimatedMicro from './Main/AnimatedMicro';
import Topics from './Main/Topics';
import * as Haptics from 'expo-haptics';

const MainScreen = ({ route }) => {

    const { s, vs } = useScale()

    const stage = route?.params?.stage

    const [paw, setPaw] = useState<boolean>(false);
    const [topic, setTopic] = useState<any>(null);
    const [text, setText] = useState<string>();

    useEffect(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    }, [text]);

    return (
        <View style={{flex: 1, backgroundColor: '#C4DF84', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ height: 'auto', width: '100%', justifyContent: 'center', alignItems: 'center', gap: s(10),  }}>
                    <AnimatedText setTopic={setTopic} stage={stage} text={text} setText={setText} setPaw={setPaw} />   
                    
                    <Image source={require('./Main/staticAssets/wisy.png')} style={{ width: '100%', height: vs(300) }} contentFit='contain' />
                </View>
            
                {topic? <Topics setText={setText} /> : <AnimatedMicro setTopic={setTopic} setText={setText} paw={paw} setPaw={setPaw} />}
            </View>
        </View>
    )
}

export default MainScreen;
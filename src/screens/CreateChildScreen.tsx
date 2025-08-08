import { ActivityIndicator, Alert, View } from 'react-native'
import React, { useState } from 'react'
import Logo from '../components/Logo';
import { LinearGradient } from 'expo-linear-gradient';
import { useScale } from '../hooks/useScale';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, { FadeInLeft, FadeInRight, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import Buttons from './CreateChild/Buttons';
import Name from './CreateChild/Name';
import Avatars from './CreateChild/Avatars';
import Progress from './CreateChild/Progress';
import Age from './CreateChild/Age';
import Gender from './CreateChild/Gender';
import EngagementTime from './CreateChild/EngagementTime';
import { CreateChild } from '../api/methods/child/createchild';
import { useNavigation } from '@react-navigation/native';

const CreateChildScreen = () => {

    const { vs, windowWidth } = useScale();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()

    const [name, setName] = useState<string>(null);
    const [avatar, setAvatar] = useState<number>(0)
    const [birthday, setBirthday] = useState<any>(new Date())
    const [gender, setGender] = useState<number>(null)
    const [engagementTime, setEngagementTime] = useState<number>(null)

    const [stage, setStage] = useState<number>(1)
    const [prevStage, setPrevStage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false)

    const inputHeight = useSharedValue(vs(460));

    const animatedStyle = useAnimatedStyle(() => ({
        height: inputHeight.value
    }));

    const getEnteringAnimation = () => {
        return stage > prevStage ? FadeInRight.duration(400) : FadeInLeft.duration(400);
    };

    const formatDate = (date) => {
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    const createChild = async() => {
        try {
            setLoading(true)
            const response = await CreateChild(name, (avatar + 1).toString(), formatDate(birthday), gender, engagementTime)
            if (response?.data?.data?.user_id) {
                navigation.navigate('Loader')
            }
        } catch (error) {
            console.log(error?.response?.data?.message || error)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', paddingTop: insets?.top, gap: vs(44) }}>
            <Logo />
            <LinearGradient colors={['#ACA5F6', '#3E269D']} style={{flex: 1, alignItems: 'center', width: '100%', gap: vs(44)}}>
                
                <Animated.View style={[animatedStyle, { width: '100%', alignItems: 'center', backgroundColor: 'white', borderBottomLeftRadius: vs(24), borderBottomRightRadius: vs(24), paddingHorizontal: vs(24), gap: vs(44) }]}>

                    <Progress stage={stage} />
                    
                    { stage === 1 ?
                        
                        <Animated.View key={stage} entering={getEnteringAnimation()} style={{ width: '100%' }}>
                            <Name name={name} inputHeight={inputHeight} setName={setName} />
                        </Animated.View>

                    : stage === 2 ?
                        
                        <Animated.View key={stage} entering={getEnteringAnimation()} style={{ width: windowWidth }}>
                            <Avatars avatar={avatar} setAvatar={setAvatar} />
                        </Animated.View>

                    : stage === 3 ? 
                        
                        <Animated.View key={stage} entering={getEnteringAnimation()} style={{ width: '100%' }}>
                            <Age birthday={birthday} setBirthday={setBirthday}  />
                        </Animated.View>

                    : stage === 4 ?

                        <Animated.View key={stage} entering={getEnteringAnimation()} style={{ width: '100%' }}>
                            <Gender gender={gender} setGender={setGender} />
                        </Animated.View>
                    
                    : stage === 5 ?

                        <Animated.View key={stage} entering={getEnteringAnimation()} style={{ width: '100%' }}>
                            <EngagementTime engagementTime={engagementTime} setEngagementTime={setEngagementTime} />
                        </Animated.View> : null

                    }      

                </Animated.View>

                <Buttons engagementTime={engagementTime} gender={gender} name={name} loading={loading} createChild={createChild} stage={stage} setPrevStage={setPrevStage} setStage={setStage} />

            </LinearGradient>

            {loading && <ActivityIndicator size={'large'} style={{position: 'absolute', alignSelf: 'center'}} color={'#B1B1B1'} />}
        </View>
    )
}

export default CreateChildScreen;
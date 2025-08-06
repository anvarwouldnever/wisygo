import { SafeAreaView, View, Text, Platform } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header';
import { useScale } from '../hooks/useScale';
import { LogIn, SignUp } from '../api/methods/auth/auth';
import Inputs from './Sign/Inputs';
import * as SecureStore from 'expo-secure-store';
import ChangeAction from './Sign/ChangeAction';
import Button from './Sign/Button';
import Services from './Sign/Services';
import { useNavigation } from '@react-navigation/native';

const SignScreen = ({ route }) => {

    const { vs } = useScale()

    const deafultAction = route?.params?.action;

    const [action, setAction] = useState<string>(deafultAction)

    const [email, setEmail] = useState<string>(null)
    const [password, setPassword] = useState<string>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    const navigation = useNavigation()

    const handleSign = async () => {
        try {
            setError(null)
            setLoading(true)
    
            let response
    
            if (action === 'sign up') {
                return navigation.navigate('Verification')
                response = await SignUp(email, password)
            } else if (action === 'log in') {
                response = await LogIn(email, password)
    
                if (response?.data?.token) {
                    await SecureStore.setItemAsync('token', response.data.token)
                }
            }

            console.log(response.data)
    
        } catch (error) {
            console.log(error)
            setError(error?.response?.data?.message || 'Ошибка при аутентификации')
        } finally {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', gap: vs(40)}}>
            <Header />

            <View key={action} style={{ flex: 1, width: '100%', paddingHorizontal: vs(24), gap: vs(24) }}>

                <Text style={{ fontSize: Platform.isPad ? vs(22) : vs(20), fontWeight: '600', height: vs(28), textAlign: 'center', textAlignVertical: 'center', lineHeight: vs(28) }}>Hello!</Text>

                <Inputs action={action} error={error} setEmail={setEmail} setPassword={setPassword} />

                <Button handleSign={handleSign} loading={loading} />

                <Services />

                <ChangeAction setError={setError} action={action} setAction={setAction} />
            
            </View>

        </SafeAreaView>
    )
}

export default SignScreen;
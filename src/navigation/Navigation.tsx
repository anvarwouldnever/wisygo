import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import TopicScreen from '../screens/TopicScreen';
import * as SecureStore from 'expo-secure-store';
import LanguageSwitcherScreen from '../screens/LanguageSwitcherScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignScreen from '../screens/SignScreen';
import VerificationScreen from '../screens/VerificationScreen';

const Stack = createStackNavigator();

const Navigation = () => {

    const token = SecureStore.getItem('token');

    return (
        <NavigationContainer>
            <Stack.Navigator id={undefined} screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }} initialRouteName={token ? "LanguageSwitcher" : "LanguageSwitcher"}>
                <Stack.Screen name="LanguageSwitcher" component={LanguageSwitcherScreen} />
                <Stack.Screen name="Verification" component={VerificationScreen} />
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                <Stack.Screen name="Sign" component={SignScreen} />
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Topic" component={TopicScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
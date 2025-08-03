import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import TopicScreen from '../screens/TopicScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }} initialRouteName="Main">
                <Stack.Screen name='Main' component={MainScreen} />
                <Stack.Screen name='Topic' component={TopicScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
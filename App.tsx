import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import MainScreen from './src/screens/MainScreen';

const App = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <MainScreen />
            <StatusBar style='dark' />
        </View>
    );
}

export default App;
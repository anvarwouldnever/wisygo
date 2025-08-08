import { View, Text, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useScale } from '../../hooks/useScale';

const Buttons = ({ createChild, loading, stage, name, gender, setStage, engagementTime, setPrevStage }) => {

    const { s, vs } = useScale()

    const move = (stage === 1 && name === null) || (stage === 4 && gender === null) || (stage === 5 && engagementTime === null)

    const changeStage = (newStage: number) => {
        if (loading) return;
      
        if (newStage < stage) {
            if (newStage < 1) return;
            setPrevStage(stage);
            setStage(newStage);
            return;
        }
      
        if (move) return;
      
        if (newStage === 6) {
            createChild();
            return;
        }
      
        if (newStage > 5) return;
      
        setPrevStage(stage);
        setStage(newStage);
    };

    return (
        <View style={{ width: '100%', height: vs(56), paddingHorizontal: vs(24), flexDirection: 'row', justifyContent: 'space-between'}}>
                    
            <TouchableOpacity disabled={stage === 1 || loading} onPress={() => changeStage(stage - 1)} style={{ backgroundColor: '#F8F8F833', height: '100%', width: vs(56), borderRadius: 100, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#FFFFFF1A' }}>
                <Ionicons name='arrow-back' size={vs(24)} color={'white'} />
            </TouchableOpacity>

            <TouchableOpacity disabled={loading || move} onPress={() => changeStage(stage + 1)} style={{ opacity: move ? 0.5 : 1, width: s(121), height: '100%', backgroundColor: 'white', borderRadius: 100, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: vs(8)}}>
                <Text style={{ fontSize: Platform.isPad ? vs(16) : vs(14), fontWeight: '600', color: '#504297' }}>Continue</Text>
                <Ionicons size={vs(24)} name='arrow-forward' color={'#504297'} />
            </TouchableOpacity>

        </View>
    )
}

export default Buttons;
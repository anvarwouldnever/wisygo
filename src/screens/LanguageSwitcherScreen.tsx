import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Logo from '../components/Logo';
import { useScale } from '../hooks/useScale';
import Button from './LanguageSwitcher/Button';
import Languages from './LanguageSwitcher/Languages';

const LanguageSwitcherScreen = () => {

    const { vs } = useScale();

    const [chosenLang, setChosenLang] = useState<{name: string; tag: string}>(null);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            
            <Logo />
            
            <View style={{flex: 1, width: '100%', alignItems: 'center', padding: vs(24), backgroundColor: 'white', height: 'auto', justifyContent: 'space-between'}}>

                <View style={{width: '100%', gap: vs(24), height: vs(630), justifyContent: 'space-between'}}>

                    <Text style={{fontWeight: '400', fontSize: vs(14), textAlign: 'center', color: "#555555", height: vs(24)}}>Select language to proceed</Text>
                        
                    <Languages  setChosenLang={setChosenLang} chosenLang={chosenLang} />

                    <Button chosenLang={chosenLang} />

                </View>

            </View>

        </SafeAreaView>
    )
}

export default LanguageSwitcherScreen;



















{/* <View style={{ width: s(312), height: vs(618), alignSelf: 'center', marginTop: 30, justifyContent: 'space-between', borderWidth: 1}}>
                <View style={{width: s(312), height: vs(24), alignSelf: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: '400', fontSize: vs(14), textAlign: 'center', color: "#555555"}}>Select language to proceed</Text>
                </View>
                <View style={{width: s(312), height: vs(490), alignSelf: 'center', alignItems: 'center'}}>
                    <FlatList 
                        data={langs}
                        renderItem={renderItem}
                        scrollEnabled={false}
                        contentContainerStyle={{alignSelf: 'center', gap: vs(12)}}
                    />
                </View>
                <TouchableOpacity onPress={chosenLang === null? () => {return} : () => {}} style={{width: s(312), height: vs(56), alignSelf: 'center', borderRadius: 100, opacity: chosenLang === null? 0.5 : 1, backgroundColor: '#504297', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: vs(14), color: 'white', fontWeight: '600'}}>{"Continue"}</Text>
                </TouchableOpacity>
            </View> */}
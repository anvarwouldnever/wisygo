import { View, Text, FlatList } from 'react-native'
import React, { useState, useRef, useCallback } from 'react'
import { useScale } from '../../hooks/useScale';
import Dots from './Slides/Dots';
import SlideList from './Slides/SlideList';
import { getOnboardings } from './hooks/getOnboardings';

const Slides = () => {

    const { vs } = useScale()

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const { onboardings, loading, error } = getOnboardings();

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', height: 'auto', width: '100%', gap: vs(25)}}>

            <SlideList currentIndex={currentIndex} onboardings={onboardings} setCurrentIndex={setCurrentIndex}  />
        
            <Dots length={onboardings?.length} currentIndex={currentIndex} />

        </View>
    )
}

export default Slides;
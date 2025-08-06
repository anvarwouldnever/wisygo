import { View, Text, FlatList, Platform } from 'react-native'
import React, { useCallback } from 'react'
import LottieView from 'lottie-react-native';
import { SvgUri } from 'react-native-svg';
import { Image } from 'expo-image';
import { useScale } from '../../../hooks/useScale';
import * as Haptics from 'expo-haptics';

const SlideList = ({ currentIndex, setCurrentIndex, onboardings }) => {

    const { vs, windowWidth } = useScale();

    const slideWidth = (windowWidth - vs(48))

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };
          
    const onViewableItemsChanged = useCallback(({ viewableItems }) => {
        if (viewableItems?.length > 0) {
            const newIndex = viewableItems[0].index;
    
            if (newIndex !== currentIndex) {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
                setCurrentIndex(newIndex);
            }
        }
    }, [currentIndex]);

    const renderItem = ({ item }) => {

        const isLottie = item?.image?.url.endsWith('json')
        const isSvg = item?.image?.url.endsWith('svg')

        return (
            <View style={{alignItems: 'center', width: slideWidth, height: vs(402), justifyContent: 'flex-start'}}>

                {isLottie? 
                    <LottieView source={{ uri: item?.image?.url }} autoPlay style={{width: slideWidth, height: vs(206)}} loop={true} resizeMode='contain'/> 
                        : 
                    isSvg?
                        <SvgUri uri={item?.image?.url} width={slideWidth} height={vs(206)}/>
                        :
                        <Image style={{width: slideWidth, height: vs(206)}} contentFit='contain' source={{ uri: item?.image?.url }}/>
                }

                <View style={{width: slideWidth, height: 'auto', marginTop: vs(10)}}>
                    <View style={{width: slideWidth, height: 'auto', flexDirection: 'column'}}>
                        <Text style={{letterSpacing: 0.5, fontWeight: '600', color: '#222222', fontSize: Platform.isPad? vs(26) : vs(24), textAlign: 'center'}}>{item?.header1}</Text>
                        {item?.title != '' && <Text style={{marginTop: 5, letterSpacing: 0.5, fontWeight: '600', color: '#222222', fontSize: Platform.isPad? vs(26) : vs(24), textAlign: 'center'}}>{item?.title}</Text>}
                    </View>
                    <View style={{paddingTop: vs(10), alignItems: 'center', justifyContent: 'center', width: slideWidth, height: 'auto'}}>
                        <Text style={{color: '#555555', fontSize: Platform.isPad? vs(14) : vs(12), fontWeight: '400', textAlign: 'center', lineHeight: Platform.isPad? vs(26) : vs(24)}}>{item?.description}</Text>
                    </View>
                </View>
            </View>
        )
    };
    
    if (!onboardings?.length) return null;

    return (
        <FlatList
            data={onboardings} 
            renderItem={renderItem}
            keyExtractor={(item) => item?.id.toString()}
            horizontal
            pagingEnabled
            style={{ width: slideWidth, alignSelf: 'center' }}
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            viewabilityConfig={viewabilityConfig}
            onViewableItemsChanged={onViewableItemsChanged}
            initialNumToRender={2}
        />
    )
}

export default SlideList
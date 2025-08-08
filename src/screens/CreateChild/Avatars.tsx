import { View, Text, Dimensions, Platform } from 'react-native'
import React, { useRef } from 'react'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { useScale } from '../../hooks/useScale';
import { getAvatars } from './hooks/getAvatars';
import Item from './Avatars/Item';
import Dots from './Avatars/Dots';

const { width, height } = Dimensions.get('window');
const AvatarWidth = width * (180 / 360)
const AvatarHeight = height * (180 / 800)
const Spacing = width * (10 / 360);

const Avatars = ({ avatar, setAvatar }) => {

    const { vs, windowWidth } = useScale()

    const scrollX = useSharedValue<number>(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.x;
        },
    });
      
    const viewabilityConfig = {
        itemVisiblePercentThreshold: 70,
    };
      
    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems?.length > 0) {
            setAvatar(viewableItems[0].index);
        }
    }).current;

    const { avatars, loading, error } = getAvatars()

    const lastIndex = avatars?.length - 1;

    return (
        <View style={{width: windowWidth, height: 'auto', gap: vs(44), alignItems: 'center', justifyContent: 'center'}}>
            
            <Text style={{ fontSize: Platform.isPad ? vs(22) : vs(20), fontWeight: '600', textAlign: 'center' }}>
                Choose an avatar for your child
            </Text>

            <Animated.FlatList
                data={avatars}
                keyExtractor={item => item?.id}
                horizontal
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                decelerationRate="fast"
                onScroll={scrollHandler}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                snapToInterval={AvatarWidth + Spacing}
                renderItem={({item, index}) => {
                    return (
                        <Item avatarHeight={AvatarHeight} avatarWidth={AvatarWidth} spacing={Spacing} item={item} index={index} scrollX={scrollX} lastIndex={lastIndex}/>
                    )}
                }    
            />  

            <Dots avatars={avatars} currentAvatar={avatar} />
            
        </View>
    )
}

export default Avatars
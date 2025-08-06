import React from 'react'
import { useScale } from '../hooks/useScale'
import { Image } from 'expo-image'

const Logo = () => {

    const { s, vs } = useScale();

    return <Image source={require('../../assets/logo.png')} contentFit='contain' style={{alignSelf: 'center', height: vs(64), width: vs(204)}}/>
}

export default Logo;
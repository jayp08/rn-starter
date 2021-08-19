import React from "react";
import { Text, View } from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" imageSource={require('../../assets/images/forest.jpg')} />
        <ImageDetail title="Beach" imageSource={require('../../assets/images/beach.jpg')} />
        <ImageDetail title="Mountain" imageSource={require('../../assets/images/mountain.jpg')} />
    </View>
}

export default ImageScreen;
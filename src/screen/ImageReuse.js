import React from 'react';
import { View } from 'react-native';
import ImageScreen from '../../components/ImageScreen';
const ImageReuse = () => {
    return (
        <View>
            <ImageScreen name="Imran Khan" imageSource={require('../../assets/imrankhan.jpg')} />
            <ImageScreen name="Babar Azam" imageSource={require('../../assets/babarazam.jpg')} />
            <ImageScreen name="Imran Riaz Khan " imageSource={require('../../assets/imranriazkhan.jpg')} />

        </View>
    )
};



export default ImageReuse;
import React from 'react';
import {Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';


const Card = ({text, image, h, w,styles, onPress, fontSize, overlayFlag, br}) => {
    const {width, height} = Dimensions.get('window');
    return (
        <TouchableOpacity 
            style = {[styles,{
                width: w,
                height: h,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: br === undefined ? 25 : br,
                elevation: 10,
                alignItems: 'center',
                justifyContent: 'center',
            }]}
            activeOpacity = {onPress !== undefined ? 0.5 : 1}
            onPress = {onPress}
        >
            <ImageBackground source = {image} style = {{width: w, height: h,}} imageStyle = {{borderRadius: br === undefined ? 25 : br}}>
                {overlayFlag === undefined && <View style = {{width: w, height: h, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: br === undefined ? 25 : br, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style = {{fontSize: fontSize === undefined ? 35 : fontSize, color: 'white'}}>{text}</Text>
                </View>}
                {overlayFlag === true && <Text style = {{fontSize: fontSize === undefined ? 25 : fontSize, color: 'white'}}>{text}</Text>}
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default Card;
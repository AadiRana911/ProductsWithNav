import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';

const ProductList = ({type, price, image}) => {
    return (
        <View style = {{width: '100%', backgroundColor: 'white', marginTop: 5,}}>
        <View style = {{paddingHorizontal: 20, width: '100%', marginVertical: 2}}>
            <View style={{flexDirection: 'row'}}>
            <View style = {{flexDirection: 'row', width: 300}}>          
            <View style = {{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center',borderRadius: 15, marginTop: 15}}>
                <Image
                    style={{ width: 100, height: 150, borderRadius: 2,padding: 10 }}
                    source={{uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}}
                />
                <Text style = {{fontSize: 18,paddingHorizontal: 10, paddingVertical: 3, color: 'black', alignSelf: 'center'}}>{type}</Text>
            </View>
            </View>
            </View>
            <View style = {{marginBottom: 10, flexDirection: 'row-reverse', marginHorizontal: 15}}>
                <Text style = {{fontSize: 20, color:'green'}}>{price}</Text>
            </View>
        </View>
        </View>

    )
}

export default ProductList
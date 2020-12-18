import React, {useState} from 'react';
import {Header, Divider} from 'react-native-elements';

import {View, Text, Dimensions, TextInput, StyleSheet, Image, FlatList} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Employees = ({navigation}) => {
    return(
        <View style = {{width: '100%', backgroundColor: 'white', marginTop: 5,}}>
        <ScrollView>
        <View style = {{paddingHorizontal: 20, width: '100%', marginVertical: 2}}>
            <TouchableOpacity onPress={() => navigation.navigate('President')}>
            
            <View style = {{flexDirection: 'row', width: 300}}>          
            <View style = {{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center',borderRadius: 15, marginTop: 15}}>
                <Image
                    style={{ width: 100, height: 150, borderRadius: 2,padding: 10 }}
                    source={{uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}}
                />
                <Text style = {{fontSize: 18,paddingHorizontal: 10, paddingVertical: 3, color: 'black', alignSelf: 'center'}}>Elizabeth</Text>
            </View>
            </View>
            </TouchableOpacity>
            <View style = {{marginBottom: 10, flexDirection: 'row-reverse', marginHorizontal: 15}}>
                <Text style = {{fontSize: 20, color:'green'}}>President</Text>
            </View>
        </View>
        <View style = {{paddingHorizontal: 20, width: '100%', marginVertical: 2}}>
            <View style={{flexDirection: 'row'}}>
            <View style = {{flexDirection: 'row', width: 300}}>          
            <View style = {{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center',borderRadius: 15, marginTop: 15}}>
                <Image
                    style={{ width: 100, height: 150, borderRadius: 2,padding: 10 }}
                    source={{uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}}
                />
                <Text style = {{fontSize: 18,paddingHorizontal: 10, paddingVertical: 3, color: 'black', alignSelf: 'center'}}>Elon </Text>
            </View>
            </View>
            </View>
            <View style = {{marginBottom: 10, flexDirection: 'row-reverse', marginHorizontal: 15}}>
                <Text style = {{fontSize: 20, color:'green'}}>Vice-President</Text>
            </View>
        </View>
        <View style = {{paddingHorizontal: 20, width: '100%', marginVertical: 2}}>
            <View style={{flexDirection: 'row'}}>
            <View style = {{flexDirection: 'row', width: 300}}>          
            <View style = {{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center',borderRadius: 15, marginTop: 15}}>
                <Image
                    style={{ width: 100, height: 150, borderRadius: 2,padding: 10 }}
                    source={{uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}}
                />
                <Text style = {{fontSize: 18,paddingHorizontal: 10, paddingVertical: 3, color: 'black', alignSelf: 'center'}}>John</Text>
            </View>
            </View>
            </View>
            <View style = {{marginBottom: 10, flexDirection: 'row-reverse', marginHorizontal: 15}}>
                <Text style = {{fontSize: 20, color:'green'}}>General Secretary</Text>
            </View>
        </View>
        
        </ScrollView>
        </View>


    )
}

export default Employees
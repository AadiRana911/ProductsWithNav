import React, {useState} from 'react';
import {Header, Divider} from 'react-native-elements';

import {View, Text, Dimensions, TextInput, StyleSheet, Image, ScrollView} from 'react-native';
import ProductList from '../../components/ProductList';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Products = ({navigation}) => {
    const {height, width} = Dimensions.get('window');
    // const [data, setData] = useState([
    //     {
    //         name: 'Chocolate',
    //         id: '1',
    //         price: 'Rs .100',
    //         image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
    //     },
    //     {
    //         name: 'Cat',
    //         id: '2',
    //         price: 'Rs. 20000',
    //         image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
    //     },
    //     {
    //         name: 'Chips',
    //         id: '3',
    //         price: 'Rs. 30',
    //         image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
    //     },
    //     {
    //         name: 'Biscuits',
    //         id: '4',
    //         price: 'Rs. 15',
    //         image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}

    //     },
        
    // ])
    return (
        // <View style = {{flex: 1, paddingBottom: 10, backgroundColor: 'rgba(200, 200, 200, 0.6)'}}>
        //     <Header
        //     containerStyle={{height: 100, paddingHorizontal: 10, borderRadius: 5}}
        //     backgroundColor = 'tomato'
        //     centerComponent = {<Text style = {{color: 'white', fontSize: 22}}>Product List</Text>} />
        //     <View style = {{flex: 1}}>
        //         <View style = {{flex: 1}}>
        //         <FlatList 
        //             data = {data}
        //             keyExtractor = {(item, index) => index.toString()}
        //             renderItem = {({item}) => {
        //                 return(
        //                     <ProductList 
        //                     type= {item.name}
        //                     price= {item.price}
        //                     image={item.image}
        //                     />
                           
        //                 )
        //             }}
        //         />
        //         </View>
        //     </View>
        // </View>
        <View style = {{width: '100%', backgroundColor: 'white', marginTop: 5,}}>
        <ScrollView>
        <View style = {{paddingHorizontal: 20, width: '100%', marginVertical: 2}}>
            <TouchableOpacity onPress={() => {navigation.navigate('Cat')}}>
            <View style = {{flexDirection: 'row', width: 300}}>          
            <View style = {{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center',borderRadius: 15, marginTop: 15}}>
                <Image
                    style={{ width: 100, height: 150, borderRadius: 2,padding: 10 }}
                    source={{uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}}
                />
                <Text style = {{fontSize: 18,paddingHorizontal: 10, paddingVertical: 3, color: 'black', alignSelf: 'center'}}> Russian Cat</Text>
            </View>
            </View>
            </TouchableOpacity>
            <View style = {{marginBottom: 10, flexDirection: 'row-reverse', marginHorizontal: 15}}>
                <Text style = {{fontSize: 20, color:'green'}}>$ 2030</Text>
            </View>
        </View>
        <View style = {{paddingHorizontal: 20, width: '100%', marginVertical: 2}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Chocolate')}}>
            <View style = {{flexDirection: 'row', width: 300}}>          
            <View style = {{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center',borderRadius: 15, marginTop: 15}}>
                <Image
                    style={{ width: 100, height: 150, borderRadius: 2,padding: 10 }}
                    source={{uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}}
                />
                <Text style = {{fontSize: 18,paddingHorizontal: 10, paddingVertical: 3, color: 'black', alignSelf: 'center'}}>Chocolate </Text>
            </View>
            </View>
            </TouchableOpacity>
            <View style = {{marginBottom: 10, flexDirection: 'row-reverse', marginHorizontal: 15}}>
                <Text style = {{fontSize: 20, color:'green'}}>$ 20</Text>
            </View>
        </View>
        <View style = {{paddingHorizontal: 20, width: '100%', marginVertical: 2}}>
            <TouchableOpacity onPress={()=> {navigation.navigate('Chips')}}>
            <View style = {{flexDirection: 'row', width: 300}}>          
            <View style = {{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center',borderRadius: 15, marginTop: 15}}>
                <Image
                    style={{ width: 100, height: 150, borderRadius: 2,padding: 10 }}
                    source={{uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}}
                />
                <Text style = {{fontSize: 18,paddingHorizontal: 10, paddingVertical: 3, color: 'black', alignSelf: 'center'}}>Chips</Text>
            </View>
            </View>
            </TouchableOpacity>
            <View style = {{marginBottom: 10, flexDirection: 'row-reverse', marginHorizontal: 15}}>
                <Text style = {{fontSize: 20, color:'green'}}>$ 10</Text>
            </View>
        </View>
        
        </ScrollView>
        </View>


    )
}

export default Products
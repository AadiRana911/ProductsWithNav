import React from 'react';
import { View, Dimensions } from 'react-native';

import styles from './styles';
import Card from '../../components/Card';

const Home = ({navigation}) => {
    const {height, width} = Dimensions.get('window');
    return(
        <View style = {{flex: 1, padding: 10, marginVertical: 10, justifyContent: 'center'}}>
            
            <View style = {{marginBottom: 10}} >
            <Card onPress={() => navigation.navigate('Products')} h = {height/3.7} w = {width-20} image = {require('../../assets/products.jpg')} text = {'Products'}/>
            </View>
            <View style = {{marginBottom: 10}}>
            <Card onPress={() => navigation.navigate('Employees')} h = {height/3.7} w = {width-20} image = {require('../../assets/employees.jpg')} text = {'Employees'}/>
            </View>
            <View style = {{marginBottom: 10}}>
            <Card onPress={() => navigation.navigate('Orders')} h = {height/3.7} w = {width-20} image = {require('../../assets/orders.jpg')} text = {'Orders'}/>
            </View>
        </View>
        
        
    );

}

export default Home;
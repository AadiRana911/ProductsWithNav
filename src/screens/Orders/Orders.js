import React, {useState} from 'react';
import {Header, Divider} from 'react-native-elements';
import { DataTable } from 'react-native-paper';


import {View, Text, Dimensions, TextInput, StyleSheet, Image, FlatList} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Orders = ({navigation}) => {
    return(
    <DataTable>
    <DataTable.Header>
      <DataTable.Title>Product name</DataTable.Title>
      <DataTable.Title numeric>Order Number</DataTable.Title>
      <DataTable.Title numeric>Price</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row onPress={()=>{navigation.navigate('Chocolate')}}>
      <DataTable.Cell>Chocolate</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row onPress={()=>{navigation.navigate('Chips')}}>
      <DataTable.Cell>Chips</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>

    )
}

export default Orders
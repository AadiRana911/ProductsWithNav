/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Products from './src/screens/Products';
import Cat from './src/screens/Products/Cat'
import Chips from './src/screens/Products/Chips'
import Chocolate from './src/screens/Products/Chocolate'
import Employees from './src/screens/Employees'
import Orders from './src/screens/Orders';
import President from './src/screens/Employees/President';

const Stack = createStackNavigator();
const App = () => {
  return (
  
   <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name='Home' component={Home} options = {{headerShown: false}} options = {{headerShown: false}} />
     <Stack.Screen name='Products' component={Products} options = {{headerShown: true}} options = {{headerShown: false}} />
     <Stack.Screen name='Cat' component={Cat} options = {{headerShown: true}} options = {{headerShown: false}} />
     <Stack.Screen name='Chocolate' component={Chocolate} options = {{headerShown: true}} options = {{headerShown: false}} />
     <Stack.Screen name='Chips' component={Chips} options = {{headerShown: true}} options = {{headerShown: false}} />     
     <Stack.Screen name= 'Employees' component ={Employees} options = {{headerShown: true}} options = {{headerShown: false}} />
     <Stack.Screen name='President' component={President} options = {{headerShown: true}} options = {{headerShown: false}} />
     <Stack.Screen name='Orders' component={Orders} options = {{headerShown: true}} options = {{headerShown: false}} /> 
     </Stack.Navigator>
   </NavigationContainer>
  );
};



export default App;

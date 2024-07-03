import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Home from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ItemListCategory from './src/screens/ItemListCategory';

const stack = createNativeStackNavigator()
export default function App() {
  return (
    // <View style={styles.container}>

      <NavigationContainer>
        <stack.Navigator initialRouteName='Inicio'>
          <stack.Screen name='Inicio' component={Home}/>
          <stack.Screen name='ItemCat' component={ItemListCategory}/>
        </stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

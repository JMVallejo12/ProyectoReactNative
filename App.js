import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Home from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ItemListCategory from './src/screens/ItemListCategory';
import ItemDetail from './src/screens/ItemDetail';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/store';

const stack = createNativeStackNavigator()
export default function App() {
  return (
    // <View style={styles.container}>
    <Provider store={store}>
      <Navigator />
    </Provider>
    
  );
}

// const styles = StyleSheet.create({
  
// });

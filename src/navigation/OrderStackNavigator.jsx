import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Order from '../screens/Order'

const OrderStackNavigator = () => {

    const stack  = createNativeStackNavigator()
    return (
        <stack.Navigator>
            <stack.Screen name='OrderScreen' component={Order}/>
        </stack.Navigator>
  )
}

export default OrderStackNavigator

const styles = StyleSheet.create({})
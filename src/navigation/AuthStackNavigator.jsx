import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Registro from '../screens/Registro'

const AuthStackNavigator = () => {

    const stack = createNativeStackNavigator()
    return (
        <stack.Navigator initialRouteName='Registro'>
            <stack.Screen name='Login' component={Login} options={{
                animation: 'ios'
            }}/>
            <stack.Screen name='Registro' component={Registro} options={{
                animation: 'ios'
            }}/>
        </stack.Navigator>
    )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})
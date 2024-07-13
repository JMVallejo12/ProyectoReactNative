import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator } from "@react-navigation/native-stack"
import MyProfile from '../screens/MyProfile'

const MyProfileStackNavigator = () => {

    const stack = createNativeStackNavigator()
    return (
        <stack.Navigator>
            <stack.Screen name='My_Profile' component={MyProfile}/>
            {/* <stack.Screen /> */}
        </stack.Navigator>
    )
}

export default MyProfileStackNavigator

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../screens/Cart'

const CartStackNavigator = () => {

    const stack = createNativeStackNavigator()
    return (
        <stack.Navigator>
            <stack.Screen name='CartScreen' component={Cart}/>
        </stack.Navigator>
    )
}

export default CartStackNavigator

const styles = StyleSheet.create({})

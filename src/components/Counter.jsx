import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from '../features/CounterSlice'
import { addToCart } from '../features/cartSlice'

const Counter = (product) => {

    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

    if(count <= 0){
        dispatch(reset())
    }

    return (
        <View style={styles.superContainer}>
        <Pressable onPress={()=> dispatch(decrement())} style={styles.press}>
            <Text style={styles.symbolReducer}></Text>
        </Pressable>
        <Text style={styles.number}>{count}</Text>
        <Pressable onPress={()=> dispatch(increment())} >
            <Text style={styles.symbol}>+</Text>
        </Pressable>
        <Pressable onPress={()=>dispatch(addToCart(product))}>
            <Text>Agregar al carrito</Text>
        </Pressable>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    superContainer:{
        // borderWidth: 1,
        // borderColor: 'black',
        flexDirection: 'row',
        width: 90,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    symbol: {
        fontSize: 40,
    },
    number:{
        fontSize: 24,
        margin: 10,
    },
    symbolReducer:{
        borderWidth: 1,
        borderColor: 'black',
        width: 14,
        height: 0,
        marginTop: 4,
    },
    press: {
        // borderWidth: 1,
        // borderColor: 'black',
        height: '100%',
        paddingTop: 20
    }
})
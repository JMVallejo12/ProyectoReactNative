import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useDispatch } from 'react-redux'
import { addToOrder } from '../features/orderSlice'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    console.log(item)

    const [quantity, setQuantity] = useState(0)

    function Add() {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    function Decrement() {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    function handleAddToOrder() {
        dispatch(addToOrder({ name: item.name, price: item.price, quantity }))
    }

    return (
        <View style={styles.superContainer}>
            <View style={styles.infoContainer}>
                <View>
                    <Image
                        source={{ uri: item.img }}
                        style={styles.imgStlye}
                    />
                </View>

                <View style={styles.itemDesc}>
                    <Text>{item.name}</Text>
                    <Text>${item.price}</Text>
                </View>

            </View>

            <View style={styles.quantityStyle}>
                <Pressable onPress={Decrement} style={styles.press}>
                    <Text style={styles.symbolReducer}></Text>
                </Pressable>
                <Text style={styles.quantityText}>{quantity}</Text>
                <Pressable onPress={Add}>
                    <Text style={styles.symbol}>+</Text>
                </Pressable>
            </View>
            
            <Pressable style={styles.pressOrder} onPress={handleAddToOrder}>
                <Text style={styles.textPress}>Agregar a la orden</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    superContainer: {
        borderWidth: 1,
        borderColor: 'color',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 0,
        paddingLeft: 20,
        gap: 15
    },
    imgStlye: {
        height: 100,
        width: 100,
    },
    itemDesc: {
        flexDirection: 'colum',
        marginTop: 5,
    },
    quantityStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: 90,
        justifyContent: 'space-between',
    },
    symbol: {
        fontSize: 40,
    },
    symbolReducer: {
        borderWidth: 1,
        borderColor: 'black',
        width: 14,
        height: 0,
        marginTop: 4,
    },
    quantityText: {
        fontSize: 24,
    },
    pressOrder: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        padding: 2,
        height: 50,
        width: 100, 
    },
    textPress: {
        textAlign: 'center',
        color: 'white',
        flexWrap: 'wrap', 
    },
    infoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    }
});

export default CartItem;

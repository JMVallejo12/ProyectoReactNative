// OrderItem.js
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { usePostOrderMutation } from '../services/shopApi'

const OrderItem = ({ item, navigation, onOrderConfirmed }) => {
    const [triggerPostOrder] = usePostOrderMutation()

    async function postOrder() {
        try {
            await triggerPostOrder({ item })
            onOrderConfirmed()
            navigation.navigate('Tus Ordenes')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.orderItem}>
            <View style={styles.orderLeft}>
                <Text>{item.name} - ${item.price} x {item.quantity}</Text>
                <Text>Total: ${item.totalPrice}</Text>
            </View>
            <View style={styles.orderRight}>
                <Pressable style={styles.press} onPress={postOrder}>
                    <Text style={styles.textPress}>Confirmar órden</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    orderItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orderLeft: {
        flex: 2,
    },
    orderRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
    press: {
        backgroundColor: 'black',
        padding: 8
    },
    textPress: {
        color: 'white',
        fontSize: 16,
    },
});

export default OrderItem;

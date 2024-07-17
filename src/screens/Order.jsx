import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const Order = () => {
    const orderList = useSelector((state) => state.order.orderItems)
    console.log(orderList)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order</Text>
            <FlatList
                data={orderList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.orderItem}>
                        <Text>{item.name} - ${item.price} x {item.quantity}</Text>
                        <Text>Total: ${item.totalPrice}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    orderItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    }
});

export default Order;

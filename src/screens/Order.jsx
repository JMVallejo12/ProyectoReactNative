// Order.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from '../components/OrderItem'
import { useGetOrderQuery } from '../services/shopApi'

const Order = ({ navigation }) => {
    const orderList = useSelector((state) => state.order.orderItems)
    const { data, refetch } = useGetOrderQuery()
    const [refreshing, setRefreshing] = useState(false);

    // Para recargar el flatlist de las ordenes confirmadas
    const handleRefresh = async () => {
        setRefreshing(true);
        await refetch()
        setRefreshing(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Órdenes pendientes</Text>
            <FlatList
                data={orderList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <OrderItem item={item} navigation={navigation} onOrderConfirmed={handleRefresh} />
                )}
                style={styles.flatList}
            />
            <Text style={styles.title}>Órdenes confirmadas</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.confirmedOrderItem}>
                        <Text>{item.item.name} - ${item.item.price} x {item.item.quantity}</Text>
                        <Text>Total: ${item.item.totalPrice}</Text>
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={['black']}
                        progressBackgroundColor="white"
                    />
                }
                style={styles.flatList}
            />
        </View>
    );
};

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
    flatList: {
        marginBottom: 16,
    },
    confirmedOrderItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
});

export default Order;

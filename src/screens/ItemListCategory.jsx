import { View, StyleSheet, Text, FlatList } from "react-native";
import Header from "../components/Header";
// import products from '../data/products.json'
import ProductItem from "../components/ProductItem";
import { useGetProductsByCategoryQuery } from "../services/shopApi";
import { useEffect, useState } from "react";

function ItemListCategory({navigation, route}){
    
    const {category} = route.params
    
    const {data, isLoading, error} = useGetProductsByCategoryQuery(category.name)
    if(isLoading){
        return(
            <View style={styles.loadingContainer}>
                <Text>
                    Cargando...
                </Text>
            </View>
        )

    }    

    
    return(
        <View style={styles.superContainer}>
            <FlatList
                keyExtractor={(product) => product.id}
                data={data}
                renderItem={({item})=> <ProductItem product={item} navigation={navigation} route={route}/>}
                style={styles.flatContainer}
                // haciendo que los elementos se muestren en columnas
                numColumns={4}
                columnWrapperStyle={styles.row} 
                contentContainerStyle={styles.flatContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatContainer: {
        padding: 5,
    },
    superContainer: {
        flex: 1,
    },
    row: {
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 10,
        flexWrap: 'wrap'
    },

})

export default ItemListCategory
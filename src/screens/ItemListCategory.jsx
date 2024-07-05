import { View, StyleSheet, Text, FlatList } from "react-native";
import Header from "../components/Header";
import products from '../data/products.json'
import ProductItem from "../components/ProductItem";

function ItemListCategory({navigation, route}){
    
    const {category} = route.params
    
    const mainFilter = products.filter((product) => product.cat === category)

    return(
        <View style={styles.superContainer}>
            <Header title_header={"ItemListCategory"}/>
            <FlatList
                keyExtractor={(product) => product.id}
                data={mainFilter}
                renderItem={({item})=> <ProductItem product={item} navigation={navigation} route={route}/>}
                style={styles.flatContainer}
                // haciendo que los elementos se muestren en columnas
                numColumns={3}
                columnWrapperStyle={styles.row} 
                contentContainerStyle={styles.flatContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatContainer: {
        padding: 10,
        
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
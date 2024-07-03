import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import products from '../data/products.json'

function ItemListCategory({navigation, route}){

    const {category} = route.params

    const mainFilter = products.filter((product) => product.cat)

    return(
        <View>
            <Header title_header={"ItemListCategory"}/>
        </View>
    )
}


export default ItemListCategory
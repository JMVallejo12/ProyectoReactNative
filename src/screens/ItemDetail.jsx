import { View, StyleSheet, Text } from "react-native";

function ItemDetail({navigation, route}){
    const {product} = route.params
    return(
        <View style={styles.superContainer}>
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ItemDetail
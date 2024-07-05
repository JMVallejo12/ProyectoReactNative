import { View, StyleSheet, Text, Image } from "react-native";

function ItemDetail({navigation, route}){
    const {product} = route.params
    return(
        <View style={styles.superContainer}>
            <View style={styles.container}>
                <Image
                    source={{uri: product.img}}
                    style={styles.image}
                />
                <Text style={styles.text}>{product.name}</Text>
                <Text style={styles.text}>${product.price}</Text>
                <Text style={styles.text}>{product.desc}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 200,
    },
    superContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
    },
    container:{
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
    }

})

export default ItemDetail
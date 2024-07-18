import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Dimensions } from "react-native";

function ProductItem({navigation, product, route}){
    const {height} = Dimensions.get('window')
    const  containerHeight = height * 0.20
    return(
        <View style={styles.superContainer}>
            <Pressable style={styles.itemContainer} onPress={()=> navigation.navigate('Detalle', {product})}>
                <Image 
                    source={{uri: product.img}}
                    style={styles.imageStyle}
                />
                <Text style={styles.textProduct}>{product.name}</Text>
                <Text></Text>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    superContainer:{
        borderWidth: 1,
        borderColor: 'black',
        height: 160,
        margin: 5
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 100,
        
    },
    imageStyle: {
        width: 90,
        height: 90,
        marginBottom: 10,
    },
    textProduct: {
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: 'center',
    }
})

export default ProductItem
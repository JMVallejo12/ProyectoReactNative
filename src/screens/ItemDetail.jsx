import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function ItemDetail({navigation, route}){
    const dispatch = useDispatch()
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
                {/* <Counter product={product}/> */}
                <Pressable onPress={()=>dispatch(addToCart(product))}>
                    <Text>Agregar la carrito</Text>
                </Pressable>
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
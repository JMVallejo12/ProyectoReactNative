import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Cart({navigation}){
    const cartList = useSelector((state)=> state.cart.value.cart)
    console.log(cartList)

    return(
        <View style={styles.superContainer}>
            { cartList.length === 0 ? 
                <View style={styles.noneContainer}>
                    <Text style={styles.noneText}>
                        No tenés items en el carrito
                    </Text>
                    <Pressable onPress={()=>navigation.navigate('Inicio')} style={styles.press}>
                        <Text style={styles.textPress}>Ir a la tienda</Text>
                    </Pressable>
                </View>
                
            :  <FlatList
                data={cartList}
                keyExtractor={(item, index)=> index}
                renderItem={({item})=>(
                    <CartItem item={item}/>
                )}
            />}
        </View>
    )
}

const styles = StyleSheet.create({
    noneContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    noneText: {
        fontSize: 24
    },
    press: {
        backgroundColor: 'black',
        padding: 10,
        height: 40,
        marginTop: 10
    },
    textPress: {
        color: 'white'
    }
})

export default Cart
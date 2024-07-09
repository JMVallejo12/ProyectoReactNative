import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Cart(){
    const cartList = useSelector((state)=> state.cart.value.cart)
    // console.log(cartList)

    return(
        <View style={styles.superContainer}>
            <FlatList
                data={cartList}
                keyExtractor={(item, index)=> index}
                renderItem={({item})=>(
                    <CartItem item={item}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Cart
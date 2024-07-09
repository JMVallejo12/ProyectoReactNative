import { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useSelector } from 'react-redux'

const CartItem = ({item}) => {
    console.log(item)

    const [quantity, setQuantity] = useState(0)

    function Add(){
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    function Decrement(){
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    return (
        <View style={styles.superContainer}>
            <View>
                <Image
                    source={{uri: item.img}}
                    style={styles.imgStlye}
                />
            </View>

            <View style={styles.itemDesc}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
            </View>

            <View style={styles.quantityStyle}>
                <Pressable onPress={()=>Decrement()} style={styles.press}>
                    <Text style={styles.symbolReducer}></Text>
                </Pressable>
                    <Text style={styles.quantityText}>{quantity}</Text>
                <Pressable  onPress={()=> Add()}>
                    <Text style={styles.symbol}>+</Text>
                </Pressable>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    superContainer: {
        borderWidth: 1,
        borderColor: 'color',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
    },
    imgStlye: {
        height: 100,
        width: 100,
    },
    itemDesc:{
        borderWidth: 1,
        borderColor: 'black',
    },
    quantityStyle: {
        // borderWidth: 1,
        // borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: 90,
        justifyContent: 'space-between',
    },
    symbol: {
        fontSize: 40,
    },
    symbolReducer:{
        borderWidth: 1,
        borderColor: 'black',
        width: 14,
        height: 0,
        marginTop: 4,
    },
    quantityText: {
        fontSize: 24,
    },
    press: {
        
    }

})

export default CartItem
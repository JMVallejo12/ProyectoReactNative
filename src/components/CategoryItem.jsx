import { View, StyleSheet, Text, Pressable } from "react-native";

function CategoryItem({category, navigation}){
    return(
        <View style={styles.container}>
            <Pressable onPress={()=>navigation.navigate('ItemCat', {category})}>
                <Text style={styles.textCatItem}>{category}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        margin: 20,
        borderWidth: 1,
        borderColor: 'black',
        height: "40%",
        
    },
    textCatItem: {
        fontSize: 24,
    },

})

export default CategoryItem

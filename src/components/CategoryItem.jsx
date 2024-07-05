import { View, StyleSheet, Text, Pressable } from "react-native";

function CategoryItem({category, navigation}){
    return(
        <View style={styles.superContainer}>
            <Pressable onPress={()=>navigation.navigate('ItemCat', {category})}>
                <View style={styles.innerContainer}>
                    <Text style={styles.textCatItem}>{category}</Text>
                </View>
                
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create ({
    superContainer:{
        marginTop: 20,
        marginRight: 5,
        marginLeft: 5,
        height: "30%",
        width: 100,
        justifyContent: 'center',
        
        
    },
    textCatItem: {
        fontSize: 24,
    },
    innerContainer:{
        borderWidth: 1,
        borderColor: 'black',
        height: "100%",
        alignItems: 'center'
    }

})

export default CategoryItem

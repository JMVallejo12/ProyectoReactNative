import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { Dimensions } from "react-native";


function CategoryItem({category, navigation}){

    const { width, height} = Dimensions.get('window')
    const containerWidth = width * 0.30
    const containerHeight = height * 0.20

    return(
        <View style={[styles.superContainer, {width: containerWidth, height: containerHeight}]}>
            <Pressable onPress={()=>navigation.navigate('Categoria', {category})}>
                <View style={styles.innerContainer}>
                    <Image
                        source={{uri: category.img}}
                        style={styles.img}
                    />
                    <Text style={styles.textCatItem}>{category.name}</Text>
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
        fontSize: 22,
    },
    innerContainer:{
        borderWidth: 1,
        borderColor: 'black',
        height: "100%",
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around'
    },
    img: {
        width: '80%',
        height: '55%',
        marginTop: 10,
    }

})

export default CategoryItem

import { View, StyleSheet, FlatList } from "react-native";
import categories from '../data/categories.json'
import CategoryItem from "./CategoryItem";

function Categories(){
    return(
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({item})=>{<CategoryItem />}}
                style={styles.flatContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        
    },
    flatContainer: {
        flexDirection: "row",
    }

})

export default Categories
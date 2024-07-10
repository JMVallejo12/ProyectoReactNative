import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import categories from '../data/categories.json'
import CategoryItem from '../components/CategoryItem';
import { useGetCategoriesQuery } from '../services/shopApi';

function Home({navigation, route}) {

    const {data} = useGetCategoriesQuery()
    // console.log(data)
    // console.log(categories)
    
    return (
        <View style={styles.container}>
            <Header title_header={"Categorias"}/>
            <FlatList 
                keyExtractor={(category) => category}
                data={data}
                renderItem={({item})=>(
                    <CategoryItem category={item} navigation={navigation}/>
                )}
                horizontal={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 5,
    },

});

export default Home;

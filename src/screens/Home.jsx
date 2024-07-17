import { FlatList, StyleSheet, Text, View } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import { useGetAllProductsQuery, useGetCategoriesQuery } from '../services/shopApi';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Home({navigation, route}) {

    const {data} = useGetCategoriesQuery()
    const {data: allProducts} = useGetAllProductsQuery()
    return (
        <View style={styles.container}>
            <Title title={"CATEGORIAS"} />
            <FlatList 
                keyExtractor={(category) => category.name}
                data={data}
                renderItem={({item})=>(
                    <CategoryItem category={item} navigation={navigation}/>
                )}
                horizontal={true}
                style={[styles.flatCat]}
            />
            <Title title={"TODOS LOS PRODUCTOS"} />
            <FlatList
                keyExtractor={(prodocut) =>prodocut.id}
                data={allProducts}
                renderItem={({item})=>(
                    <ProductItem product={item} navigation={navigation}/>
                )}
                numColumns={3}
                showsVerticalScrollIndicator={false}
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
    flatCat: {
        height: 350,
    }
   

});

export default Home;

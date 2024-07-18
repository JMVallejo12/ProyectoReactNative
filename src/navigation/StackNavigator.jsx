import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet } from "react-native"
import Home from "../screens/Home"
import ItemListCategory from "../screens/ItemListCategory"
import ItemDetail from "../screens/ItemDetail"

function StackNavigator(){
    
    const stack = createNativeStackNavigator()
        
    return(
        <stack.Navigator initialRouteName='Inicio' screenOptions={{headerShown: true}}>
          <stack.Screen name='Inicio' component={Home}  options={{
            animation: 'ios',
          }} />
          <stack.Screen name='Categoria' component={ItemListCategory} options={{
            animation: 'ios',
          }}/>
          <stack.Screen name='Detalle' component={ItemDetail} options={{
            animation: 'ios',
          }}/>
        </stack.Navigator>
    )
}

const styles = StyleSheet.create({

})


export default StackNavigator
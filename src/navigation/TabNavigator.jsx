import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import StackNavigator from "./StackNavigator"
import Cart from "../screens/Cart"
import CartStackNavigator from "./CartStackNavigator"
import { Feather } from '@expo/vector-icons';
import { View } from "react-native";
import OrderStackNavigator from "./OrderStackNavigator";


function TabNavigator(){

    const tab = createBottomTabNavigator()
    return(
        <tab.Navigator screenOptions={{headerShown: false}}>
            <tab.Screen name="Tienda" component={StackNavigator}
                options={{
                    tabBarIcon: () =>{
                        return(
                            <View>
                                <Feather name="shopping-bag" size={24} color="black" />
                            </View>
                        )
                    }
                }}
            />
            <tab.Screen name="Carrito" component={CartStackNavigator}/>
            <tab.Screen name="Orden" component={OrderStackNavigator}/>
            {/* <tab.Screen name="Orden"/> */}
        </tab.Navigator>

    )
}

export default TabNavigator
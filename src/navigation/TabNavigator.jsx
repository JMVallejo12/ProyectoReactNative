import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import StackNavigator from "./StackNavigator"
import Cart from "../screens/Cart"
import CartStackNavigator from "./CartStackNavigator"
import { Feather } from '@expo/vector-icons';
import { View } from "react-native";
import OrderStackNavigator from "./OrderStackNavigator";
import MyProfileStackNavigator from "./MyProfileStackNavigator";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

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
                    },
                }}
            />
            <tab.Screen name="Carrito" component={CartStackNavigator}
                options={{
                    tabBarIcon: () =>{
                        return(
                            <View>
                                <AntDesign name="shoppingcart" size={24} color="black" />
                            </View>
                        )
                    }
                }}
            />
            <tab.Screen name="Orden" component={OrderStackNavigator}
                options={{
                    tabBarIcon: () =>{
                        return(
                            <View>
                                <FontAwesome6 name="sheet-plastic" size={24} color="black" />
                            </View>
                        )
                    }
                }}
            />
            <tab.Screen name="Perfil" component={MyProfileStackNavigator}
                options={{
                    tabBarIcon: () =>{
                        return(
                            <View>
                                <AntDesign name="user" size={24} color="black" />
                            </View>
                        )
                    }
                }}
            />
            {/* <tab.Screen name="Orden"/> */}
        </tab.Navigator>

    )
}

export default TabNavigator
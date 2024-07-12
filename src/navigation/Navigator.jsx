import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import { useSelector } from "react-redux";

function Navigator(){

    const {user} = useSelector((state)=> state.auth.value)

    return(
        <NavigationContainer>
            {user ? <TabNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})

export default Navigator
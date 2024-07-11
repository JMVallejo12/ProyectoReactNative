import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import AuthStackNavigator from "./AuthStackNavigator";

function Navigator(){

    return(
        <NavigationContainer>
            {/* <StackNavigator /> */}
            {/* <TabNavigator /> */}
            <AuthStackNavigator />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})

export default Navigator
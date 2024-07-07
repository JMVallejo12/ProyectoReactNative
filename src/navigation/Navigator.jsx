import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import TabNavigator from "./TabNavigator";

function Navigator(){

    return(
        <NavigationContainer>
            {/* <StackNavigator /> */}
            <TabNavigator />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})

export default Navigator
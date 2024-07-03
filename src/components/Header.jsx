import { View, StyleSheet, Text, StatusBar } from "react-native";

function Header({title_header}) {
    return(
        <View style={styles.contaier}>
            <StatusBar style="auto" />
            <Text style={styles.textHeader}>{title_header}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    contaier: {
        marginTop: -8,
        backgroundColor: 'black',
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        width: '100%',
        color: 'white',
    },
    textHeader: {
        color: 'white',
    }
})
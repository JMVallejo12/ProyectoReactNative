import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const Title = ({title}) => {

    const {height} = Dimensions.get('window')
    const containerHeight = height * 0.05

    return (
        <View style={[styles.superContainer,{height: containerHeight}] }>
        <Text style={styles.textTitle}>{title}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    superContainer: {
        backgroundColor: 'black',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    textTitle: {
        color: 'white',
        fontSize: 18
    }
})
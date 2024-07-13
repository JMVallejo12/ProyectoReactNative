import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import imgDefault from '../../assets/default.png'

const MyProfile = () => {
  return (
    <View style={styles.superContainer}>
        <View style={styles.imgContainer}>
            <Image
                source={imgDefault}
                style={styles.img}
            />
            <Pressable style={styles.btn}>
                <Text style={styles.btnText}>Agregar foto de perfil</Text>
            </Pressable>
        </View>

    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    img: {
        height: 150,
        width: 150,
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    btn: {
        borderWidth: 1,
        borderColor: 'black',
        width: '50%',
        marginTop: 15,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    btnText: {
        color: 'white',
        fontSize: 18,
    }
})
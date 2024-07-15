import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View, Platform } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSingUpMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/userSlice'

const Registro = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [triggerSingUp, result] = useSingUpMutation()
    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.isSuccess){
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            )
            console.log("Creado correctamente")
        }
        if(result.error){
            console.log(result.error)
        }

    }, [result])

    function onSubmit(){
        triggerSingUp({email, password, returnSecureToken: true})
        // console.log(result)
    }

    return (
        // El componente keyboardawarescrollview se utiliza para que  el contenido no se desacomode cuando aparece el teclado
        <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollView}
        enableOnAndroid={true}
        extraHeight={Platform.OS === 'android' ? 150 : 0}
        enableAutomaticScroll={true}
        >
        <View style={styles.superContainer}>
            <View style={styles.boxContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>REGISTRARSE</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.text}>Ingresa tu e-mail</Text>
                <TextInput 
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                />
                <Text style={styles.text}>Ingresa tu contraseña</Text>
                <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
                />
                <Text style={styles.text}>Confirma tu contraseña</Text>
                <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                />
                <Pressable style={styles.btnContainer} onPress={onSubmit}>
                    <Text style={styles.textBtn}>REGISTRARSE</Text>
                </Pressable>
                <Pressable style={styles.pressAccount} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textAccount}>Toca aquí si ya tienes cuenta</Text>
                </Pressable>
            </View>
            </View>
        </View>
        </KeyboardAwareScrollView>
    );
}

export default Registro

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    superContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxContainer: {
        borderWidth: 1,
        borderColor: 'black',
        width: '85%',
        paddingBottom: 20,
        marginTop: 20
    },
    titleContainer: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 18,
        width: '80%',
        paddingLeft: 10,
        marginBottom: 15,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    btnContainer: {
        borderWidth: 1,
        borderColor: 'black',
        width: 120,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'black',
    },
    textBtn: {
        color: 'white',
        fontSize: 18,
    },
    pressAccount: {
        marginTop: 10,
    },
    textAccount: {
        color: 'black',
    },
})

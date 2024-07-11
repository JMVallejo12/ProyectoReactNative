import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View, Platform } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
            <Text style={styles.title}>INICIAR SESIÓN</Text>
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
            <Pressable style={styles.btnContainer}>
              <Text style={styles.textBtn}>INICIAR SESIÓN</Text>
            </Pressable>
            <Pressable style={styles.pressAccount} onPress={() => navigation.navigate('Registro')}>
              <Text style={styles.textAccount}>Toca aquí si no tienes cuenta</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default Login

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

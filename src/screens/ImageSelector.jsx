import { Image, Pressable, StyleSheet, Text, View, Platform } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { setCameraImage } from '../features/userSlice'
import { usePostProfileImageMutation } from '../services/shopApi'
import { useDispatch, useSelector } from 'react-redux'

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null)
  const [triggerPostImage, result] = usePostProfileImageMutation()
  const dispatch = useDispatch()
  const { localId } = useSelector((state) => state.auth.value)
  const [isImageFromCamera, setIsImageFromCamera] = useState(false)

    async function verifyCameraPermission() {
      const {status} = await ImagePicker.requestCameraPermissionsAsync()
      if(!status){
        return false
      }
      console.log("camara verificada")
      return true
    } 

    async function pickImage() {
      const isCameraOk = await verifyCameraPermission()
      setIsImageFromCamera(true)
      if(isCameraOk){
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true, 
          aspect: [1,1],
          base64: true,
          quality: 0.1,
        })

        if(!result.canceled){
          setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        }
      }
    }

  async function confirmImage() {
    try {
      dispatch(setCameraImage(image))
      await triggerPostImage({ image, localId })
      navigation.goBack();
    } catch (error) {
      console.log('Error al confirmar la imagen:', error)
    }
  }

  return (
    <>
      {image ? (
        <View style={styles.superContainer}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={{ uri: image }} />
          </View>

          <Pressable onPress={pickImage} style={styles.button}>
            <Text style={styles.buttonText}>Tomar una nueva foto</Text>
          </Pressable>

          <Pressable onPress={confirmImage} style={styles.button}>
            <Text style={styles.buttonText}>Confirmar foto</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.superContainer}>
          <View style={styles.imgContainer}>
            <Text>No hay imagen para mostrar</Text>
            <Pressable onPress={pickImage} style={styles.button}>
              <Text style={styles.buttonText}>Sacar foto</Text>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
}

export default ImageSelector;

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  button: {
    marginTop: 20,
    padding: 5,
    backgroundColor: 'black',
    width: 150,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
});

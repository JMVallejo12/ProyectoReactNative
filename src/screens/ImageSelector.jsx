import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

const ImageSelector = ({navigation}) => {

  const [image, setImage] = useState(null)

  async function verifyCameraPermisson(){
    const {status} = await ImagePicker.requestCameraPermissionsAsync()
    if(!status){
      return false
    }else{
      return true
    }
    
  }

  async function pickImage(){
    const isCameraOk = await verifyCameraPermisson()
    if(isCameraOk){
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [1,1],
        allowsEditing: true,
        base64: true,
        quality: 0.2,
      })

      if (!result.canceled){
        setImage(`data:iamge/jpeg;base64,${result.assets[0].base64}`)
      }
    }
  }

  return (
    <>
      {image ? 
        <View style={styles.superContainer}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={{uri: image}}
            />
          </View>
        </View> 
      : 
        
        <View style={styles.superContainer}>
          <View style={styles.imgContainer}>
            <Text>No hay imagen para mostrar</Text>
            <Pressable onPress={pickImage}>
              <Text>Sacar foto</Text>
            </Pressable>
          </View>
        </View>

      }
    </>
    
  )
}

export default ImageSelector

const styles = StyleSheet.create({
    superContainer:{
      flex: 1,
    },
    
})
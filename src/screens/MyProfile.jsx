import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import imgDefault from '../../assets/default.png'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopApi'

const MyProfile = ({ navigation }) => {
  const { localId } = useSelector((state) => state.auth.value)
  const { data } = useGetProfileImageQuery(localId)
  const [profileImage, setProfileImage] = useState(null)

  useEffect(() => {
    if (data && data.image) {
      setProfileImage(data.image)
    }
  }, [data])

  return (
    <View style={styles.superContainer}>
      <View style={styles.imgContainer}>
        {profileImage ? (
          <Image
            source={{ uri: profileImage }}
            style={styles.img}
          />
        ) : (
          <Image
            source={imgDefault}
            style={styles.img}
          />
        )}
        <Pressable style={styles.btn} onPress={() => navigation.navigate('Image_Selector')}>
          <Text style={styles.btnText}>Agregar foto de perfil</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 75,
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
  },
})

import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { screenWidth } from '@/src/utils/constants'
import { navigate } from '@/src/utils/navigationService'
import { SCREENS } from '@/src/utils/routes'

const Sponser = (props: { data: any }) => {
 const { data } = props;
 console.log("Sponsor -- ", data)
 return (
  <Pressable style={styles.container} onPress={() => navigate(SCREENS.Categories)}>
   <Image
    source={{ uri: data?.data?.[0]?.image_uri }}
    style={styles.img}
   />
  </Pressable>
 )
}

const styles = StyleSheet.create({
 container: {
  marginHorizontal: scale(5),
  height: scale(75),
  width: screenWidth-13,
  justifyContent: 'center',
  alignItems: 'center'
 },
 img: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  borderRadius: scale(15)
 }
})
export default Sponser
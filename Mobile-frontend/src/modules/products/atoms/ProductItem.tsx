import { COLORS } from '@/src/utils/colors'
import { fonts } from '@/src/utils/fonts'
import { navigate } from '@/src/utils/navigationService'
import { SCREENS } from '@/src/utils/routes'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { scale } from 'react-native-size-matters'

const ProductItem = ({ item, isOdd }: any) => {
 return (
  <View style={[styles.productCard, { marginRight: isOdd ? 0 : scale(10) }]}>
   <View style={styles.imageContainer}>
    <Image source={{ uri: item?.image_uri }} style={styles.productImage} />
    {
     !item?.ar_uri && (
      <TouchableOpacity style={styles.button3d} onPress={() => navigate(SCREENS.ARViewer, {
       uri: item?.ar_uri
      })}>
       <MaterialCommunityIcons name='cube-scan' size={24} />
      </TouchableOpacity>
     )
    }
   </View>
   <View style={{ paddingHorizontal: scale(10) }}>
    <Text style={styles.productName}>
     {item.name}
    </Text>
    <Text numberOfLines={2} style={styles.productDescription}>
     {item?.desc}
    </Text>
    <Text numberOfLines={2} style={styles.productPrice}>
     <Text style={{ textDecorationLine: 'line-through' }}>
      ${item?.price + 599}
     </Text>
     {" "} ${item?.price}
    </Text>
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 productCard: {
  backgroundColor: COLORS.white,
  width: '48%',
  overflow: 'hidden',
  marginBottom: scale(10),
 },
 imageContainer: {
  backgroundColor: "#F7F7F7",
  width: '100%',
  height: scale(240)
 },
 productImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover'
 },
 button3d: {
  position: 'absolute',
  top: scale(10),
  right: scale(10),
  backgroundClip: COLORS.white,
  padding: scale(5),
  elevation: 5,
  zIndex: 1
 },
 productDescription: {
  fontFamily: fonts.notoMedium,
  fontSize: scale(12)
 },
 productName: {
  fontFamily: fonts.notoSemi,
  fontSize: scale(14)
 },
 productPrice: {
  fontFamily: fonts.notoRegular
 }
})

export default ProductItem
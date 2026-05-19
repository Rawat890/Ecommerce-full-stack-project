import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { COLORS } from '@/src/utils/colors'
import { fonts } from '@/src/utils/fonts'
import { slipData } from '@/src/utils/db'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const FilmSlip = () => {
 return (
  <View style={styles.container}>
   <View style={styles.gridContainer}>
    {slipData.map((item, index) => (
     <View key={index} style={styles.gridItem}>
      <Text style={styles.gridText}>{"  "}{item}</Text>
      <Text style={styles.gridText}>{"  "}{item}</Text>
      <MaterialCommunityIcons name='star-four-points' size={20} color={COLORS.grey}/>
     </View>
    ))}
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  height: scale(40),
  width: '70%'
 },
 gridContainer: {
  flexDirection: 'row',
  alignItems: 'center'
 },
 gridItem: {
  height: scale(40),
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLORS.black,
  flexDirection: 'row'
 },
 gridText: {
  textAlign: 'center',
  fontFamily: fonts.notoMedium
 }
})
export default FilmSlip
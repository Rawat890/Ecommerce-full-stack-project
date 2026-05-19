import { View, Text, StyleSheet, Pressable, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters';
import { COLORS } from '@/src/utils/colors';
import { fonts } from '@/src/utils/fonts';

interface MenuItemProps {
 item: { name: string, iconUri: string };
 isFocused: boolean;
 onSelect: () => void
}
const MenuItem: React.FC<MenuItemProps> = ({ item, isFocused, onSelect }) => {
 return (
  <Pressable style={[styles.container, isFocused && styles.focused]}>
   <Image
    source={item?.iconUri as ImageSourcePropType}
    style={styles.icon}
   />
   <Text
    style={[isFocused ? styles.textFocused : styles.textNotFocused]}
   >gfnfgn</Text>
  </Pressable>
 )
}


const styles = StyleSheet.create({
 container: {
  padding: scale(5),
  width: '23%',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: scale(12),
  backgroundColor: COLORS.lightGrey
 },
 focused: {
  backgroundColor: COLORS.black
 },
 icon: {
  width: scale(50),
  height: scale(50),
  marginVertical: scale(5)
 },
 textFocused: {
  color: COLORS.white,
  fontFamily: fonts.notoRegular
 },
 textNotFocused: {
  color: COLORS.black,
  fontFamily: fonts.notoRegular
 }
})
export default MenuItem
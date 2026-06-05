import { COLORS } from '@/src/utils/colors';
import { fonts } from '@/src/utils/fonts';
import { goBack } from '@/src/utils/navigationService';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { scale } from 'react-native-size-matters';

const SearchBar = (props: { cartlength: number }) => {
 const { cartLength } = props;
 return (
  <View style={styles.container}>
   <Pressable onPress={goBack}>
    <MaterialCommunityIcons size={24} name='arrow-left' />
   </Pressable>
   <View style={styles.searchContainer}>
    <MaterialIcons name='Search' size={20} color={COLORS.grey} />
    <TextInput
     style={styles.searchInput}
     placeholder='Search Products'
     placeholderTextColor={COLORS.lightGrey}
    />
   </View>
   <Ionicons size={24} name='heart-outline' />
   <Pressable>
    <Ionicons name='cart-sharp' size={24} />
    {cartLength > 0 && (
     <View style={styles.badge}>
      <Text style={styles.badgeText}>{cartLength}</Text>
     </View>
    )}
   </Pressable>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: scale(10),
  gap: scale(5)
 },
 searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundClip: COLORS.white,
  borderRadius: scale(20),
  width: '70%',
  marginHorizontal: scale(10),
  paddingHorizontal: scale(10)
 },
 searchIcon: {
  marginRight: scale(15)
 },
 searchInput: {
  flex: 1,
  height: scale(40),
  color: COLORS.black
 },
 cartContainer: {
  position: 'relative'
 },
 badge: {
  position: 'absolute',
  top: scale(-5),
  right: (-6),
  backgroundColor: COLORS.red,
  borderRadius: scale(10),
  width: scale(16),
  height: scale(16),
  justifyContent: 'center',
  alignItems: 'center'
 },
 badgeText: {
  fontFamily: fonts.notoSemi,
  fontSize: scale(12)
 }
})

export default SearchBar
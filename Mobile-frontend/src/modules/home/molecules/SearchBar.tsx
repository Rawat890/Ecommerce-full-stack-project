import { View, Text, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import { fonts } from '@/src/utils/fonts'
import { BASIC_COLORS, COLORS } from '@/src/utils/colors'
import { Ionicons } from '@expo/vector-icons'
import { searchItems } from '@/src/utils/db'

import Animated, {
  FadeInUp,
  FadeOutUp,
} from 'react-native-reanimated'

const SearchBar = () => {

  const [isOn, setIsOn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onToggle = () => {
    setIsOn((prev) => !prev)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === searchItems.length - 1 ? 0 : prev + 1
      )
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>

      <Pressable onPress={onToggle} style={styles.toggleContainer}>
        <Text style={styles.brandText}>
          Brand Mall
        </Text>

        <Image
          source={
            isOn
              ? require('../../../assets/icons/switch_on.png')
              : require('../../../assets/icons/switch_off.png')
          }
          style={styles.switchIcon}
        />
      </Pressable>

      <Pressable style={styles.searchContainer}>
        <Ionicons
          name='search'
          size={24}
          color={COLORS.grey}
        />
        <Animated.Text
          key={currentIndex}
          entering={FadeInUp.duration(400)}
          exiting={FadeOutUp.duration(400)}
          style={styles.text}
        >
          {searchItems[currentIndex]}
        </Animated.Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
 container: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: scale(10),
  gap: scale(4)
 },
 toggleContainer: {
  width: '20%',
  justifyContent: 'center',
  alignItems: 'center'
 },
 brandText: {
  fontFamily: fonts.notoMedium,
  fontSize: scale(10),
  color: BASIC_COLORS.text
 },
 switchIcon: {
  width: '100%',
  height: scale(30),
  marginTop: scale(4),
  resizeMode: 'contain'
 },
 textContainer: {
  flex: 1,
  height: scale(40),
  color: COLORS.black,
  marginLeft: scale(5)
 },
 searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  width: '80%',
  borderWidth: 2,
  borderColor: COLORS.lightGrey,
  paddingHorizontal: scale(10),
  height: scale(40),
  borderRadius: scale(12)
 },
 text:{
  color: BASIC_COLORS.text,
  fontFamily: fonts.notoMedium
 },
 
})
export default SearchBar
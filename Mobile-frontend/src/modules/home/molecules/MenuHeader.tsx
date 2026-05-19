import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { scale } from 'react-native-size-matters';
import { menuData } from '../../../utils/db';
import MenuItem from '../atoms/MenuItem';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/src/utils/colors';
import { fonts } from '@/src/utils/fonts';

const MenuHeader: React.FC<{ scrollY: any }> = ({ scrollY }) => {

  const [focusedIndex, setFocusedIndex] = useState(0);

  const opacityFadingStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 80], [1, 0]);
    return {
      opacity
    }
  })

  return (
    <Animated.View style={[styles.container, opacityFadingStyle]}>
      <View style={styles.flexRow}>
        {menuData.map((item, index) => {
          console.log(focusedIndex === index)
          return (
            <MenuItem
              key={index}
              item={item}
              isFocused={focusedIndex == index}
              onSelect={() => setFocusedIndex(index)} />
          )
        })}
      </View>

      <View style={styles.address}>
        <Ionicons name='home' size={24} color={COLORS.black} />
        <Text style={styles.addressText}>HOME</Text>
        <Text style={styles.addressText} numberOfLines={1}>43 High Stack, Noida, New Town India</Text>
        <Ionicons name='chevron-forward-sharp' size={24} color={COLORS.black} />

      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: scale(5)
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: scale(5)
  },
  addressText: {
    fontFamily: fonts.notoMedium
  }
})
export default MenuHeader
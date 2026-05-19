import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { scale } from 'react-native-size-matters';
import { COLORS } from '@/src/utils/colors';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const Dots = (props: { active: number, index: number, key: number }) => {

 const { index, active } = props;
 const progress = useSharedValue(0);

 useEffect(() => {
  if (active === index) {
   progress.value = withRepeat(
    withTiming(1, { duration: 3000 }),
    1,
    false,
    () => {
     progress.value = 0
    }
   )
  } else {
   progress.value = 0
  }
 }, [active, index, progress])

 const animatedStyle = useAnimatedStyle(() => ({
  width: `${progress.value * 100}%`
 }))

 return (
  <View style={[styles.container, { width: active === index ? 35 : 20 }]}>
   <Animated.View style={[styles.animatedContainer, animatedStyle]}>

   </Animated.View>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  height: scale(4),
  borderRadius: scale(50),
  backgroundColor: COLORS.blue,
  overflow: 'hidden'
 },
 animatedContainer: {
  height: '100%',
  backgroundColor: COLORS.white,
  borderRadius: scale(50)
 }
})
export default Dots
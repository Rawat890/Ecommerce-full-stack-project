import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/src/store/reduxHooks'
import { getHomeContent } from './api/actions';
import { COLORS } from '@/src/utils/colors';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import { screenHeight } from '../../utils/constants';
import MenuHeader from './molecules/MenuHeader';
import SearchBar from './molecules/SearchBar';
import MainList from './templates/MainList';

const Home = () => {

  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(state => state.home)

  useEffect(() => {
    dispatch(getHomeContent(1));
  }, [])

  const scrollYGlobal = useSharedValue(0);
  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 100], [0, -100],
      Extrapolate.CLAMP
    )

    return {
      transform: [{ translateY: translateY }]
    }
  })

  return (
    <View style={styles.container}>
      <View>
        <Animated.View style={[moveUpStyle]}>
        <View>
          <MenuHeader scrollY ={scrollYGlobal} />
          <SearchBar />
        </View>
        </Animated.View>

        <Animated.View style={[moveUpStyle, { height: screenHeight }]}>
        <MainList scrollYGlobal={scrollYGlobal}/>
        </Animated.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1
  }
})
export default Home
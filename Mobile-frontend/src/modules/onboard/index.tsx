import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { resetAndNavigate } from '@/src/utils/navigationService';
import { SCREENS } from '@/src/utils/routes';
import { scale } from 'react-native-size-matters';
import { BASIC_COLORS } from '@/src/utils/colors';

const Splash = () => {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate(SCREENS.MainNavigator)
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo_t.png')}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BASIC_COLORS.primary
  },
  image: {
    width: scale(120),
    height: scale(120)
  }
})


export default Splash
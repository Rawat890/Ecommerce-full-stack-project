import { View, Text } from 'react-native'
import React from 'react'
import { fonts } from './utils/fonts';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import Navigation from './navigation/Navigation';
import { store } from './store/store';

const App = () => {
  const [loaded] = useFonts({
    [fonts.notoBold]: require('./assets/fonts/NotoSans-Bold.ttf'),
    [fonts.notoMedium]: require('./assets/fonts/NotoSans-Medium.ttf'),
    [fonts.notoRegular]: require('./assets/fonts/NotoSans-Regular.ttf'),
    [fonts.notoSemi]: require('./assets/fonts/NotoSans-SemiBold.ttf'),
  })

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
import { View, Text } from 'react-native'
import React from 'react'
import { fonts } from './utils/fonts';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import Navigation from './navigation/Navigation';
import { store } from './store/store';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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
      <SafeAreaProvider>
        <SafeAreaView edges={['top']} style={{flex:1}}>
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
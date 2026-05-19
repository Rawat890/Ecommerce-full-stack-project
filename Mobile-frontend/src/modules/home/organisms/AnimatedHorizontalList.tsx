import { View, Text, StyleSheet, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { fonts } from '@/src/utils/fonts'
import { screenWidth } from '@/src/utils/constants'
import { navigate } from '@/src/utils/navigationService'
import { SCREENS } from '@/src/utils/routes'

const AnimatedHorizontalList = (props: { data: any }) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{data?.title}</Text>

      <FlatList
        data={data?.data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(item: any) => {
          return (
            <Pressable onPress={() => navigate(SCREENS.Categories)} style={styles.imgContainer}>
              <Image
                source={{ uri: item?.image_uri }}
                style={styles.image}
              />
            </Pressable>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(15)
  },
  imgContainer: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    borderRadius: scale(12),
    resizeMode: 'cover',
    marginRight: scale(10)
  },
  textStyle: {
    fontFamily: fonts.notoSemi,
    fontSize: scale(12)
  },
  image: {
    width: '100%',
    height: '100%',
  }
})

export default AnimatedHorizontalList
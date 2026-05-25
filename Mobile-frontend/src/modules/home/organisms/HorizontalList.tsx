import { View, Text, StyleSheet, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { screenWidth } from '@/src/utils/constants'
import { fonts } from '@/src/utils/fonts'

const HorizontalList = (props: { data: any }) => {
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
            <Pressable>
              <Image
                source={{ uri: item?.item.image_uri }}
                style={styles.image}
              />
            </Pressable>
          )
        }}
        contentContainerStyle={{paddingHorizontal: scale(5)}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: scale(10)
  },
  image: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    borderRadius: scale(12),
    resizeMode: 'cover',
    marginRight: scale(10)
  },
  textStyle: {
    fontFamily: fonts.notoSemi,
    fontSize: scale(14),
    marginVertical: scale(5),
    marginLeft: scale(5)
  }
})

export default HorizontalList
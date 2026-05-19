import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { screenWidth } from '@/src/utils/constants'
import FilmSlip from '../molecules/FilmSlip'
import Carousel from 'react-native-reanimated-carousel';
import { scale } from 'react-native-size-matters';
import Dots from '../atoms/Dots';

const AdCarousal = ({ data }: any) => {
  const baseOptions = {
    vertical: false,
    width: screenWidth,
    height: screenWidth * 0.8
  }

  const [active, setActive] = useState(0)
  return (
    <View>
      <FilmSlip />
      <Carousel
        {...baseOptions}
        loop
        pagingEnabled
        snapEnabled
        autoPlay={true}
        data={data.data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index: any) => setActive(index)}
        renderItem={({ item }: any) => (
          <Pressable style={styles.imageContainer}>
            <Image
              source={item?.image_uri}
              style={styles.image}
            />
          </Pressable>
        )}
      />
      {
        active != null &&
        (
          <View style={styles.dots}>
            {
              data?.data?.map((item: any, index: any) => {
                return (
                  <Dots
                    active={active}
                    index={index}
                    key={index}
                  />
                )
              })
            }
          </View>
        )
      }
    </View>
  )
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  dots: {
    flexDirection: 'row',
    width: scale(100),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: scale(10)
  }
})
export default AdCarousal
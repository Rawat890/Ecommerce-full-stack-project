import { COLORS } from '@/src/utils/colors'
import { screenWidth } from '@/src/utils/constants'
import { fonts } from '@/src/utils/fonts'
import { navigate } from '@/src/utils/navigationService'
import { SCREENS } from '@/src/utils/routes'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'

const VerticalList: React.FC<{ data: any }> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.absoluteView, { backgroundColor: data?.bgColor }]} />
      <Text style={styles.headingText}>{data?.title}</Text>

      <Pressable style={[styles.button, { backgroundColor: data?.btnColor }]}>
        <Text style={styles.buttonText}>Explore more</Text>
        <Ionicons name='arrow-forward-sharp' size={20} color={COLORS.black} />
      </Pressable>

      <FlatList
        data={data?.data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={(item:any) => {
          return (
            <Pressable style={styles.itemContainer} onPress={() => navigate(SCREENS.Categories)}>
              <Image
                source={{ uri: item?.item?.image_uri }}
                style={styles.image}
              />
              <Text style={styles.productText}>{item?.item?.title}</Text>
              <Text style={styles.subtitle}>{item?.item?.subTitle}</Text>
            </Pressable>
          )
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
    marginTop: scale(10)
  },
  absoluteView: {
    width: screenWidth,
    height: scale(100),
    position: 'absolute',
    zIndex: -1,
    top: 0
  },
  headingText: {
    fontFamily: fonts.notoSemi,
    color: COLORS.black
  },
  button: {
    padding: scale(10),
    paddingHorizontal: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    gap: scale(10),
    marginVertical: scale(15)
  },
  buttonText: {
    fontFamily: fonts.notoSemi,
    color: COLORS.blueTint
  },
  itemContainer:{
    width: '47%',
    margin: scale(5),
    height: '80%',
    marginBottom: scale(20),
    alignSelf: 'flex-start'
  },
  image:{
    width: '100%',
    height: scale(200),
    resizeMode: 'cover'
  },
  productText:{
    fontFamily: fonts.notoSemi,
    color: COLORS.black
  }, 
  subtitle:{
    fontFamily: fonts.notoSemi,
    color: COLORS.black
  },
  content:{
    paddingBottom: scale(10)
  }
})

export default VerticalList
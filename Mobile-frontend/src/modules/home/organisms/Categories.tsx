import { View, Text, StyleSheet, ScrollView, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { navigate } from '@/src/utils/navigationService';
import { SCREENS } from '@/src/utils/routes';
import { scale } from 'react-native-size-matters';
import { screenWidth } from '@/src/utils/constants';
import { BASIC_COLORS } from '@/src/utils/colors';
import { fonts } from '@/src/utils/fonts';

const Categories = (props: { data: any }) => {
  const { data } = props;

  const renderItem = ({ item }: any) => {
    return (
      <Pressable onPress={() => navigate(SCREENS.Categories)} style={styles.itemContainer}>
        <Image
          source={{ uri: item?.image_uri }}
          style={styles.contentImage}
        />
        <Text style={styles.nameText}>{item?.name}</Text>
      </Pressable>
    )
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlatList
        numColumns={Math.ceil(data?.data.length / 2)}
        data={data?.data}
        renderItem={renderItem}
        scrollEnabled={false}
        keyExtractor={item => item?.id.toString()}
        contentContainerStyle={styles.listContainer}
        style={styles.listContentContainer}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: scale(10)
  },
  listContentContainer: {
    marginVertical: scale(20),
    marginHorizontal: scale(15)
  },
  itemContainer: {
    marginRight: scale(15),
    width: screenWidth * 0.2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBlock: scale(15)
  },
  contentImage: {
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
    resizeMode: 'cover'
  },
  nameText: {
    textAlign: 'center',
    color: BASIC_COLORS.text,
    fontFamily: fonts.notoRegular,
  }
})

export default Categories
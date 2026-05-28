import { useAppDispatch, useAppSelector } from '@/src/store/reduxHooks';
import { COLORS } from '@/src/utils/colors';
import { fonts } from '@/src/utils/fonts';
import { navigate } from '@/src/utils/navigationService';
import { SCREENS } from '@/src/utils/routes';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { getCategories } from './api/actions';

const Categories = () => {

  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector(state => state.categories);

  console.log('category - ', data)
  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Categories</Text>
        <Text style={styles.subtitle}>Explore our wide range of categories</Text>
      </View>
      {
        loading ? (
          <ActivityIndicator animating={loading} size={'large'} />
        ) : (
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item._id.toString()}
            renderItem={(item: any) => {
              return (
                <TouchableOpacity style={styles.itemContainer} onPress={() => navigate(SCREENS.Products, {
                  id: item._id,
                  name: item.name
                })}>
                  <Image
                    source={{ uri: item?.item.image_uri }}
                    style={styles.image}
                  />
                  <Text style={styles.name}>{item?.name}</Text>
                </TouchableOpacity>
              )
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: scale(10) }}
            ListFooterComponent={
              <>
                {error && <Text style={styles.subtitle}>There was an error</Text>}
              </>
            }
          />
        )
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F9EC',
  },
  headerContainer: {
    padding: scale(20),
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
    backgroundColor: COLORS.white,
    marginBottom: scale(10)
  },
  title: {
    fontFamily: fonts.notoSemi,
    fontSize: scale(14)
  },
  subtitle: {
    fontFamily: fonts.notoMedium,
    fontSize: scale(12),
    marginTop: scale(5)
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: scale(10),
    padding: scale(10),
    shadowColor: COLORS.black,
    elevation: 3
  },
  image: {
    width: scale(80),
    height: scale(80),
    resizeMode: 'cover',
    borderRadius: scale(12)
  },
  name: {
    marginTop: scale(10),
    fontFamily: fonts.notoRegular
  }
})

export default Categories
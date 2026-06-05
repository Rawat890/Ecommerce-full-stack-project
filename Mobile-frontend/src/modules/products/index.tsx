import { COLORS } from '@/src/utils/colors';
import { screenHeight } from '@/src/utils/constants';
import { fonts } from '@/src/utils/fonts';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { getProductsByCategory } from './api/getProducts';
import ProductItem from './atoms/ProductItem';
import SearchBar from './atoms/SearchBar';

const Products: React.FC = () => {
 const route = useRoute();
 const category = route?.params as any;
 const [products, setProducts] = useState<any[]>([]);

 const fetchProducts = async () => {
  const data = await getProductsByCategory(category?.id);
  setProducts(data);
 }

 useEffect(() => {
  fetchProducts();
 }, [category?.id]);


 const renderProduct = ({item, index}:any) => {
  const isOdd = index % 2 !==0
  return (
  <ProductItem isOdd={isOdd} item={item}/>
  )
 }

 return (
  <View style={styles.container}>
   <SearchBar cartlength={0}/>
   <FlatList
    data={products}
    renderItem={renderProduct}
    bounces={false}
    keyExtractor={(item) => item._id.toString()}
    numColumns={2}
    ListEmptyComponent={
     <View style={styles.emptyContainer}>
      <Text>No items present in this category</Text>
     </View>
    }
    contentContainerStyle={styles.listContainer}
   />
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: COLORS.white
 },
 listContainer: {
  paddingBottom: scale(30),
  backgroundColor: COLORS.white
 },
 emptyContainer: {
  height: screenHeight - 80,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: scale(16)
 },
 emptyText: {
  fontFamily: fonts.notoRegular,
  marginBottom: scale(12)
 }
})


export default Products
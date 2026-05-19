import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent, RefreshControl } from 'react-native'
import React, { useRef, useState } from 'react'
import { dynamicDashboardData } from '@/src/utils/db';
import AdCarousal from '../organisms/AdCarousal';
import AnimatedLoader from '@/src/components/AnimatedLoader';

const PAGE_SIZE = 4;
const sectionComponents: { [key: string]: React.ComponentType<any> } = {
 ad_carousal: AdCarousal
}

const MainList: React.FC<{ scrollYGlobal: any }> = ({ scrollYGlobal }) => {

 const [isRefreshing, setIsRefreshing] = useState(false);
 const [data, setData] = useState(dynamicDashboardData.slice(0, PAGE_SIZE));
 const [currentPage, setCurrentPage] = useState(1);
 const [isLoadingMore, setIsLoadingMore] = useState(false);

 const prevScrollY = useRef(0);
 const flatlistRef = useRef<FlatList>(null);
 const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  const currentScrollY = event?.nativeEvent?.contentOffset.y;
  scrollYGlobal.value = currentPage;
  prevScrollY.current = currentScrollY
 }

 const handleRefresh = () => {
  setIsRefreshing(true);
  setTimeout(() => {
   setCurrentPage(1);
   setData(dynamicDashboardData.slice(0, PAGE_SIZE));
   setIsRefreshing(false);
  }, 3000);
 }

 const handleLoadMore = () => {
  if (isLoadingMore) {
   return;
  }
  if (data.length >= dynamicDashboardData?.length) {
   return;
  }
  setIsLoadingMore(true);
  setTimeout(() => {
   const nextPage = currentPage + 1;
   const newItems = dynamicDashboardData.slice(0, nextPage * PAGE_SIZE);
   setData(newItems);
   setCurrentPage(nextPage);
   setIsLoadingMore(false);
  }, 3000);
 }

 const renderItem = ({ item }: any) => {
  const SectionComponent = sectionComponents[item?.type];
  return SectionComponent ? <SectionComponent data={item} /> : null;
 }

 return (
  <FlatList
   ref={flatlistRef}
   renderItem={renderItem}
   data={data}
   refreshControl={
    <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
   }
   overScrollMode='always'
   onScroll={handleScroll}
   onEndReached={handleLoadMore}
   onEndReachedThreshold={0.5}
   nestedScrollEnabled
   contentContainerStyle={{}}
   showsVerticalScrollIndicator={false}
   keyExtractor={(item, index) => index.toString()}
   ListFooterComponent={isLoadingMore ? (
    <AnimatedLoader visible={isLoadingMore} />
   ) : null}
  />
 )
}

export default MainList
import { Card, FeaturedCard } from '@/components/Cards';
import Filters from '@/components/Filters';
import NoResult from '@/components/NoResult';
import Search from '@/components/Search';
import icons from '@/constants/icons';
import { getLatestProperties, getProperties } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/provider';
import { useAppwrite } from '@/lib/useAppwrite';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useMemo } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();
  // Determine greeting based on local time
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Morning';
    if (hour < 18) return 'Afternoon';
    return 'Evening';
  }, []);

  const { data: latestProperties, loading: latestPropertiesLoading } =
    useAppwrite({ fn: getLatestProperties });

  const {
    data: properties,
    loading,
    refetch,
  } = useAppwrite({
    fn: getProperties,
    params: {
      query: params?.query!,
      filter: params?.filter!,
      limit: 6,
    },
    skip: true,
  });

  const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  useEffect(() => {
    refetch({
      query: params.query!,
      filter: params.filter!,
      limit: 6,
    });
  }, [params.query, params.filter]);
  return (
    <SafeAreaView className="bg-white-100 h-full">
      <StatusBar backgroundColor="#000000" />

      <FlatList
        data={properties}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)} />
        )}
        keyExtractor={(item) => item.$id}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" className="text-primary-300 mt-5" />
          ) : (
            <NoResult />
          )
        }
        ListHeaderComponent={
          <View className="px-5 ">
            <View className="flex flex-row justify-between items-center mt-5">
              <View className="flex flex-row items-center">
                <Image
                  source={{ uri: user?.avatar }}
                  className="size-12 rounded-full "
                />
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Good {greeting}
                  </Text>
                  <Text className="font-rubik-medium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>
            <Search />
            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className=" text-base font-rubik-bold text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>

              {latestPropertiesLoading ? (
                <ActivityIndicator size="large" className="text-primary-300" />
              ) : !latestProperties || latestProperties.length === 0 ? (
                <NoResult />
              ) : (
                <FlatList
                  data={latestProperties}
                  renderItem={({ item }) => (
                    <FeaturedCard
                      item={item}
                      onPress={() => handleCardPress(item.$id)}
                    />
                  )}
                  keyExtractor={(item) => item.$id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                  contentContainerClassName="flex  gap-5 mt-5"
                />
              )}
            </View>

            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubik-bold text-black-300">
                Our Recommandation
              </Text>
              <TouchableOpacity>
                <Text className=" text-base font-rubik-bold text-primary-300">
                  See All
                </Text>
              </TouchableOpacity>
            </View>

            <Filters />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default index;

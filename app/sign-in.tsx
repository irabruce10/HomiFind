import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import icons from '@/constants/icons';
import images from '@/constants/images';
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/provider';
import { Redirect } from 'expo-router';

const signIn = () => {
  const { refetch, loading, isLoggedIn } = useGlobalContext();

  if (!loading && isLoggedIn) return <Redirect href="/" />;
  const handleLogin = async () => {
    const result = await login();

    if (result) {
      refetch();
    } else {
      Alert.alert('Error', 'Login failed');
    }
  };
  return (
    <SafeAreaView className="bg-white-soft h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6 "
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to HomiFind
          </Text>
          <Text className="text-3xl  font-rubik-bold text-black-300 text-center mt-2">
            let's Get You Closer to {'\n'}{' '}
            <Text className="text-primary-300">Your Dream Home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to Restate with Google
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white-cool shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5 mr-2"
                resizeMode="contain"
              />
              <Text>Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;

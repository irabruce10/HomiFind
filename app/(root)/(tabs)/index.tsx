import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const index = () => {
  return (
    <View>
      <Text className="text-3xl  font-rubik ">Welcome to the app</Text>
      <Text className="text-3xl bg-red-500 mb-5">index</Text>
      <Link href="/sign-in">Sign in</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});

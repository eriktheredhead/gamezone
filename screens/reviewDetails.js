import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route }) {
  return (
    <View style={globalStyles.container}>
      <Text>{ route.params?.title ?? 'what' }</Text>
      <Text>{ route.params?.body ?? 'what' }</Text>
      <Text>{ route.params?.rating ?? 'what' }</Text>
    </View>
  );
}

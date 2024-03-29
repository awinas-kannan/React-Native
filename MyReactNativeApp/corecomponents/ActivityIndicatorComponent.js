import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const ActivityIndicatorRN = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
    <ActivityIndicator size="large" color="black" animating={false}/>
    <ActivityIndicator size="large" color="darkgray"/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});


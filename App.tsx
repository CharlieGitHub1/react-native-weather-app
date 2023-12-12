import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, SafeAreaView, Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import WeatherScreen from './src/components/features/current_forecast/screens/weather.screen';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#ecf1f9', '#d1dcef']}
          style={styles.gradient}
        />
        <WeatherScreen />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    width: '100%',
    height: '100%',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import { data } from './mock_data/weather_data';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme_architecture';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, SafeAreaView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherScreen from './src/components/features/current_forecast/screens/weather.screen';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#ecf1f9', '#d1dcef']}
          style={styles.gradient}
        />
        <WeatherScreen data={data as any} />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
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

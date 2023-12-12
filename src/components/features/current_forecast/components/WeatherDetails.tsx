import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

interface IWeatherDetails {}

export const WeatherDetails = (props: IWeatherDetails) => {
  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: '#ddd',
          }}
        >
          <View style={styles.weatherDetailsItems}>
            <Text>Feels like</Text>
            <Text style={styles.textSecondary}>15°</Text>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsItems}>
            <Text>Wind</Text>
            <Text style={styles.textSecondary}>15 km/h</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        }}
      >
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: '#ddd',
          }}
        >
          <View style={styles.weatherDetailsItems}>
            <Text>Humidity</Text>
            <Text style={styles.textSecondary}>15%</Text>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsItems}>
            <Text>Visibility</Text>
            <Text style={styles.textSecondary}>15 km</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        }}
      >
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: '#ddd',
          }}
        >
          <View style={styles.weatherDetailsItems}>
            <Text>Pressure</Text>
            <Text style={styles.textSecondary}>15 hPa</Text>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsItems}>
            <Text>Clouds</Text>
            <Text style={styles.textSecondary}>15%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: StatusBar.currentHeight,
    width: '100%',
    height: '100%',
  },
  headingTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8a96ac',
  },
  headingSubTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8a96ac',
  },
  weatherDetails: {
    gap: 10,
    borderWidth: 1,
    borderColor: '#8a96ac',
    borderRadius: 4,
    padding: 10,
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItems: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSecondary: {
    fontSize: 15,
    color: '#8a96ac',
    fontWeight: '700',
    margin: 7,
  },
  textPrimary: {
    fontSize: 15,
    color: '#8a96ac',
    fontWeight: '700',
    margin: 7,
  },
});

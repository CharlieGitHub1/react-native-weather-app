import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { WeatherDetails } from '../components/WeatherDetails';
import { WeatherInfoCard } from '../../../Cards';

import SearchBar from '../../../SearchBar';

const WeatherScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <SearchBar />
        </View>
        <View style={styles.list}>
          <WeatherInfoCard />
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    // backgroundColor: '#eceef5',
    // backgroundColor: '##E5EBF5',
  },
});

export default WeatherScreen;

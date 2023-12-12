import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

interface ICard {
  currentLocationName?: string;
  currentTemperature?: number;
  feelsLike?: number;
  weatherIcon?: string;
  lowTemp?: number;
  highTemp?: number;
  humidity?: number;
  windSpeed?: number;
  visibility?: number;
  dewPoint?: number;
  pressure?: number;
  sunrise?: string;
  sunset?: string;
}

const data = [
  {
    currentLocationCityName: 'New York',
    currentLocationStateName: 'NY',
    currentLocationCountryName: 'United States',
    currentTemperature: 25,
    feelsLike: 25,
    weatherIcon: '☀️',
    lowTemp: 25,
    highTemp: 25,
    humidity: 25,
    windSpeed: 25,
    visibility: 25,
    dewPoint: 25,
    pressure: 25,
    sunrise: '06:00',
    sunset: '18:00',
  },
  {
    currentLocationCityName: 'Houston',
    currentLocationStateName: 'TX',
    currentLocationCountryName: 'United States',
    currentTemperature: 67,
    feelsLike: 67,
    weatherIcon: '☀️',
    lowTemp: 38,
    highTemp: 70,
    humidity: 25,
    windSpeed: 25,
    visibility: 25,
    dewPoint: 38,
    pressure: 25,
    sunrise: '06:00',
    sunset: '18:00',
  },
];

export const WeatherInfoCard = ({
  currentLocationName,
  currentTemperature,
  feelsLike,
  weatherIcon,
  lowTemp,
  highTemp,
  humidity,
  windSpeed,
  visibility,
  dewPoint,
  pressure,
  sunrise,
  sunset,
}: ICard) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: 4,
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Title
                title={item.currentLocationCityName}
                subtitle={`${item.currentLocationStateName}, ${item.currentLocationCountryName}`}
                left={(props) => (
                  <Text style={styles.weatherIconText}>{item.weatherIcon}</Text>
                )}
              />
              <Card.Content>
                <Text style={styles.currentTempLabel}>
                  {item.currentTemperature}°
                </Text>
                <Text style={styles.dayTempLabel}>H {item.highTemp}°</Text>
                <Text style={styles.nightTempLabel}>L {item.lowTemp}°</Text>
                <Text style={styles.feelsLikeTempLabel}>
                  Feels like {item.feelsLike}°
                </Text>
              </Card.Content>
              <Card.Content style={styles.weatherDetails}>
                <Card.Content style={styles.weatherDetailsRow}>
                  <Card.Content style={styles.weatherDetailsBox}>
                    <Text style={styles.weatherDetailsItems}>Humidity</Text>
                    <Text style={styles.weatherDetailsItems}>
                      {item.humidity}%
                    </Text>
                  </Card.Content>
                  <Card.Content style={styles.weatherDetailsBox}>
                    <Text style={styles.weatherDetailsItems}>Wind Speed</Text>
                    <Text style={styles.weatherDetailsItems}>
                      {item.windSpeed} mph
                    </Text>
                  </Card.Content>
                  <Card.Content style={styles.weatherDetailsBox}>
                    <Text style={styles.weatherDetailsItems}>Visibility</Text>
                    <Text style={styles.weatherDetailsItems}>
                      {item.visibility} mi
                    </Text>
                  </Card.Content>
                </Card.Content>
                <Card.Content style={styles.weatherDetailsRow}>
                  <Card.Content style={styles.weatherDetailsBox}>
                    <Text style={styles.weatherDetailsItems}>Dew Point</Text>
                    <Text style={styles.weatherDetailsItems}>
                      {item.dewPoint}°
                    </Text>
                  </Card.Content>
                  <Card.Content style={styles.weatherDetailsBox}>
                    <Text style={styles.weatherDetailsItems}>Pressure</Text>
                    <Text style={styles.weatherDetailsItems}>
                      {item.pressure} in
                    </Text>
                  </Card.Content>
                  <Card.Content style={styles.weatherDetailsBox}>
                    <Text style={styles.weatherDetailsItems}>Sunrise</Text>
                    <Text style={styles.weatherDetailsItems}>
                      {item.sunrise}
                    </Text>
                  </Card.Content>
                </Card.Content>
                <Card.Content style={styles.weatherDetailsRow}>
                  <Card.Content style={styles.weatherDetailsBox}>
                    <Text style={styles.weatherDetailsItems}>Sunset</Text>
                    <Text style={styles.weatherDetailsItems}>
                      {item.sunset}
                    </Text>
                  </Card.Content>
                </Card.Content>
              </Card.Content>
            </Card>
          )}
          keyExtractor={(item) => item.currentLocationCityName}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    margin: 10,
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherIconContainer: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherIconText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8a96ac',
  },
  currentTempLabel: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8a96ac',
  },
  dayTempLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8a96ac',
  },
  nightTempLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8a96ac',
  },
  feelsLikeTempLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8a96ac',
  },
  weatherDetails: {
    gap: 2,
    border: 'none',
    borderRadius: 4,
    padding: 5,
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 10,
    border: 'none',
  },
  weatherDetailsItems: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

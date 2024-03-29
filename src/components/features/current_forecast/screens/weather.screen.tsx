import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, SafeAreaView } from 'react-native';
import { WeatherInfoCard } from '../../../Cards';
import SearchBar from '../../../SearchBar';

interface IWeatherScreen {
  data: {
    currentLocationCityName: string;
    currentLocationStateName: string;
    currentLocationCountryName: string;
    currentTemperature: number;
    feelsLike: number;
    weatherIcon: string;
    lowTemp: number;
    highTemp: number;
    humidity: number;
    windSpeed: number;
    visibility: number;
    dewPoint: number;
    pressure: number;
    sunrise: string;
    sunset: string;
  };
}

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.small};
`;

const ListContainer = styled.View`
  padding: ${(props) => props.theme.space.small};
  flex: 1;
`;

const WeatherScreen = ({ data }: IWeatherScreen) => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <ListContainer>
        <WeatherInfoCard {...data} />
      </ListContainer>
    </SafeArea>
  );
};

export default WeatherScreen;

import styled from 'styled-components/native';
import { Card, Text } from 'react-native-paper';

interface ICard {
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
}

const WeatherCard = styled(Card)``;

const WeatherCardTitle = styled(Card.Title)``;

const WeatherCardContent = styled(Card.Content)``;

const LabelText = styled(Text)``;

const ContentRow = styled(Card.Content)``;

const Icon = styled(Text)``;

const CurrentTemp = styled(Text)``;

const ContentDetailsRow = styled(Card.Content)``;

const ContentDetailsBox = styled(Card.Content)``;

const ContentDetailsLabels = styled(Text)``;

export const WeatherInfoCard = ({
  currentLocationCityName,
  currentLocationStateName,
  currentLocationCountryName,
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
    <WeatherCard>
      <WeatherCardTitle
        title={`${currentLocationCityName}, ${currentLocationStateName}, ${currentLocationCountryName}`}
      />
      <WeatherCardContent>
        <ContentRow>
          <Icon>{weatherIcon}</Icon>
          <CurrentTemp>{currentTemperature}°</CurrentTemp>
        </ContentRow>
        <ContentDetailsRow>
          <ContentDetailsBox>
            <ContentDetailsLabels>Feels Like</ContentDetailsLabels>
            <LabelText>{feelsLike}°</LabelText>
          </ContentDetailsBox>
          <ContentDetailsBox>
            <ContentDetailsLabels>Low</ContentDetailsLabels>
            <LabelText>{lowTemp}°</LabelText>
          </ContentDetailsBox>
          <ContentDetailsBox>
            <ContentDetailsLabels>High</ContentDetailsLabels>
            <LabelText>{highTemp}°</LabelText>
          </ContentDetailsBox>
        </ContentDetailsRow>
        <ContentDetailsRow>
          <ContentDetailsBox>
            <ContentDetailsLabels>Humidity</ContentDetailsLabels>
            <LabelText>{humidity}%</LabelText>
          </ContentDetailsBox>
          <ContentDetailsBox>
            <ContentDetailsLabels>Wind Speed</ContentDetailsLabels>
            <LabelText>{windSpeed} mph</LabelText>
          </ContentDetailsBox>
          <ContentDetailsBox>
            <ContentDetailsLabels>Visibility</ContentDetailsLabels>
            <LabelText>{visibility} mi</LabelText>
          </ContentDetailsBox>
        </ContentDetailsRow>
        <ContentDetailsRow>
          <ContentDetailsBox>
            <ContentDetailsLabels>Dew Point</ContentDetailsLabels>
            <LabelText>{dewPoint}°</LabelText>
          </ContentDetailsBox>
          <ContentDetailsBox>
            <ContentDetailsLabels>Pressure</ContentDetailsLabels>
            <LabelText>{pressure} in</LabelText>
          </ContentDetailsBox>
          <ContentDetailsBox>
            <ContentDetailsLabels>Sunrise</ContentDetailsLabels>
            <LabelText>{sunrise}</LabelText>
          </ContentDetailsBox>
          <ContentDetailsBox>
            <ContentDetailsLabels>Sunset</ContentDetailsLabels>
            <LabelText>{sunset}</LabelText>
          </ContentDetailsBox>
        </ContentDetailsRow>
      </WeatherCardContent>
    </WeatherCard>
  );
};

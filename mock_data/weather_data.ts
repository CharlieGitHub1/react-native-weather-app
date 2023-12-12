// Purpose: mock data for weather data component testing.
// Shape out 10 cities and their weather data.
//  * Houston, TX - United States - 67°F - ☀️ - 38°F / 70°F - 25% - 25mph - 25mi - 38°F - 25 - 06:00 - 18:00.
//  * Montgomery, AL - United States - 67°F - ☀️ - 38°F / 70°F - 25% - 25mph - 25mi - 38°F - 25 - 06:00 - 18:00.
//  * Austin, TX - United States - 67°F - ☀️ - 38°F / 70°F - 25% - 25mph - 25mi - 38°F - 25 - 06:00 - 18:00.
// * Mobile, AL - United States - 67°F - ☀️ - 38°F / 70°F - 25% - 25mph - 25mi - 38°F - 25 - 06:00 - 18:00.
// * New Orleans, LA - United States - 67°F - ☀️ - 38°F / 70°F - 25% - 25mph - 25mi - 38°F - 25 - 06:00 - 18:00.
// * Gulfport, MS - United States - 67°F - ☀️ - 38°F / 70°F - 25% - 25mph - 25mi - 38°F - 25 - 06:00 - 18:00.
// * Biloxi, MS - United States - 67°F - ☀️ - 38°F / 70°F - 25% - 25mph - 25mi - 38°F - 25 - 06:00 - 18:00.
// * Baton Rouge, LA - United States - 67°F - ☀️ - 38°F / 70°F - 25% - 25mph - 25mi - 38°F - 25 - 06:00 - 18:00.
// * San Antonio, TX - United States - 67°F - ☀️ - 38°F / 70°F - 25% - 25mph - 25mi - 38°F - 25 - 06:00 - 18:00.
// * San Marcos, TX - United States - 67°F - ☀️ - 38°F / 70°F - 25% - 25mph - 25mi - 38°F - 25 - 06:00 - 18:00.

// Note: This is a mock data file for the weather data component.

// Interface for weather data.

export interface IWeatherData {
  id: number;
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

export const data = [
  {
    id: 1,
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
  {
    id: 2,
    currentLocationCityName: 'Montgomery',
    currentLocationStateName: 'AL',
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
  {
    id: 3,
    currentLocationCityName: 'Austin',
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
  {
    id: 4,
    currentLocationCityName: 'Mobile',
    currentLocationStateName: 'AL',
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
  {
    id: 5,
    currentLocationCityName: 'New Orleans',
    currentLocationStateName: 'LA',
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
  {
    id: 6,
    currentLocationCityName: 'Gulfport',
    currentLocationStateName: 'MS',
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
  {
    id: 7,
    currentLocationCityName: 'Biloxi',
    currentLocationStateName: 'MS',
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
  {
    id: 8,
    currentLocationCityName: 'Baton Rouge',
    currentLocationStateName: 'LA',
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
  {
    id: 9,
    currentLocationCityName: 'San Antonio',
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
  {
    id: 10,
    currentLocationCityName: 'San Marcos',
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

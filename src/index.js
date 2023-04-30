import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';
import WeatherInfo from './WeatherInfo';
import axios from 'axios';

const API_Keys = '9e82cffb9e67121829e63f9098af1a2b';
const Weather = () => {
	const [weatherData, setWeatherData] = useState(null);
	const [loaded, setLoaded] = useState(false);

	const fetchWeatherData = async (cityName) => {
		try {
			setLoaded(false);
			const response = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_Keys}`
			);
			if (response.status == 200) {
				const data = response.data;
				// console.log(data);
				setWeatherData(data);
				// Alert.alert('Error', data);
			} else {
				setWeatherData(null);
			}
			setLoaded(true);
		} catch (error) {
			Alert.alert('Error', error.message);
			setLoaded(true);
		}
	};
	useEffect(() => {
		fetchWeatherData('Delhi');
	}, []);

	if (!loaded) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color="red" />
			</View>
		);
	} else if (weatherData === null) {
		return (
			<View style={styles.container}>
				<Text> City not Found</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Weather App</Text>
			</View>
			<WeatherInfo
				weatherData={weatherData}
				fetchWeatherData={fetchWeatherData}
			/>
		</View>
	);
};

export default Weather;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: Constants.statusBarHeight,
	},
	header: {
		alignItems: 'center',
		backgroundColor: '#C5D2EF',
		height: 80,
		justifyContent: 'center',
	},
	headerTitle: {
		fontSize: 29,
		fontWeight: 'bold',
	},
});

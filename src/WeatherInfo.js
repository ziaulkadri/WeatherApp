import {
	Text,
	View,
	SafeAreaView,
	StyleSheet,
	Image,
	Dimensions,
} from 'react-native';
import WeatherSearch from './Search';
import { ScrollView } from 'react-native';

const WeatherInfo = ({ weatherData, fetchWeatherData }) => {
	const {
		name,
		visibility,
		weather: [{ description, icon }],
		main: { temp, feels_like, humidity },
		wind: { speed },
		sys: { sunrise, sunset },
	} = weatherData;
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView keyboardShouldPersistTaps="handled">
				<WeatherSearch fetchWeatherData={fetchWeatherData} />
				<View style={{ alignItems: 'center' }}>
					<Text style={styles.title}>{name}</Text>
				</View>
				<View style={styles.logo}>
					<Image
						style={styles.largeIcon}
						source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
					/>
					<Text style={styles.currentTemp}>{temp}℃</Text>
				</View>
				<Text style={styles.description}>{description}</Text>
				<View style={styles.extraInfo}>
					<View style={styles.info}>
						<Image
							style={styles.smallIcon}
							source={require('../assets/temp.png')}
						/>
						<Text style={styles.currentTemp}>{feels_like}℃</Text>

						<Text style={styles.currentTemp}>Feels Like</Text>
					</View>
					<View style={styles.info}>
						<Image
							style={styles.smallIcon}
							source={require('../assets/humidity.png')}
						/>
						<Text style={styles.currentTemp}>{humidity}%</Text>

						<Text style={styles.currentTemp}>Humidity</Text>
					</View>
				</View>
				<View style={styles.extraInfo}>
					<View style={styles.info}>
						<Image
							style={styles.smallIcon}
							source={require('../assets/visibility.png')}
						/>
						<Text style={styles.currentTemp}>{visibility}</Text>

						<Text style={styles.currentTemp}>Visibility</Text>
					</View>
					<View style={styles.info}>
						<Image
							style={styles.smallIcon}
							source={require('../assets/speed.png')}
						/>
						<Text style={styles.currentTemp}>{speed} m/s</Text>

						<Text style={styles.currentTemp}>Wind Speed</Text>
					</View>
				</View>
				<View style={styles.extraInfo}>
					<View style={styles.info}>
						<Image
							style={styles.smallIcon}
							source={require('../assets/sunrise.png')}
						/>
						<Text style={styles.currentTemp}>
							{new Date(sunrise * 1000).toLocaleString()}
						</Text>

						<Text style={styles.currentTemp}>Sunrise</Text>
					</View>
					<View style={styles.info}>
						<Image
							style={styles.smallIcon}
							source={require('../assets/sunset.png')}
						/>
						<Text style={styles.currentTemp}>
							{new Date(sunset * 1000).toLocaleString()}
						</Text>

						<Text style={styles.currentTemp}>Sunset</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default WeatherInfo;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 15,
	},
	title: {
		width: '100%',
		textAlign: 'center',
		fontSize: 26,
		fontWeight: 'bold',
		color: '#e96e50',
		marginTop: 10,
	},
	logo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	largeIcon: {
		width: 200,
		height: 200,
	},
	currentTemp: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	description: {
		textAlign: 'center',
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	extraInfo: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 7,
	},
	info: {
		width: Dimensions.get('screen').width / 2.5,
		backgroundColor: '#D0EAFA',
		padding: 10,
		borderRadius: 15,
		justifyContent: 'center',
	},
	smallIcon: {
		width: 40,
		height: 40,
		borderRadius: 40 / 2,
		marginLeft: 50,
	},
	infoText: {
		textAlign: 'center',
		fontSize: 18,
	},
});

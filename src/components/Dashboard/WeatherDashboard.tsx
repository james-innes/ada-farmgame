import React from 'react';
import {Card} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {getCurrentWeather} from '../../api/weather';

const WeatherDashboard = () => {
	const {postcode, country} = useSelector(
		(state: any) => state.user,
	);

	const weather: any = getCurrentWeather(
		postcode,
		country,
	);

	return (
		<div className="WeatherDashboard">
			<Card>
				<Card.Body>
					<p>
						The farms weather for your location
						is: {weather.weather[0].main}
					</p>
				</Card.Body>
			</Card>
		</div>
	);
};

export default WeatherDashboard;

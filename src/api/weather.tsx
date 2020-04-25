import axios from 'axios';

const key = '9f92ae22af58ffcd0b55646961d66fd2';

export async function getCurrentWeather(
	postcode: string,
	country: string,
) {
	const url = `https://samples.openweathermap.org/data/2.5/weather?zip=${postcode},${country}&appid=${key}`;

	const {data} = await axios.get<any>(url);
	return data;
}

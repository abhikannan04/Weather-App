const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc54031046mshfb6657d7c3004b3p104061jsn4c01e6ccf924',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		let temp = document.getElementById('temp');
		let max_temp = document.getElementById('max_temp');
		let min_temp = document.getElementById('min_temp');
		let humidity = document.getElementById('humidity');
		let sunrise = document.getElementById('sunrise');
		let sunset = document.getElementById('sunset');
		let wind_speed = document.getElementById('wind_speed');
		let wind_degree = document.getElementById('wind_degrees');
		// let cloud = document.getElementById('cloud_pct');
		let feels = document.getElementById('feels_like');
		temp.innerHTML = response.temp;
		max_temp.innerHTML = response.max_temp;
		min_temp.innerHTML = response.min_temp;
		// cloud.innerHTML = response.cloud_pct;
		feels.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		wind_degree.innerHTML =response.wind_degrees;
		wind_speed.innerHTML =response.wind_speed;
		sunrise.innerHTML =response.sunrise;
		sunset.innerHTML =response.sunset;
		
		let cityname = document.getElementById('cityname');
		cityname.innerHTML = city
	})
	.catch(err => console.error(err));
}

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>
{
	
	e.preventDefault();
	let city = document.getElementById('city')
	getweather(city.value);
})

getweather('Delhi');





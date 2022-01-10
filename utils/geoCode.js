const axios = require('axios');
const foreCast = require("./foreCast")

const geoCode = async (cityName) => {
	const urlApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${process.env.DB_KEY}`;
		try { // Essaie ce qu'il y a dans le bloc try
			const { data } = await axios(urlApi);
			console.log(data);
			const lat = data[0].lat;
			const lon = data[0].lon;
			return foreCast(lat, lon);
		} catch(err) { // Si erreur = catch
			console.log(err.message);
		}
};

module.exports = geoCode;
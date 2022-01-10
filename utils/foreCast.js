const axios = require('axios');

const foreCast = async (lat, lon) => {
	const urlTmp = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.DB_KEY}`;
	try { // Essaie ce qu'il y a dans le bloc try
		const { data } = await axios(urlTmp);
        const temp = (data.main.temp - 273.15).toFixed(1);
        const skyColor = data.weather[0].description;
        const wind = data.wind.speed.toFixed(1);
		console.log(`In ${process.argv[2]}, the sky type is: ${skyColor}, the temperature is: ${temp}°C and the wind force is: ${wind} !
Have a nice day !`);
	return temp
	} catch(err) { // Si erreur = catch
		console.log(err.message);
    }
};

module.exports = foreCast;

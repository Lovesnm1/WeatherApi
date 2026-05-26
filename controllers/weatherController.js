const axios = require('axios');
const redisClient = require('../util/redisClient');

const getWeather = async (req, res) => {
  const city  = req.params.city;
  const  cacheKey = `weather:${city}`;

  try {
    // Check if the weather data is in Redis cache
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log('Cache hit');
      return res.json(JSON.parse(cachedData));
    }
    else {
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.WEATHER_API_KEY}`);
        if (!response.data) {
            return res.status(404).json({ message: 'City not found' });
        }
        const weatherData = response.data;
        await redisClient.set(cacheKey, JSON.stringify(weatherData), 'EX', 3600); // Cache for 1 hour
        res.json(weatherData);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ message: 'Failed to fetch weather data' });
    }
}
module.exports = {
    getWeather
}
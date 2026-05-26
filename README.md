# WeatherApi
A simple weather API built with Node.js and Express, utilizing Redis for caching and Axios for making HTTP requests to fetch weather data. Roadmap Project "https://roadmap.sh/projects/weather-api-wrapper-service"

## Requirements
1. Redis
2. Express-Slow-Down
3. Nodemon
4. Express
5. Axios
6. Dotenv
7. Weather API Key From But Not Limited To ([Weather API Service](https://www.visualcrossing.com/))

## Features

- Fetch weather data for a specified city.
- Caching with Redis to optimize performance and reduce API calls.
- Rate limiting to prevent abuse of the API.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Redis server running
- Access to the weather API service (Visual Crossing)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Lovesnm1/WeatherApi.git
   cd <your-repository>
   ```
2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a .env file in the root directory and add your environment variables (see below).

## Environment Variables

Create a .env file in the root of your project and add the following:
```bash
    WEATHER_API_KEY=your_visual_crossing_api_key
    REDIS_URL=redis://localhost:6379
    PORT=5000
```

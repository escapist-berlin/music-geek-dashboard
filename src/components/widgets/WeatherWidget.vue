<template>
  <div v-if="weather" class="weather-container" :style="{ backgroundImage: `url(/${weatherData.image})` }">
    <div class="overlay">
      <h1>Berlin</h1>
      <font-awesome-icon :icon="weatherData.icon" />
      <p>{{ weather.current.temperature_2m }}{{ weather.current_units.temperature_2m }}</p>
      <p>{{ cloudCoverDescription }}</p>
    </div>
    <!-- <p>Rain: {{ weather.current.rain }}{{ weather.current_units.rain }}</p>
    <p>Wind Speed: {{ weather.current.wind_speed_10m }}{{ weather.current_units.wind_speed_10m }}</p>
    <p>Wind Direction: {{ weather.current.wind_direction_10m }}{{ weather.current_units.wind_direction_10m }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: null,
    };
  },
  async mounted() {
    try {
      this.weather = await this.fetchWeatherData();
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    weatherData() {
      if (!this.weather || !this.weather.current) return {};

      const { cloud_cover, rain, wind_speed_10m } = this.weather.current;

      const conditions = [
        { condition: 'cloudy', image: 'cloudy.jpg', icon: 'fa-solid fa-cloud' },
        { condition: 'rainy', image: 'rainy.jpg', icon: 'fa-solid fa-cloud-rain' },
        { condition: 'windy', image: 'windy.jpg', icon: 'fa-solid fa-wind' },
        { condition: 'clear', image: 'clear.jpg', icon: 'fa-solid fa-sun' }
      ];

      let selectedCondition = 'clear';
      if (cloud_cover > 50) {
        selectedCondition = 'cloudy';
      } else if (rain > 0) {
        selectedCondition = 'rainy';
      } else if (wind_speed_10m > 15) {
        selectedCondition = 'windy';
      }

      return conditions.find(condition => condition.condition === selectedCondition);
    },
    cloudCoverDescription() {
      const cloudCover = this.weather.current.cloud_cover;

      if (cloudCover <= 20) {
        return "Clear skies";
      } else if (cloudCover <= 40) {
        return "Few clouds";
      } else if (cloudCover <= 60) {
        return "Partly cloudy";
      } else if (cloudCover <= 80) {
        return "Mostly cloudy";
      } else {
        return "Overcast";
      }
    }
  },
  methods: {
    async fetchWeatherData() {
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.5244&longitude=13.4105&current=temperature_2m,is_day,rain,cloud_cover,wind_speed_10m,wind_direction_10m&timezone=Europe%2FBerlin`);
        return await response.json();
      } catch (error) {
        throw new Error('Failed to fetch weather data');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .weather-container {
    position: relative;

    padding: 20px;
    border-radius: 8px;
    background-size: cover;

    width: 300px;
    height: 300px;
    font-size: 25px;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    border: 1px solid #ccc;

    svg {
      font-size: 43px;
    }
    .overlay {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      z-index: 1;
    }
  }
  @media (min-width: 768px) {
    .weather-container {

    }
  }
  @media (min-width: 1024px) {
    .weather-container {

    }
  }
</style>
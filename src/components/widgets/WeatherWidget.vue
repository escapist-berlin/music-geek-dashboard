<template>
  <div class="weather-container" :style="{ backgroundImage: `url(/${backgroundImage})` }">
    <h2>Weather Information</h2>
    <p>Location: Berlin</p>
    <p>Current Time: {{ weather?.current.time }}</p>
    <p>Temperature: {{ weather?.current.temperature_2m }}{{ weather?.current_units.temperature_2m }}</p>
    <p>Rain: {{ weather?.current.rain }}{{ weather?.current_units.rain }}</p>
    <p>Cloud Cover: {{ weather?.current.cloud_cover }}{{ weather?.current_units.cloud_cover }}</p>
    <p>Wind Speed: {{ weather?.current.wind_speed_10m }}{{ weather?.current_units.wind_speed_10m }}</p>
    <p><strong>Wind Direction:</strong> {{ weather?.current.wind_direction_10m }}{{ weather?.current_units.wind_direction_10m }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: null,
      // loading: true, // TODO: overlay?
    };
  },
  async mounted() {
    try {
      this.weather = await this.fetchWeatherData();
      // this.loading = false; // TODO: overlay?
      console.log("weather", this.weather)
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    backgroundImage() {
      if (!this.weather || !this.weather.current) return '';

      const { cloud_cover, rain, wind_speed_10m } = this.weather.current;

      if (cloud_cover > 50) {
        return 'cloudy.jpg';
      } else if (rain > 0) {
        return 'rainy.jpg';
      } else if (wind_speed_10m > 15) {
        return 'windy.jpg';
      } else {
        return 'clear.jpg';
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
    flex-grow: 1;
    border: 5px solid lightseagreen;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 20px;
    border-radius: 8px;
    background-size: cover;
  }
  @media (min-width: 576px) and (max-width: 991px) {
    .weather-container {
      flex: 1 1 100%;
    }
  }
  @media (min-width: 992px) {
    .weather-container {
      flex: 1 1 100%;
    }
  }
</style>
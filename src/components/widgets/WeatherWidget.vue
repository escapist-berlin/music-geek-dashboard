<template>
  <div class="weather-container">
    <h1>WeatherWidget</h1>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .weather-container {
    flex-grow: 1;
    border: 5px solid lightseagreen;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 576px) and (max-width: 991px) {
    .weather-container {
      flex: 1 1 100%;
    }
  }
</style>
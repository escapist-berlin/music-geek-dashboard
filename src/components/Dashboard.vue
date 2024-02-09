<template>
  <div class="dashboard-container">
    <Sidebar />
    <div class="widgets-container">
      <WeatherWidget />
      <DiscogsWidget />
      <MixCloudWidget />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import WeatherWidget from "../components/widgets/WeatherWidget.vue";
import DiscogsWidget from "../components/widgets/DiscogsWidget.vue";
import MixCloudWidget from "../components/widgets/MixCloudWidget.vue";

export default {
  components: {
    Sidebar,
    WeatherWidget,
    DiscogsWidget,
    MixCloudWidget,
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-container {
    background-color: rgba(45, 49, 66, 0.95);
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .widgets-container {
    border: 5px solid lightcoral;
    display: flex;
    flex-direction: column;
    flex-grow: 999;
    gap: 30px;
    justify-content: center;
    align-items: center;
    padding: 35px;
  }

  @media (min-width: 768px) {
    .widgets-container {

    }
  }

  @media (min-width: 1024px) {
    .dashboard-container {
      flex-direction: row;
    }
    .widgets-container {
      flex-wrap: wrap;
      flex-direction: row;
      height: 100vh;
      overflow: auto;
    }
  }
</style>
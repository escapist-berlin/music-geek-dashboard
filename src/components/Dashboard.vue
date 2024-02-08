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
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    max-width: 1500px;
    overflow: auto;
  }
  .widgets-container {
    flex-grow: 1;
    border: 5px solid lightcoral;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    padding: 35px;
    flex-wrap: wrap;
    overflow: auto;
  }

  @media (min-width: 576px) and (max-width: 991px) {
    .widgets-container {
      flex-direction: row;
    }
  }

  @media (min-width: 992px) {
    .dashboard-container {
      flex-direction: row;
    }
    .widgets-container {
      flex-direction: row;
    }
  }
</style>
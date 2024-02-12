<template>
  <div class="dashboard-container" :class="{ loaded }">
    <Sidebar />
    <div class="widgets-container">
      <WeatherWidget ref="weatherWidget" @data-loaded="checkAllDataLoaded"/>
      <DiscogsWidget ref="discogsWidget" @data-loaded="checkAllDataLoaded"/>
      <MixCloudWidget ref="mixcloudWidget" @data-loaded="checkAllDataLoaded"/>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import WeatherWidget from "../components/widgets/WeatherWidget.vue";
import DiscogsWidget from "../components/widgets/DiscogsWidget.vue";
import MixCloudWidget from "../components/widgets/MixCloudWidget.vue";

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    WeatherWidget,
    DiscogsWidget,
    MixCloudWidget,
  },
  data() {
    return {
      loaded: false,
    }
  },
  methods: {
    checkAllDataLoaded() {
      if (
        this.$refs.weatherWidget.weather &&
        this.$refs.discogsWidget.release &&
        this.$refs.mixcloudWidget.show &&
        this.$refs.mixcloudWidget.comments
      ) {
        this.loaded = true;
      }
    }
  },
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
    opacity: 0;
    transition: opacity 1s ease;

    &.loaded {
      opacity: 1;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      height: 100%;
    }
  }

  .widgets-container {
    display: flex;
    flex-direction: column;
    flex-grow: 999;
    gap: 30px;
    justify-content: center;
    align-items: center;
    padding: 0 35px 35px 35px;

    @media (min-width: 1024px) {
      flex-wrap: wrap;
      flex-direction: row;
      overflow: auto;
      padding: 35px 35px 35px 0;
    }
  }
</style>
<template>
  <div class="dashboard-container">
    <Sidebar />
    <div class="widgets-container">
      <h1>Widgets</h1>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  }
}
</script>

<style scoped>
  .dashboard-container {
    background-color: rgba(45, 49, 66, 0.95);
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
  .widgets-container {
    flex-grow: 1;
    border: 5px solid lightcoral;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 992px) {
    .dashboard-container {
      flex-direction: row;
    }
  }
</style>
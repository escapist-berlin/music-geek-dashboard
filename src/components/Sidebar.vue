<template>
  <div class="sidebar-container">
    <h1>Sidebar</h1>
  </div>
</template>

<style scoped>
  .sidebar-container {
    /* background-color: rgba(45, 49, 66, 0.95); */
    width: 10%;
    height: 100%;
    border: 5px solid red;
    /* border-radius: 15px; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .sidebar-container {
      width: 100%;
      height: 10%;
    }
  }
</style>
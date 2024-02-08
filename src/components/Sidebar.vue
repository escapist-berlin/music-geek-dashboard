<template>
  <div class="sidebar-container">
    <button class="sidebar-button">
      <font-awesome-icon icon="fa-solid fa-house" class="sidebar-icon" />
    </button>
    <button class="sidebar-button">
      <font-awesome-icon icon="fa-solid fa-calendar" class="sidebar-icon" />
    </button>
    <button class="sidebar-button">
      <font-awesome-icon icon="fa-solid fa-video" class="sidebar-icon" />
    </button>
    <button class="sidebar-button">
      <font-awesome-icon icon="fa-solid fa-message" class="sidebar-icon" />
    </button>
    <button class="sidebar-button">
      <font-awesome-icon icon="fa-solid fa-gear" class="sidebar-icon" />
    </button>
  </div>
</template>

<script>
</script>

<style scoped>
  .sidebar-container {
    width: 100%;
    height: 10%;
    /* border: 5px solid red; */
    /* border-radius: 15px; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 30px;
  }

  .sidebar-button {
    background-color: transparent;
    cursor: pointer;
  }

  .sidebar-icon {
    color: rgba(214, 214, 214, 0.6);
    font-size: 18px;
  }

  .sidebar-button:hover .sidebar-icon {
    color: rgba(214, 214, 214, 1);
  }

  @media (min-width: 576px) and (max-width: 991px) {
    .sidebar-container {
      gap: 50px;
    }
    .sidebar-icon {
      font-size: 21px;
    }
  }

  @media (min-width: 992px) {
    .sidebar-container {
      width: 10%;
      height: 100%;
      flex-direction: column;
      gap: 70px;
    }
    .sidebar-icon {
      font-size: 24px;
    }
  }
</style>
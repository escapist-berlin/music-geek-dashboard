<template>
  <div class="sidebar-container">
    <SidebarButton icon="fa-solid fa-house" />
    <SidebarButton icon="fa-solid fa-calendar" />
    <SidebarButton icon="fa-solid fa-video" />
    <SidebarButton icon="fa-solid fa-message" />
    <SidebarButton icon="fa-solid fa-gear" />
  </div>
</template>

<script>
import SidebarButton from '@/components/SidebarButton.vue';

export default {
  components: {
    SidebarButton
  }
}
</script>

<style lang="scss" scoped>
  .sidebar-container {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 30px;
    padding: 35px;
  }

  @media (min-width: 576px) and (max-width: 991px) {
    .sidebar-container {
      gap: 50px;
    }
  }

  @media (min-width: 992px) {
    .sidebar-container {
      width: 10%;
      height: 100%;
      flex-direction: column;
      gap: 70px;
    }
  }
</style>
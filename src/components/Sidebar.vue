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
  name: 'Sidebar',
  components: {
    SidebarButton
  }
}
</script>

<style lang="scss" scoped>
  .sidebar-container {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: 35px;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    .sidebar-container {
      flex-direction: column;
      gap: 70px;
    }
  }
</style>
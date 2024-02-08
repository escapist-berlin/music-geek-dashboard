<template>
  <button class="sidebar-button" @click="handleClick">
    <font-awesome-icon :icon="icon" class="sidebar-icon" />
  </button>
</template>

<script>
export default {
  props: {
    icon: String,
  },
  methods: {
    handleClick() {
      window.location.href = "/";
    }
  }
}
</script>

<style lang="scss" scoped>
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
    .sidebar-icon {
      font-size: 21px;
    }
  }
  @media (min-width: 992px) {
    .sidebar-icon {
      font-size: 24px;
    }
  }
</style>
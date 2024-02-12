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
    font-size: 21px;
    color: rgba(214, 214, 214, 0.6);
  }

  .sidebar-button:hover .sidebar-icon {
    color: rgba(214, 214, 214, 1);
  }

  @media (min-width: 1024px) {
    .sidebar-icon {
      font-size: 24px;
    }
  }
</style>
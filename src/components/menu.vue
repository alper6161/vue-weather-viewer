<script>
import {useMenuHandler} from "@/stores/common";

export default {
  name: "menu",
  methods: {
    isMenuOpen() {
      return useMenuHandler().isMenuOpen
    },
  }
}
</script>

<template>
  <div class="container" :class="isMenuOpen() ? 'large-menu-width' : 'small-menu-width'">
    <div class="menu-item">
      <font-awesome-icon icon="fa-solid fa-sun" class="menu-item-icon"/>
      <router-link to="/">Dashboard</router-link>
    </div>
    <div class="menu-item">
      <font-awesome-icon icon="fa-solid fa-file" class="menu-item-icon" />
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style scoped>
  .container {
    position: absolute;
    left: 0;
    top: 3rem;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background-color: #1D2731;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  .large-menu-width {
    width: 9rem;
  }

  .small-menu-width {
    width: 2.5rem;
  }

  .menu-item {
    height: 2rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    font-size: 18px;
  }

  .menu-item-icon {
    margin-right: .75rem;
  }

  a {
    color: #FFFFFF!important;
  }
</style>
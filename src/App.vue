<script>
import Header from './components/header.vue';
import Menu from './components/menu.vue';
import {useMenuHandler} from './stores/common'
  export default {
    name: 'app',
    components: {
      Header,
      Menu,
    },
    methods: {
      isMenuOpen() {
        return useMenuHandler().isMenuOpen;
      }
    }
  }
</script>

<template>
  <div id="app">
    <Header class="header"></Header>
    <Menu class="menu"></Menu>
    <div class="container content" :class="isMenuOpen() ? 'large-menu' : 'small-menu'">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #D9D9D9;
  }

  body {
    font-family: 'montserrat', sans-serif;
  }

  .content {
    min-height: 100vh;
  }

  .small-menu {
    margin-left: 2.5rem;
  }

  .large-menu {
    margin-left: 9rem;
  }
</style>

<script>
import Header from './components/header.vue';
import Menu from './components/menu.vue';
  export default {
    name: 'app',
    components: {
      Header,
      Menu,
    }
  }
</script>

<template>
  <div id="app">
    <Header class="header"></Header>
    <Menu class="menu"></Menu>
    <div class="container content">
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
    margin-left: 9rem;
    min-height: 100vh;
  }
</style>

<template>
  <div class="container">
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

<script>
export default {
  name: "menu"
}
</script>

<style scoped>
  .container {
    position: absolute;
    left: 0;
    top: 3rem;
    bottom: 0;
    width: 9rem;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    background-color: #393939;
  }

  .menu-item {
    height: 2rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  .menu-item-icon {
    margin-right: .75rem;
  }

  a {
    color: #FFFFFF!important;
  }

</style>
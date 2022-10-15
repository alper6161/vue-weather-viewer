<script>
import {useMenuHandler} from '../stores/common'

export default {
  name: "header",
  methods: {
    toggleMenu() {
      useMenuHandler().toggleMenu()
    }
  }
}
</script>

<template>
  <div class="container">
    <font-awesome-icon icon="fa-solid fa-bars" class="menu-icon" @click="toggleMenu()"/>
    <img class="logo" src="../assets/logo.png"/>
    <h3> Weather App</h3>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1D2731;
  height: 3rem;
  position: relative;
}

.logo {
  max-height: 2.8rem;
  max-width: 4rem;
  margin-right: .5rem;
}

.menu-icon {
  font-size: 20px;
  position: absolute;
  left: 1rem;
}

</style>
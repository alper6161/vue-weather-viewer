<template>
  <div class="container">
    <img class="logo" src="../assets/logo.png" />
    <h3> Weather App</h3>
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1D2731;
    height: 3rem;
  }

  .logo {
    max-height: 2.8rem;
    max-width: 4rem;
    margin-right: .5rem;
  }

</style>
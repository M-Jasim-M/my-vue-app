

<!-- App.vue -->
<template>
    <div id="app">
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/about">About</router-link> -->
  
      <RouterLink to="/about">About</RouterLink>
      <router-view></router-view>
    </div>
  </template>
  

<style>

</style>
<script>
export default {
  name: 'NavBar',
}
</script>
<template>
  <div id="app">
    <NavbarComp />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';

export default {
  name: 'App',
  components: {
    NavbarComp
  }
};
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>


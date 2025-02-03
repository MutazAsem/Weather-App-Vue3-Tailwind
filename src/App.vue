<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="felx flex-col main-h-screen font-Roboto bg-weather-primary">
    <Navbar/>
    <router-view/>
  </div>
</template>

<style>

</style>

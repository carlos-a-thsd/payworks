
<template>
  <SidebarMenu/>
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view/>
  </div>
  <!-- <ul>
    <li><router-link :to="{name: 'home'}">Home</router-link></li>
    <li><router-link :to="{name: 'about'}">About</router-link></li>
  </ul> -->
</template>
<script setup>
  import SidebarMenu from './components/sidebar/SidebarMenu.vue'
  import { sidebarWidth } from './components/sidebar/state';
  import { RouterView, RouterLink } from 'vue-router';
</script>
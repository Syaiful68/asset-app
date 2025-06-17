<script setup>
import Sidebar from "./views/Layout/SideNav.vue";
</script>

<template>
  <div class="app" :class="{ 'page-center': $route.path === '/login' }">
    <Sidebar v-if="$route.path !== '/login'"></Sidebar>
    <div class="page-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

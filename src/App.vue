<script setup>
import Sidebar from "./views/Layout/SideNav.vue";
</script>

<template>
  <div class="app">
    <Sidebar></Sidebar>
    <div class="page-wrapper">
      <Appbar></Appbar>
      <router-view></router-view>
    </div>
  </div>
</template>

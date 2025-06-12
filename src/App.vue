<script setup>
import Appbar from "./views/Layout/Appbar.vue";
import Sidebar from "./views/Layout/SideNav.vue";
</script>

<template>
  <div class="app">
    <Sidebar></Sidebar>
    <Appbar></Appbar>
    <router-view></router-view>
  </div>
</template>

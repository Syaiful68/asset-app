<script setup>
import Sidebar from "./views/Layout/SideNav.vue";
import { useAuthStore } from "./stores/authStore";
import { onMounted } from "vue";

const authen = useAuthStore();
onMounted(() => {
  authen.userAuth();
});
</script>

<template>
  <div class="app" :class="{ 'page-center': $route.path === '/login' }">
    <Sidebar v-if="$route.path !== '/login'"></Sidebar>
    <div class="page-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

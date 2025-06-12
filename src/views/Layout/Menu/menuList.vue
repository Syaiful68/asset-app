<script setup>
import MenuDropdown from "./menuItem.vue";
defineProps({
  label: String,
  icons: String,
  path: String,
  data: Object,
});
</script>

<template>
  <li class="nav-item">
    <router-link class="nav-link" :to="path" :class="{ dropdown: data }">
      <span class="nav-link-icon d-md-none d-lg-inline-block"
        ><!-- Download SVG icon from http://tabler.io/icons/icon/home -->
        <i class="fa-solid fa-computer"></i>
      </span>
      <span class="nav-link-title"> {{ label }} </span>
    </router-link>
    <MenuDropdown
      v-for="(dropdown, index) in data"
      :key="index"
      :label="dropdown.label"
      :path="dropdown.path"
    ></MenuDropdown>
  </li>
</template>

<script setup>
import MenuDropdown from "./menuItem.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  label: String,
  icons: String,
  path: String,
  data: Object,
});

const route = useRoute();

const OpenMenu = ref(false);

function toggleMenu(params) {
  return (OpenMenu.value = !OpenMenu.value);
}
</script>

<template>
  <li
    class="nav-item"
    @click="toggleMenu"
    :class="{ active: $route.path.startsWith(path) }"
  >
    <router-link class="nav-link" :to="path" :class="{ dropdown: data }">
      <span class="nav-link-icon d-md-none d-lg-inline-block"
        ><!-- Download SVG icon from http://tabler.io/icons/icon/home -->
        <i class="fa-solid" :class="icons"></i>
      </span>
      <span class="nav-link-title"> {{ label }} </span>
    </router-link>
    <MenuDropdown
      :show="OpenMenu"
      v-for="(dropdown, index) in data"
      :key="index"
      :label="dropdown.label"
      :path="dropdown.path"
    ></MenuDropdown>
  </li>
</template>

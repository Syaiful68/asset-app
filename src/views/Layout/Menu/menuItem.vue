<script setup>
defineProps({
  label: String,
  path: String,
  show: Boolean,
});
</script>

<template>
  <div
    class="dropdown-menu"
    :class="{
      show: show === true,
      show: $route.path.startsWith('/report'),
    }"
  >
    <div class="dropdown-menu-columns">
      <div class="dropdown-menu-column">
        <router-link
          class="dropdown-item"
          :class="{ active: $route.path === path }"
          :to="path"
          >{{ label }}</router-link
        >
      </div>
    </div>
  </div>
</template>

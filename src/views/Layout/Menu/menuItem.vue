<script setup>
defineProps({
  label: String,
  path: String,
});
</script>

<template>
  <div class="dropdown-menu show">
    <div class="dropdown-menu-columns">
      <div class="dropdown-menu-column">
        <router-link class="dropdown-item" :to="path">{{ label }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  names: String,
  labels: String,
  icons: String,
  color: String,
  total: Number,
});
</script>

<template>
  <div class="card card-sm">
    <div class="card-body">
      <div class="row align-items-center">
        <div class="col-auto">
          <span class="text-white avatar" :class="color"
            ><!-- Download SVG icon from http://tabler.io/icons/icon/currency-dollar -->
            <i class="fa-solid" :class="icons"></i>
          </span>
        </div>
        <div class="col">
          <div class="font-weight-medium">{{ total }}</div>
          <div class="text-secondary">{{ labels }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

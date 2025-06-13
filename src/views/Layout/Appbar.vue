<script setup>
//
defineProps({
  header: Object,
});
</script>

<template>
  <!-- BEGIN PAGE HEADER -->
  <div class="page-header d-print-none" aria-label="Page header">
    <div class="container-xl">
      <div class="row g-2 align-items-center">
        <div class="col">
          <!-- Page pre-title -->
          <div class="col">
            <div class="mb-1">
              <ol class="breadcrumb" aria-label="breadcrumbs">
                <li
                  class="breadcrumb-item"
                  v-for="(item, index) in header[0].path"
                >
                  <router-link :to="item.link">{{ item.name }}</router-link>
                </li>
              </ol>
            </div>
          </div>
          <h2 class="page-title">{{ header[0].label }}</h2>
        </div>
      </div>
    </div>
  </div>
  <!-- END PAGE HEADER -->
</template>

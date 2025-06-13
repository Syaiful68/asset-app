<script setup>
import AppBar from "../Layout/Appbar.vue";
//
const headers = [
  {
    label: "Building",
    title: "Building",
    path: [
      { label: "Building", link: "/building", name: "Building" },
      { label: "Create", link: "#", name: "Create" },
    ],
  },
];
</script>

<template>
  <AppBar :header="headers" />
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <div class="col-12">
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

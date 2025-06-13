<script setup>
import AppBar from "../Layout/Appbar.vue";
const headers = [
  {
    label: "Armada",
    title: "Armada",
    path: [{ label: "Armada", link: "", name: "Armada" }],
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
          <TableView :header="tableHeader" :data="datas" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TableView from "./partials/tableView.vue";
import AppBar from "../Layout/Appbar.vue";

const headers = [
  {
    label: "Armada",
    title: "Armada",
    path: [{ label: "Armada", link: "", name: "Armada" }],
  },
];

const tableHeader = [
  { name: "Plat Number", label: "plat" },
  { name: "Compenies", label: "compenies" },
  { name: "Type", label: "type" },
  { name: "Vehicle", label: "vehicles" },
  { name: "Status", label: "status" },
  { name: "", label: "" },
];

const datas = [
  {
    tags: "BK 9081 MMA",
    items: "CV. Aufa",
    condition: "Truck",
    location: "Fuso",
    status: "Onroad",
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

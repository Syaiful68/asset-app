<script setup>
import TableView from "./partials/tableView.vue";
import AppBar from "../Layout/Appbar.vue";

const headers = [
  {
    label: "Repair",
    title: "Repair",
    path: [{ label: "Repair", link: "", name: "Repair" }],
  },
];

const tableHeader = [
  { name: "Code Repair", label: "plat" },
  { name: "Item", label: "plat" },
  { name: "Location", label: "plat" },
  { name: "Do date", label: "plat" },
  { name: "User", label: "plat" },
  { name: "", label: "" },
];

const datas = [
  {
    tags: "RAD00001",
    items: "Mesin Jahit",
    condition: "Tarutung",
    location: "08 juni 2025",
    status: "Raka",
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

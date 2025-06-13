<script setup>
import TableView from "./partials/tableView.vue";
import AppBar from "../Layout/Appbar.vue";

const headers = [
  {
    label: "Building",
    title: "Building",
    path: [{ label: "Building", link: "", name: "Building" }],
  },
];

const tableHeader = [
  { name: "Tags", label: "tags" },
  { name: "Item", label: "item" },
  { name: "Condition", label: "condition" },
  { name: "Location", label: "location" },
  { name: "Status", label: "status" },
  { name: "", label: "" },
];

const datas = [
  {
    tags: "DTB00092891",
    items: "Komputer Core i3",
    condition: "Good",
    location: "Tarutung",
    status: "Used",
  },
  {
    tags: "DTB00092892",
    items: "Mesin Jahit",
    condition: "Good",
    location: "Silangit",
    status: "Used",
  },
  {
    tags: "DTB00092893",
    items: "Komputer Core i3",
    condition: "Good",
    location: "Balige",
    status: "Used",
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

<script setup>
import TableView from "./partials/tableView.vue";
import CardList from "./partials/cardList.vue";
import AppBar from "../Layout/Appbar.vue";

const headers = [
  {
    label: "Asset",
    title: "Asset",
    path: [{ label: "Asset", link: "", name: "Asset" }],
  },
];

const Lists = [
  {
    label: "Total",
    name: "total",
    total: 24,
    icon: "fa-database",
    color: "bg-dark",
  },
  {
    label: "Elektronik",
    name: "elektronik",
    total: 24,
    icon: "fa-computer",
    color: "bg-warning",
  },
  {
    label: "Furnitur",
    name: "furnitur",
    total: 102,
    icon: "fa-couch",
    color: "bg-success",
  },
  {
    label: "Machine",
    name: "machine",
    total: 12,
    icon: "fa-car-battery",
    color: "bg-secondary",
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
          <div class="row row-cards">
            <div
              class="col-sm-6 col-lg-3"
              v-for="(list, index) in Lists"
              :key="index"
            >
              <CardList
                :labels="list.label"
                :names="list.name"
                :total="list.total"
                :icons="list.icon"
                :color="list.color"
              ></CardList>
            </div>
          </div>
        </div>
        <div class="col-12">
          <TableView :header="tableHeader" :data="datas" />
        </div>
      </div>
    </div>
  </div>
</template>

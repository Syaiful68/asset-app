<script setup>
import TableView from "./partials/tableView.vue";
import AppBar from "../Layout/Appbar.vue";
import Api from "@/utils/Api";
import { onMounted, ref } from "vue";

const headers = [
  {
    label: "Report",
    title: "Report",
    path: [
      { label: "Report", link: "", name: "Report" },
      { label: "Asset", link: "", name: "Asset" },
    ],
  },
];

const tableHeader = [
  { name: "Office", label: "office" },
  { name: "Owner Name", label: "owner name" },
  { name: "Type", label: "type" },
  { name: "Rent", label: "rent" },
  { name: "Contract Date", label: "contract date" },
  { name: "", label: "" },
];

const titleTable = "Asset Report";

const datas = ref([]);
</script>

<template>
  <AppBar :header="headers" />
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <div class="col-12"></div>
        <div class="col-12">
          <TableView :header="tableHeader" :data="datas" :title="titleTable" />
        </div>
      </div>
    </div>
  </div>
</template>

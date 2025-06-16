<script setup>
import TableView from "./partials/tableView.vue";
import AppBar from "../Layout/Appbar.vue";
import { ref } from "vue";
import Api from "@/utils/Api";
import { onMounted } from "vue";

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

const datas = ref([]);

// method
const getBuilding = async () => {
  await Api.get("/building", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    datas.value = res.data.building;
  });
};
const search = async (value) => {
  await Api.get("/building?search=" + value, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    datas.value = res.data.building;
  });
};
const page = async (value) => {
  await Api.get("/building?page=" + value, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    datas.value = res.data.building;
  });
};

onMounted(() => {
  getBuilding();
});
</script>

<template>
  <AppBar :header="headers" />
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <div class="col-12">
          <TableView
            :header="tableHeader"
            :data="datas"
            @pages="page"
            @searchQuery="search"
          />
        </div>
      </div>
    </div>
  </div>
</template>

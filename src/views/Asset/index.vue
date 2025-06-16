<script setup>
import TableView from "./partials/tableView.vue";
import CardList from "./partials/cardList.vue";
import AppBar from "../Layout/Appbar.vue";
import { ref, onMounted } from "vue";
import Api from "@/utils/Api";

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
  { name: "Location", label: "location" },
  { name: "Condition", label: "condition" },
  { name: "", label: "" },
];

const datas = ref([]);

// method
const getAsset = async () => {
  await Api.get("/asset", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    datas.value = res.data.asset;
  });
};
const page = async (value) => {
  await Api.get("/asset?page=" + value, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    datas.value = res.data.asset;
  });
};

const search = async (value) => {
  await Api.get("/asset?search=" + value, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    datas.value = res.data.asset;
  });
};

//access
onMounted(() => {
  getAsset();
});
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

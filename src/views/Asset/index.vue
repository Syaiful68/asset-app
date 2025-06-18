<script setup>
import TableView from "./partials/tableView.vue";
import CardList from "./partials/cardList.vue";
import AppBar from "../Layout/Appbar.vue";
import { ref, onMounted, reactive } from "vue";
import Api from "@/utils/Api";

const headers = [
  {
    label: "Asset",
    title: "Asset",
    path: [{ label: "Asset", link: "", name: "Asset" }],
  },
];

const tableHeader = [
  { name: "Tags", label: "tags" },
  { name: "Item", label: "item" },
  { name: "Location", label: "location" },
  { name: "Condition", label: "condition" },
  { name: "", label: "" },
];

const currencyAsset = reactive({
  total: null,
  elektronik: null,
  furnitur: null,
  machine: null,
});

const datas = ref([]);

// method
const getAsset = async () => {
  await Api.get("/asset", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      console.log(res);
      datas.value = res.data.asset;
      currencyAsset.total = res.data.total;
      currencyAsset.furnitur = res.data.furnitur;
      currencyAsset.elektronik = res.data.elektronik;
      currencyAsset.machine = res.data.machine;
    })
    .catch((error) => {
      if (error.status === 401) {
        localStorage.removeItem("token");
      }
      console.log(error);
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
            <cardList :datas="currencyAsset"></cardList>
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

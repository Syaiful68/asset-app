<script setup>
import TableView from "./partials/tableView.vue";
import AppBar from "../Layout/Appbar.vue";
import Api from "@/utils/Api";
import { onMounted, ref } from "vue";

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

const datas = ref([]);

const getArmada = async () => {
  await Api.get("/armada", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      console.log(res);
      datas.value = res.data.armada;
    })
    .catch((error) => {
      console.log(error);
    });
};
const search = async (value) => {
  await Api.get("/armada?search=" + value, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      console.log(res);
      datas.value = res.data.armada;
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getArmada();
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
            @searchQuery="search"
          />
        </div>
      </div>
    </div>
  </div>
</template>

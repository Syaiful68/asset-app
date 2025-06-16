<script setup>
import { ref, onMounted } from "vue";
import AppBar from "../Layout/Appbar.vue";
import TableView from "./partials/tableView.vue";
import Api from "@/utils/Api";

const headers = [
  {
    label: "Vendor",
    title: "Vendor",
    path: [{ label: "Vendor", link: "", name: "Vendor" }],
  },
];

const tableHeader = [
  { name: "Compeny", label: "Compeny" },
  { name: "Owner Name", label: "Owner Name" },
  { name: "Contact", label: "Contact" },
  { name: "created", label: "Do date" },
  { name: "", label: "" },
];

const datas = ref([]);

const getCompeny = async () => {
  await Api.get("/compeny", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
  });
};

onMounted(() => {
  getCompeny();
});
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

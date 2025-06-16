<script setup>
import { ref, onMounted } from "vue";
import AppBar from "../Layout/Appbar.vue";
import TableView from "./partials/tableView.vue";
import ModalView from "./partials/modalView.vue";
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

// declare
const datas = ref([]);
const invisbleModal = ref(false);

// method
function toggleModal() {
  return (invisbleModal.value = !invisbleModal.value);
}

const getCompeny = async () => {
  await Api.get("/compeny", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    datas.value = res.data.compeny;
  });
};

const search = async (value) => {
  await Api.get("/compeny?search=" + value, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    datas.value = res.data.compeny;
  });
};

// access
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
          <TableView
            :header="tableHeader"
            :data="datas"
            @open="toggleModal"
            @searchQuery="search"
          />
        </div>
      </div>
    </div>
  </div>
  <ModalView v-show="invisbleModal" @close="toggleModal"></ModalView>
</template>

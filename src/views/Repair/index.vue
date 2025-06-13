<script setup>
import { ref } from "vue";
import TableView from "./partials/tableView.vue";
import ModalView from "./partials/modalView.vue";
import AppBar from "../Layout/Appbar.vue";
import Api from "@/utils/Api";
import { onMounted } from "vue";

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
// declare
const errs = ref([]);
const datas = ref([]);
const assetData = ref([]);
const invisbleModal = ref(false);

// method
function toggleModal() {
  return (invisbleModal.value = !invisbleModal.value);
}

const getRepair = async () => {
  await Api.get("/repair", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      console.log(res);
      datas.value = res.data.repair;
      assetData.value = res.data.asset;
    })
    .catch((errors) => {
      console.log(errors);
      if (errors.status === 422) {
        errs.value = errors.response.data;
      }
    });
};

// access

onMounted(() => {
  getRepair();
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
            :data="assetData"
            @open="toggleModal"
          />
        </div>
      </div>
    </div>
  </div>
  <ModalView
    v-show="invisbleModal"
    @close="toggleModal"
    :data="assetData"
    :errs="errs"
  ></ModalView>
</template>

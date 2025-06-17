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
  { name: "Tags", label: "tags" },
  { name: "Item", label: "item" },
  { name: "Location", label: "location" },
  { name: "Condition", label: "condition" },
  { name: "Do Date", label: "created" },
];

const titleTable = ref("Asset Report");
const datas = ref([]);
const from = ref("");
const to = ref("");

// method
const getData = () => {
  Api.get("export/asset?from=" + from.value + "&to=" + to.value, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res.data.data);
    datas.value = res.data.data;
  });
};
</script>

<template>
  <AppBar :header="headers" />
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col">
                      <label for="" class="form-label">From date</label>
                      <input type="date" v-model="from" class="form-control" />
                    </div>
                    <div class="col">
                      <label for="" class="form-label">To date</label>
                      <input type="date" v-model="to" class="form-control" />
                    </div>
                  </div>
                  <br/>
                  <button
                        type="submit"
                        @click="getData()"
                        class="btn btn-success"
                      >
                        Submit
                      </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <TableView :header="tableHeader" :data="datas" :titles="titleTable" />
        </div>
      </div>
    </div>
  </div>
</template>

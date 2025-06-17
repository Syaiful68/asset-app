<script setup>
import _ from "lodash";
import { watch, ref } from "vue";
import dayjs from "dayjs";
import exportExcel from "vue-json-excel3";

defineProps({
  header: Object,
  data: Object,
  titles: String,
});

const data_asset = {
  tags: "asset_code",
  item: "asset_name",
  location: "office.office_name",
  condition: "condition",
  pic: "pic",
  type: "type",
  created_at: {
    field: "created_at",
    callback: (value) => {
      return dayjs(value).format("DD-MM-YYYY");
    },
  },
};
const data_repair = {
  REPAIR: "repair_code",
  TAGS: "asset.asset_code",
  ITEM: "asset.asset_name",
  DESCRIPTION: "description",
  STATUS: "status",
  USER_CREATE: "user.user",
  HANDLE: "handle",
  USER_HANDLE: "user_handle",
  created_at: {
    field: "created_at",
    callback: (value) => {
      return dayjs(value).format("DD-MM-YYYY");
    },
  },
  updated_at: {
    field: "updated_at",
    callback: (value) => {
      return dayjs(value).format("DD-MM-YYYY");
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-table">
      <div class="card-header">
        <div class="row w-full">
          <div class="col">
            <h3 class="card-title mb-0">{{ titles }}</h3>
            <p class="text-secondary m-0">{{ titles }}</p>
          </div>
          <div class="col-md-auto col-sm-12">
            <div class="ms-auto d-flex flex-wrap btn-list">
              <exportExcel
                v-if="$route.path === '/report/asset'"
                class="btn btn-success"
                :data="data"
                :fields="data_asset"
                type="xlsx"
                name="asset.xlsx"
                >Excel</exportExcel
              >
              <exportExcel
                v-if="$route.path === '/report/repair'"
                class="btn btn-success"
                :data="data"
                :fields="data_repair"
                type="xlsx"
                name="asset.xlsx"
                >Excel</exportExcel
              >
            </div>
          </div>
        </div>
      </div>
      <div id="advanced-table">
        <div class="table-responsive">
          <table class="table table-vcenter table-selectable">
            <thead>
              <tr>
                <th v-for="(list, index) in header" :key="index">
                  {{ list.label }}
                </th>
              </tr>
            </thead>
            <tbody class="table-tbody">
              <tr
                v-if="$route.path === '/report/asset'"
                v-for="(item, index) in data"
                :key="index"
              >
                <td>{{ item.asset_code }}</td>
                <td>{{ item.asset_name }}</td>
                <td>{{ item.office.office_name }}</td>
                <td>{{ item.condition }}</td>
                <td>{{ dayjs(item.created_at).format("MMM DD, YYYY") }}</td>
              </tr>
              <tr
                v-if="$route.path === '/report/repair'"
                v-for="(item, index) in data"
                :key="index"
              >
                <td>{{ item.repair_code }}</td>
                <td>{{ item.asset.asset_code }}</td>
                <td>{{ item.asset.location }}</td>
                <td>{{ dayjs(item.created_at).format("MMM DD, YYYY") }}</td>
                <td>{{ item.user.user }}</td>
                <td>{{ item.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

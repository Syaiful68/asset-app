<script setup>
import _ from "lodash";
import { watch, ref } from "vue";

const emit = defineEmits(["searchQuery", "pages"]);
const searchTerm = ref("");

watch(
  searchTerm,
  _.debounce((value) => {
    emit("searchQuery", value);
  }, 1000)
);
function pages(value) {
  if (value !== null) {
    emit("pages", value.slice(-1));
  }
}

defineProps({
  header: Object,
  data: Object,
  title: String,
});
</script>

<template>
  <div class="card">
    <div class="card-table">
      <div class="card-header">
        <div class="row w-full">
          <div class="col">
            <h3 class="card-title mb-0">{{ title }}</h3>
            <p class="text-secondary m-0">{{ title }}</p>
          </div>
          <div class="col-md-auto col-sm-12">
            <div class="ms-auto d-flex flex-wrap btn-list">
              <router-link class="btn btn-primary btn-0" to="/building/create"
                >Add</router-link
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
              <tr v-for="(item, index) in data.data" :key="index">
                <td>{{ item.office.office_name }}</td>
                <td>{{ item.owner_name }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.rent }} Year</td>
                <td>{{ item.contract_date }}</td>
                <td>
                  <router-link :to="'/building/' + item.id + '/detail'"
                    >Edit</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import formatDate from "dayjs";
import { watch, ref } from "vue";
import _ from "lodash";
const emit = defineEmits(["searchQuery"]);

const searchTerm = ref(null);

watch(
  searchTerm,
  _.debounce((value) => {
    emit("searchQuery", value);
  }, 1000)
);

defineProps({
  header: Object,
  data: Object,
});
</script>

<template>
  <div class="card">
    <div class="card-table">
      <div class="card-header">
        <div class="row w-full">
          <div class="col">
            <h3 class="card-title mb-0">Compenies</h3>
            <p class="text-secondary m-0">Compenies List</p>
          </div>
          <div class="col-md-auto col-sm-12">
            <div class="ms-auto d-flex flex-wrap btn-list">
              <div class="input-group input-group-flat w-auto">
                <span class="input-group-text">
                  <!-- Download SVG icon from http://tabler.io/icons/icon/search -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-1"
                  >
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                </span>
                <input
                  id="advanced-table-search"
                  type="text"
                  class="form-control"
                  autocomplete="off"
                  v-model="searchTerm"
                />
              </div>
              <button
                type="button"
                @click="$emit('open')"
                class="btn btn-primary"
              >
                Add
              </button>
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
              <tr v-if="data.total === 0">
                <td class="text-center" colspan="5">Data not found</td>
              </tr>
              <tr v-for="(item, index) in data.data" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.owner_name }}</td>
                <td>{{ item.contact }}</td>
                <td>
                  {{ formatDate(item.created_at).format("MMM DD, YYYY") }}
                </td>
                <td>
                  <router-link :to="'/vendor/' + item.id + '/detail'"
                    >Edit</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer d-flex align-items-center">
          <ul class="pagination m-0 ms-auto">
            <li
              v-if="data.total !== 0"
              class="page-item"
              v-for="(item, index) in data.links"
              :key="index"
            >
              <button
                @click="pages(item.url)"
                type="button"
                class="page-link"
                :class="{ active: item.active }"
                :href="item.url"
                v-html="item.label"
              ></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

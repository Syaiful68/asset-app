<script setup>
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
            <h3 class="card-title mb-0">Armada</h3>
            <p class="text-secondary m-0">Armada List</p>
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
                />
                <span class="input-group-text">
                  <kbd>ctrl + K</kbd>
                </span>
              </div>
              <router-link to="/armada/create" class="btn btn-primary"
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
                  {{ list.name }}
                </th>
              </tr>
            </thead>
            <tbody class="table-tbody">
              <tr v-for="(item, index) in data">
                <td>{{ item.tags }}</td>
                <td>{{ item.items }}</td>
                <td>{{ item.condition }}</td>
                <td>{{ item.location }}</td>
                <td>{{ item.status }}</td>
                <td>
                  <router-link :to="'/asset/' + item.tags + '/detail'"
                    >Edit</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer d-flex align-items-center">
          <ul class="pagination m-0 ms-auto">
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBar from "../Layout/Appbar.vue";
const headers = [
  {
    label: "Asset",
    title: "Asset",
    path: [
      { id: 1, link: "/asset", name: "Asset" },
      { id: 2, link: "", name: "Create" },
    ],
  },
];

const condition = [
  { label: "Good", name: "good" },
  { label: "Repair", name: "repair" },
  { label: "Destroy", name: "destroy" },
];

const location = [
  { label: "Tarutung", name: "tarutung" },
  { label: "Balige", name: "balige" },
  { label: "Padang Sidempuan", name: "padangsidempuan" },
];

const SubmitAsset = () => {
  console.log("success");
};
</script>

<template>
  <AppBar :header="headers" />
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <form @submit.prevent="SubmitAsset">
        <div class="row row-deck row-cards">
          <!--  -->
          <div class="col-6">
            <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <label class="form-label">SN</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Tags</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Item</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Condition</label>
                  <select class="form-control">
                    <option value="">Choise</option>
                    <option
                      v-for="(list, index) in condition"
                      :value="list.name"
                    >
                      {{ list.label }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <label class="form-label">PIC</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Location</label>
                  <select class="form-control">
                    <option value="">Choise</option>
                    <option
                      v-for="(item, index) in location"
                      :key="index"
                      :value="item.name"
                    >
                      {{ item.label }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="card-footer">
                <div class="flex justify-content-end">
                  <button type="submit" class="btn btn-primary ms-auto">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

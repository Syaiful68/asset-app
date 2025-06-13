<script setup>
import AppBar from "../Layout/Appbar.vue";
import Api from "@/utils/Api";
import { onMounted, reactive, ref } from "vue";

// Diclare
const Location = ref([]);
const errs = ref([]);

const formData = reactive({
  sn: null,
  item: null,
  condition: "",
  type: "",
  pic: null,
  brand: null,
  model: null,
  location: "",
  description: null,
});

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
const TypeAsset = [
  { label: "Electronik", name: "elektronik" },
  { label: "Machine", name: "machine" },
  { label: "Furnitur", name: "furnitur" },
];
// method
const getLocation = async () => {
  await Api.get("/origin")
    .then((res) => {
      console.log(res);
      Location.value = res.data.origin;
    })
    .catch((errors) => {
      if (errors.status === 422) {
        errs.value = errors.response.errors;
      }
    });
};

const SubmitAsset = async () => {
  await Api.post("/asset", formData, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

// access
onMounted(() => {
  getLocation();
});
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
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errs.sn }"
                    v-model="formData.sn"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Item</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errs.item }"
                    v-model="formData.item"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Brand</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errs.brand }"
                    v-model="formData.brand"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Model</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errs.model }"
                    v-model="formData.model"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Type</label>
                  <select
                    class="form-control"
                    :class="{ 'is-invalid': errs.type }"
                    v-model="formData.type"
                  >
                    <option value="">Choise</option>
                    <option
                      v-for="(list, index) in TypeAsset"
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
                  <label class="form-label">Condition</label>
                  <select
                    class="form-control"
                    :class="{ 'is-invalid': errs.condition }"
                    v-model="formData.condition"
                  >
                    <option value="">Choise</option>
                    <option
                      v-for="(list, index) in condition"
                      :value="list.name"
                    >
                      {{ list.label }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">PIC</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errs.pic }"
                    v-model="formData.pic"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Location</label>
                  <select
                    class="form-control"
                    :class="{ 'is-invalid': errs.location }"
                    v-model="formData.location"
                  >
                    <option value="">Choise</option>
                    <option
                      v-for="(item, index) in Location"
                      :key="index"
                      :value="item.origin_code"
                    >
                      {{ item.origin_name }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errs.description }"
                    v-model="formData.description"
                  />
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

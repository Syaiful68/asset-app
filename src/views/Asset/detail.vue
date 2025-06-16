<script setup>
import AppBar from "../Layout/Appbar.vue";
import Api from "@/utils/Api.js";
import { useRoute } from "vue-router";
import { onMounted, ref, reactive } from "vue";

// declare
const headers = [
  {
    label: "Asset",
    title: "Asset",
    path: [
      { id: 1, link: "/asset", name: "Asset" },
      { id: 2, link: "", name: "Detail" },
    ],
  },
];

const route = useRoute();
const errs = ref([]);
const office = ref([]);
const repairData = ref([]);
const formData = reactive({
  sn: null,
  item: null,
  condition: "",
  type: "",
  pic: null,
  brend: null,
  model: null,
  location: "",
  description: null,
});

const TypeAsset = [
  { label: "Electronik", name: "elektronik" },
  { label: "Machine", name: "machine" },
  { label: "Furnitur", name: "furnitur" },
];

const condition = [
  { label: "Good", name: "good" },
  { label: "Repair", name: "repair" },
  { label: "Destroy", name: "destroy" },
];

// method
const getAsset = async () => {
  await Api.get("/asset/" + route.params.id, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      console.log(res);
      formData.sn = res.data.asset.sn;
      formData.item = res.data.asset.asset_name;
      formData.condition = res.data.asset.condition;
      formData.type = res.data.asset.type;
      formData.pic = res.data.asset.pic;
      formData.brend = res.data.asset.brend;
      formData.model = res.data.asset.model;
      formData.office = res.data.asset.location;
      //
      office.value = res.data.office;
      repairData.value = res.data.repair;
    })
    .catch((error) => {
      if (error.status === 422) {
        errs.value = error.response.data.errors;
      }
    });
};

// access
onMounted(() => {
  getAsset();
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
                    :class="{ 'is-invalid': errs.brend }"
                    v-model="formData.brend"
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
                  <label class="form-label">PIC</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errs.pic }"
                    v-model="formData.pic"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Office</label>
                  <select
                    class="form-control"
                    :class="{ 'is-invalid': errs.office }"
                    v-model="formData.office"
                  >
                    <option value="">Choise</option>
                    <option
                      v-for="(item, index) in office"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.office_name }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Condition</label>
                  <select
                    class="form-control"
                    :class="{ 'is-invalid': errs.condition }"
                    v-model="formData.condition"
                  >
                    <option value="">Choise</option>
                    <option
                      v-for="(item, index) in condition"
                      :key="index"
                      :value="item.name"
                    >
                      {{ item.label }}
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

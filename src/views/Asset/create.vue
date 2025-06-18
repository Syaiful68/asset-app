<script setup>
import { useRoute, useRouter } from "vue-router";
import AppBar from "../Layout/Appbar.vue";
import Api from "@/utils/Api";
import { onMounted, reactive, ref } from "vue";

// Diclare
const Location = ref([]);
const errs = ref([]);

const router = useRouter();

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

const TypeAsset = [
  { label: "Electronik", name: "elektronik" },
  { label: "Machine", name: "machine" },
  { label: "Furnitur", name: "furnitur" },
];
// method
const getLocation = async () => {
  await Api.get("/office").then((res) => {
    console.log(res);
    Location.value = res.data.office;
  });
};

const SubmitAsset = async () => {
  await Api.post("/asset", formData, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      console.log(res);
      router.push({ path: "/asset" });
    })
    .catch((error) => {
      console.log(error);
      errs.value = error.response.data.errors;
    });
};

function backAsset(){
  return router.push({path:'/asset'})
}

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
                      :key="index"
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
                      :value="item.id"
                    >
                      {{ item.office_name }}
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
                <div class="d-flex">
                  <button type="button" @click="backAsset" class="btn btn-secondary me-auto">Back</button>
                  <div class="justify-content-end">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

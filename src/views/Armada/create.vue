<script setup>
import { ref, onMounted } from "vue";
import AppBar from "../Layout/Appbar.vue";
import Api from "@/utils/Api";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const headers = [
  {
    label: "Armada",
    title: "Armada",
    path: [{ label: "Armada", link: "", name: "Armada" }],
  },
];
const typeCar = [
  { label: "Car", name: "car" },
  { label: "Truck", name: "truck" },
  { label: "Van", name: "van" },
];

// delare
const errs = ref([]);
const router = useRouter();
const compenies = ref([]);
const origins = ref([]);
const formData = reactive({
  compeny: "",
  plat: null,
  rent: null,
  type: "",
  contract: null,
  vehicle: null,
  location: "",
});

// method
const getCompeny = async () => {
  await Api.get("/compeny", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    compenies.value = res.data.compeny.data;
  });
};
const getOrigin = async () => {
  await Api.get("/origin", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    origins.value = res.data.origin;
  });
};
const submitArmada = async () => {
  await Api.post("/armada", formData, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      console.log(res);
      router.push({ path: "/armada" });
    })
    .catch((error) => {
      console.log(error);
      if (error.status === 422) {
        errs.value = error.response.data.errors;
      }
    });
};

// access
onMounted(() => {
  getCompeny();
  getOrigin();
});
</script>

<template>
  <AppBar :header="headers" />
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <form @submit.prevent="submitArmada">
        <div class="row row-deck row-cards">
          <div class="col-6">
            <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <label class="form-label">Compeny</label>
                  <select
                    class="form-control"
                    :class="{ 'is-invalid': errs.compeny }"
                    v-model="formData.compeny"
                  >
                    <option value="">Choise</option>
                    <option
                      v-for="(item, index) in compenies"
                      :value="item.id"
                      :key="index"
                    >
                      {{ item.compeny_name }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Plat Number</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errs.plat }"
                    v-model="formData.plat"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Contract</label>
                  <input
                    type="date"
                    class="form-control"
                    :class="{ 'is-invalid': errs.contract }"
                    v-model="formData.contract"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Rent</label>
                  <input
                    type="number"
                    class="form-control"
                    :class="{ 'is-invalid': errs.rent }"
                    v-model="formData.rent"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Location</label>
                  <select
                    class="form-control"
                    v-model="formData.location"
                    :class="{ 'is-invalid': errs.location }"
                  >
                    <option value="">Choise</option>
                    <option
                      v-for="(item, index) in origins"
                      :key="index"
                      :value="item.origin_code"
                    >
                      {{ item.origin_name }}
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
                  <label class="form-label">Vehicle</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errs.vehicle }"
                    v-model="formData.vehicle"
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
                    <option v-for="(item, index) in typeCar" :value="item.name">
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
                <div class="d-flex justify-content-end">
                  <button type="submit" class="btn btn-success">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

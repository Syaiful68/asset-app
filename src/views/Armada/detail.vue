<script setup>
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import AppBar from "../Layout/Appbar.vue";
import Api from "@/utils/Api";
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

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
const Fuels = [
  { name: "Pertalite", id: 1 },
  { name: "Bio Solar", id: 2 },
  { name: "Petamax", id: 3 },
  { name: "Dexlite", id: 4 },
];

// delare
const errs = ref([]);
const router = useRouter();
const route = useRoute();
const compenies = ref([]);
const origins = ref([]);
const formData = reactive({
  compeny: "",
  plat: null,
  fuel: "",
  rent: null,
  type: "",
  contract: null,
  vehicle: null,
  location: "",
  description: "",
});

// method
const getArmada = async () => {
  await Api.get("/armada/" + route.params.id, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    compenies.value = res.data.compeny;
    origins.value = res.data.origin;
    formData.compeny = res.data.armada.compeny_id;
    formData.plat = res.data.armada.plat_number;
    formData.fuel = res.data.armada.fuels;
    formData.rent = res.data.armada.rent;
    formData.type = res.data.armada.type;
    formData.contract = dayjs(res.data.armada.contract_date).format(
      "YYYY-MM-DD"
    );
    formData.vehicle = res.data.armada.vehicles;
    formData.location = res.data.armada.origin.origin_code;
    formData.description = res.data.armada.description;
  });
};
const updateArmada = async () => {
  await Api.patch("/armada/" + route.params.id, formData, {
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
  getArmada();
});
</script>

<template>
  <AppBar :header="headers" />
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <form @submit.prevent="updateArmada">
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
                    disabled
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
                    disabled
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Type</label>
                  <select
                    class="form-control"
                    :class="{ 'is-invalid': errs.type }"
                    v-model="formData.type"
                    disabled
                  >
                    <option value="">Choise</option>
                    <option v-for="(item, index) in typeCar" :value="item.name">
                      {{ item.label }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Fuels</label>
                  <select
                    class="form-control"
                    :class="{ 'is-invalid': errs.fuel }"
                    v-model="formData.fuel"
                    disabled
                  >
                    <option value="">Choise</option>
                    <option v-for="(item, index) in Fuels" :value="item.id">
                      {{ item.name }}
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
                  <button type="button" class="btn btn-secondary">Back</button>
                  <div class="justify-content-end">
                    <button type="submit" class="btn btn-success">
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

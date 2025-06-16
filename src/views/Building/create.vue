<script setup>
import Api from "@/utils/Api";
import AppBar from "../Layout/Appbar.vue";
import { onMounted, ref, reactive } from "vue";
import { useRouter } from "vue-router";

//
const headers = [
  {
    label: "Building",
    title: "Building",
    path: [
      { label: "Building", link: "/building", name: "Building" },
      { label: "Create", link: "#", name: "Create" },
    ],
  },
];

const typeBuilding = [
  { label: "Rent", name: "rent" },
  { label: "Property", name: "property" },
];

// declare
const router = useRouter();
const offices = ref([]);
const errs = ref([]);
const formData = reactive({
  nik: null,
  owner: null,
  contact: null,
  type: "",
  address: null,
  office: "",
  contract: null,
  rent: null,
});

// method
const getOffice = async () => {
  await Api.get("/office", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      console.log(res);
      offices.value = res.data.office;
    })
    .catch((error) => {
      console.log(error);
    });
};

const submitBuilding = async () => {
  await Api.post("/building", formData, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      console.log(res);
      router.push({ path: "/building" });
    })
    .catch((error) => {
      console.log(error);

      if (error.status === 422) {
        errs.value = error.response.data.errors;
      }
    });
};

onMounted(() => {
  getOffice();
});
</script>

<template>
  <AppBar :header="headers" />
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <form @submit.prevent="submitBuilding">
        <div class="row row-deck row-cards">
          <div class="col-6">
            <!--  -->
            <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <label class="form-label">NIK</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="formData.nik"
                    :class="{ 'is-invalid': errs.nik }"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Owner</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="formData.owner"
                    :class="{ 'is-invalid': errs.owner }"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Contact</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="formData.contact"
                    :class="{ 'is-invalid': errs.contact }"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Type</label>
                  <select
                    class="form-control"
                    v-model="formData.type"
                    :class="{ 'is-invalid': errs.type }"
                  >
                    <option value="">Choise</option>
                    <option
                      v-for="(item, index) in typeBuilding"
                      :key="index"
                      :value="item.name"
                    >
                      {{ item.label }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <!--  -->
            <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <label class="form-label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="formData.addresses"
                    :class="{ 'is-invalid': errs.addresses }"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Office</label>
                  <select
                    class="form-control"
                    v-model="formData.office"
                    :class="{ 'is-invalid': errs.office }"
                  >
                    <option value="">Choise</option>
                    <option
                      v-for="(item, index) in offices"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.office_name }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Contract</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="formData.contract"
                    :class="{ 'is-invalid': errs.contract }"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Rent</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="formData.rent"
                    :class="{ 'is-invalid': errs.rent }"
                  />
                </div>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

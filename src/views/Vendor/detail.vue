<script setup>
import AppBar from "../Layout/Appbar.vue";
import Api from "@/utils/Api";
import { ref, onMounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

const headers = [
  {
    label: "Vendor",
    title: "Vendor",
    path: [{ label: "Vendor", link: "", name: "Vendor" }],
  },
];

const currencyAsset = reactive({
  total: null,
  elektronik: null,
  furnitur: null,
  machine: null,
});

const route = useRoute();
const router = useRouter();
const datas = ref([]);
const errs = ref([]);
const formData = reactive({
  compeny: null,
  nik: null,
  owner: null,
  contact: null,
  address: null,
});

// method
const getVendor = async () => {
  await Api.get("/compeny/" + route.params.id, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    formData.compeny = res.data.compeny.compeny_name;
    formData.nik = res.data.compeny.nik;
    formData.owner = res.data.compeny.owner_name;
    formData.contact = res.data.compeny.contact;
    formData.address = res.data.compeny.address;
  });
};

function backVendor(){
  return router.push({path:"/vendor"})
}

//access
onMounted(() => {
  getVendor();
});
</script>

<template>
  <AppBar :header="headers" />
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="submitRepair">
            <div class="modal-body">
              <div class="mb-3">
                <label class="form-label">Compeny Name</label>
                <input
                  type="text"
                  v-model="formData.compeny"
                  :class="{ 'is-invalid': errs.compeny }"
                  class="form-control"
                  disabled
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Nik</label>
                <input
                  type="text"
                  v-model="formData.nik"
                  :class="{ 'is-invalid': errs.nik }"
                  class="form-control"
                  disabled
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Owner Name</label>
                <input
                  type="text"
                  v-model="formData.owner"
                  class="form-control"
                  :class="{ 'is-invalid': errs.owner }"
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Contact</label>
                <input
                  type="text"
                  v-model="formData.contact"
                  class="form-control"
                  :class="{ 'is-invalid': errs.contact }"
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Address</label>
                <input
                  type="text"
                  v-model="formData.address"
                  class="form-control"
                  :class="{ 'is-invalid': errs.address }"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                @click="backVendor"
                class="btn me-auto"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

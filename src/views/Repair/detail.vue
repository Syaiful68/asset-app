<script setup>
//
import { onMounted, reactive, ref } from "vue";
import AppBar from "../Layout/Appbar.vue";
import { useRoute, useRouter } from "vue-router";
import Api from "@/utils/Api";
const headers = [
  {
    label: "Repair",
    title: "Repair",
    path: [
      { id: 1, link: "/repair", name: "Repair" },
      { id: 2, link: "", name: "Create" },
    ],
  },
];

const errs = ref([]);
const route = useRoute();
const router = useRouter();
const formData = reactive({
  repair: "",
  asset: "",
  tags: "",
  description: null,
  location: null,
  status: "",
  handle: null,
  user_handle: null,
});

const statusRepair = [
  { label: "Repair", name: "repair" },
  { label: "Done", name: "done" },
  { label: "Destroy", name: "destroy" },
];

const status = ref("");

const updateRepair = async () => {
  await Api.patch("/repair/" + route.params.id, formData, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    router.push({ path: "/repair" });
  });
};

function backRepair() {
  router.push({ path: "/repair" });
}

const getData = async () => {
  await Api.get("/repair/" + route.params.id, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    console.log(res);
    formData.repair = res.data.repair.repair_code;
    formData.asset = res.data.repair.asset.asset_name;
    formData.tags = res.data.repair.asset.asset_code;
    formData.description = res.data.repair.description;
    formData.handle = res.data.repair.handle;
    formData.status = res.data.repair.status;
    status.status = res.data.repair.status;
  });
};
onMounted(() => {
  getData();
});
</script>

<template>
  <AppBar :header="headers" />
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <form @submit.prevent="updateRepair">
        <div class="row">
          <div class="col-6">
            <div class="card">
              <div class="card-body">
                <div class="modal-body">
                  <div class="mb-3">
                    <label class="form-label">Repair</label>
                    <input
                      type="text"
                      v-model="formData.repair"
                      class="form-control"
                      :class="{ 'is-invalid': errs.repair }"
                      disabled
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Tags</label>
                    <input
                      type="text"
                      v-model="formData.tags"
                      class="form-control"
                      :class="{ 'is-invalid': errs.tags }"
                      disabled
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Asset</label>
                    <input
                      type="text"
                      v-model="formData.asset"
                      class="form-control"
                      :class="{ 'is-invalid': errs.asset }"
                      disabled
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">Description</label>
                    <input
                      type="text"
                      v-model="formData.description"
                      class="form-control"
                      :class="{ 'is-invalid': errs.description }"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <div class="card-body">
                <div class="modal-body">
                  <div class="mb-3">
                    <label class="form-label">Handle Repair</label>
                    <input
                      type="text"
                      v-model="formData.handle"
                      class="form-control"
                      :class="{ 'is-invalid': errs.handle }"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">Status</label>
                    <select
                      v-model="formData.status"
                      class="form-control"
                      :class="{ 'is-invalid': errs.status }"
                    >
                      <option value="">Choise</option>
                      <option
                        v-for="(item, index) in statusRepair"
                        :key="index"
                        :value="item.name"
                      >
                        {{ item.label }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    @click="backRepair"
                    class="btn me-auto"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

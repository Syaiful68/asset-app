<script setup>
import Api from "@/utils/Api";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

defineProps({
  data: Object,
});

const emit = defineEmits(["close"]);

const errs = ref([]);
const router = useRouter();

const formData = reactive({
  compeny: "",
  nik: null,
  owner: null,
  contact: null,
  address: null,
});

const submitRepair = async () => {
  await Api.post("/compeny", formData, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      window.location.reload();
    })
    .catch((error) => {
      if (error.status === 422) {
        errs.value = error.response.data.errors;
      }
    });
};
</script>

<template>
  <div class="modal modal-blur" id="exampleModal" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
          ></button>
        </div>
        <form @submit.prevent="submitRepair">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Compeny Name</label>
              <input
                type="text"
                v-model="formData.compeny"
                :class="{ 'is-invalid': errs.compeny }"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Nik</label>
              <input
                type="text"
                v-model="formData.nik"
                :class="{ 'is-invalid': errs.nik }"
                class="form-control"
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
              @click="$emit('close')"
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
</template>

<style scoped>
.modal {
  display: block;
}
</style>

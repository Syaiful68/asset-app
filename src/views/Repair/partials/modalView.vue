<script setup>
import Api from "@/utils/Api";
import { ref } from "vue";
import { reactive } from "vue";

defineProps({
  data: Object,
});

const emit = defineEmits(["close"]);

const errs = ref([]);

const formData = reactive({
  asset: "",
  description: null,
});

const submitRepair = async () => {
  await Api.post("/repair", formData, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      console.log(res);
      (formData.asset = ""), (formData.description = ""), emit("close");
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
              <label class="form-label">Asset</label>
              <select
                class="form-control"
                v-model="formData.asset"
                :class="{ 'is-invalid': errs.asset }"
              >
                <option value="">Choise</option>
                <option v-for="(item, index) in data" :value="item.asset_code">
                  {{ item.asset_code }}-{{ item.asset_name }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Description</label>
              <input
                type="text"
                v-model="formData.description"
                class="form-control"
                :class="{ 'is-invalid': errs.description }"
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

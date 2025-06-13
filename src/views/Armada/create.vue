<script setup>
import AppBar from "../Layout/Appbar.vue";
const headers = [
  {
    label: "Armada",
    title: "Armada",
    path: [{ label: "Armada", link: "", name: "Armada" }],
  },
];
const compenies = [
  { name: "CV. Aufa", id: 1 },
  { name: "PT. NJA", id: 2 },
];
const typeCar = [
  { name: "Car", id: 1 },
  { name: "Truck", id: 2 },
  { name: "Van", id: 3 },
];
const Fuels = [
  { name: "Pertalite", id: 1 },
  { name: "Bio Solar", id: 2 },
  { name: "Petamax", id: 3 },
  { name: "Dexlite", id: 4 },
];
</script>

<template>
  <AppBar :header="headers" />
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">Compeny</label>
                <select class="form-control">
                  <option value="">Choise</option>
                  <option v-for="(item, index) in compenies" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Plat Number</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Contract</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Rent</label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">Vehicle</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Type</label>
                <select class="form-control">
                  <option value="">Choise</option>
                  <option v-for="(item, index) in typeCar" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Fuels</label>
                <select class="form-control">
                  <option value="">Choise</option>
                  <option v-for="(item, index) in Fuels" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label class="form-label">Description</label>
                <input type="text" class="form-control" />
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
    </div>
  </div>
</template>

<script setup>
import AppBar from "../Layout/Appbar.vue";
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
</script>

<template>
  <AppBar :header="headers" />
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <div class="col-6">
          <!--  -->
          <div class="card">
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">Nik</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Owner</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Contact</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Type</label>
                <input type="text" class="form-control" />
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
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Office</label>
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
            <div class="card-footer">
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

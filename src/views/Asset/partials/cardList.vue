<script setup>
defineProps({
  datas: Object,
});
</script>

<template>
  <div class="col-sm-6 col-lg-3">
    <div class="card card-sm">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-auto">
            <span class="bg-secondary text-white avatar"
              ><!-- Download SVG icon from http://tabler.io/icons/icon/currency-dollar -->
              <i class="fa-solid fa-database"></i>
            </span>
          </div>
          <div class="col">
            <div class="font-weight-medium">Total Asset</div>
            <div class="text-secondary">{{ datas.total }} Asset</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3">
    <div class="card card-sm">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-auto">
            <span class="bg-primary text-white avatar"
              ><!-- Download SVG icon from http://tabler.io/icons/icon/currency-dollar -->
              <i class="fa-solid fa-computer"></i>
            </span>
          </div>
          <div class="col">
            <div class="font-weight-medium">Electronik</div>
            <div class="text-secondary">{{ datas.elektronik }} Asset</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3">
    <div class="card card-sm">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-auto">
            <span class="bg-success text-white avatar"
              ><!-- Download SVG icon from http://tabler.io/icons/icon/currency-dollar -->
              <i class="fa-solid fa-couch"></i>
            </span>
          </div>
          <div class="col">
            <div class="font-weight-medium">Furniture</div>
            <div class="text-secondary">{{ datas.furnitur }} Asset</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3">
    <div class="card card-sm">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-auto">
            <span class="bg-warning text-white avatar"
              ><!-- Download SVG icon from http://tabler.io/icons/icon/currency-dollar -->
              <i class="fa-solid fa-blender-phone"></i>
            </span>
          </div>
          <div class="col">
            <div class="font-weight-medium">Machine</div>
            <div class="text-secondary">{{ datas.machine }} Asset</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

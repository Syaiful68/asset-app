<template>
  <!--  -->
  <div v-if="$slots.header">
    <slot name="header" />
  </div>
  <div class="table-responsive">
    <div v-if="$slots.default">
      <slot name="default" />
    </div>
  </div>
</template>

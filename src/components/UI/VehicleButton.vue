<template>
  <button class="button">
<slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VehicleButton',
  setup() {
    return {};
  },
});
</script>

<style scoped>
.button{
  height: 36px;
  padding: 5px;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 4px;
}
.button:hover{
  opacity: 0.7;
}
</style>

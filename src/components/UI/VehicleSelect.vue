<template>
  <label for="select">
  <select class="vehicle-select" id="select" value="" @change="onChange" :required="required">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value" >{{ option.name }}</option>
  </select>
</label>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { VehicleOption } from '@/types/general';

export default defineComponent({
  name: 'VehicleSelect',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array as PropType<VehicleOption[]>,
      default: () => [],
    },
    required: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    onChange(event: Event) {
      const element = event.target as HTMLSelectElement;
      this.$emit('optionSelected', element.value);
    },
  },
});
</script>

<style scoped>
.vehicle-select{
  width: 100%;
  height: 30px;
  margin-top: 8px;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 4px;
}
</style>

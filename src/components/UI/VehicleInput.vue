<template>
    <label class="vehicle-input__label" for="name">
      <slot></slot>
      <input class="vehicle-input__input" id="name" :value="modelValue" :placeholder="placeholder" :required="required" @input="onInput"
        type="text" />
    </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VehicleInput',
  props: {
    modelValue: {
      type: [String, Number],
    },
    placeholder: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    onInput(event: Event) {
      const el = event.target as HTMLInputElement;
      this.$emit('update:modelValue', el.value);
    },
  },

});
</script>

<style scoped>
.vehicle-input__input {
  height: 30px;
  margin-top: 8px;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 4px;
}

.vehicle-input__label {
  display: flex;
  flex-direction: column;
}</style>

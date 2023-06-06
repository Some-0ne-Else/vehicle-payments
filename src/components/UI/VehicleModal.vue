<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="modal" v-if="visible" @mousedown="$emit('modalOutsideClick', false)">
    <div class="modal__content" @mousedown.stop>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VehicleModal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
}

.modal__content {
  margin: auto;
  padding: 20px;
  border-radius: 12px;
  min-width: 400px;
  min-height: 300px;
  background-color: white;
}
</style>

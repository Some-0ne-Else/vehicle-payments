<template>
  <div v-if="isLoading">Данные загружаются, пожалуйста подождите</div>
  <div v-else-if="!vehicles.length">Транспортные средства отсутствуют</div>
  <div v-else class="container">
    <VehiclesItem v-for="vehicle in vehicles" :key="vehicle._id" :vehicle="vehicle" @onDelete="$emit('onDelete', vehicle._id)" />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Vehicle } from '@/types/general';
import VehiclesItem from './VehiclesItem/index.vue';

export default defineComponent({
  name: 'VehiclesList',
  props: {
    vehicles: {
      type: Array as PropType<Vehicle[]>,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    return {};
  },
  components: {
    VehiclesItem,
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>

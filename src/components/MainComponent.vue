<template>
  <main>
    <VehicleButton @click="handleOpenModal">Добавить авто</VehicleButton>
    <VehicleModal v-model:visible="modalVisible" @modalOutsideClick="handleCloseModal">
      <FormVehicle @formSubmit="addVehicle" />
    </VehicleModal>
<div class="blockWrapper">
<VehiclesList :vehicles="vehicles" :isLoading="isLoading" @onDelete="deleteVehicle"/>
</div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormVehicle from '@/components/FormVehicle.vue';
import VehiclesList from '@/components/VehiclesList/index.vue';
import { Vehicle } from '@/types/general';
import { DEFAULT_REQUEST_DELAY, TEMP_TOKEN } from '../constants/general';
import { vehiclesUrl } from '../constants/routes';

export default defineComponent({
  name: 'MainComponent',
  setup() {
    return {};
  },
  components: {
    FormVehicle,
    VehiclesList,
  },
  data(): { vehicles: Vehicle[], modalVisible: boolean, isLoading: boolean } {
    return {
      vehicles: [],
      modalVisible: false,
      isLoading: false,
    };
  },
  methods: {
    handleDelete(id: string) {
      this.vehicles = this.vehicles.filter((v) => v._id !== id);
    },
    handleOpenModal() {
      this.modalVisible = true;
    },
    handleCloseModal() {
      this.modalVisible = false;
    },
    async addVehicle(vehicle: Vehicle) {
      await fetch(
        vehiclesUrl,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization: `Bearer ${TEMP_TOKEN}`,
          },
          body: JSON.stringify(vehicle),
        },
      )
        .then((res) => (res.status === 200 ? res.json() : Promise.reject(res.statusText)))
        .then((res) => {
          this.vehicles.push(res.data);
          this.modalVisible = false;
        })
        .catch(((err) => { console.log(err); }));
    },
    async getVehicles() {
      this.isLoading = true;
      setTimeout(async () => {
        const result = await fetch(vehiclesUrl, {
          headers: {
            authorization: `Bearer ${TEMP_TOKEN}`,
          },
        })
          .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
          .catch((err) => console.log(err))
          .finally(() => { this.isLoading = false; });
        this.vehicles = result.data;
      }, DEFAULT_REQUEST_DELAY);
    },
    async deleteVehicle(id: string) {
      return fetch(`${vehiclesUrl}/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${TEMP_TOKEN}`,
        },
      })
        .then((res) => res.json())
        .then(() => { this.handleDelete(id); })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getVehicles();
  },
});
</script>

<style scoped>
.blockWrapper{
  margin: 20px auto 0;
}
</style>

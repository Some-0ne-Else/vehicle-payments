<template>
  <main>
    <VehicleButton @click="handleOpenModal">Добавить ТС</VehicleButton>
    <VehicleModal v-model:visible="modalVisible" @modalOutsideClick="handleCloseModal">
      <FormVehicle @formSubmit="addVehicle" />
    </VehicleModal>
<div class="blockWrapper">
<VehiclesList :vehicles="vehicles" :isLoading="isVehiclesLoading" :isDeleting="isDeleting" @onDelete="deleteVehicle"/>
</div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormVehicle from '@/components/FormVehicle/Index.vue';
import VehiclesList from '@/components/VehiclesList/index.vue';
import { Vehicle } from '@/types/general';
import API from '@/api';
import { DEFAULT_REQUEST_DELAY, TEMP_TOKEN } from '../../constants/general';
import { vehiclesUrl } from '../../constants/routes';
import funcWithDelay from '../../helpers/general';

export default defineComponent({
  name: 'MainComponent',
  setup() {
    return {};
  },
  components: {
    FormVehicle,
    VehiclesList,
  },
  data(): { vehicles: Vehicle[], modalVisible: boolean, isVehiclesLoading: boolean, isDeleting: boolean } {
    return {
      vehicles: [],
      modalVisible: false,
      isVehiclesLoading: false,
      isDeleting: false,
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
      await funcWithDelay(() => {
        API.post({ url: vehiclesUrl, token: TEMP_TOKEN, data: vehicle })
          .then((res) => {
            this.vehicles.push(res.data);
            this.modalVisible = false;
          })
          .catch(((err) => { console.log(err); }));
      });
    },
    async getVehicles() {
      this.isVehiclesLoading = true;
      setTimeout(async () => {
        const result = await API.get({ url: vehiclesUrl, token: TEMP_TOKEN })
          .finally(() => { this.isVehiclesLoading = false; });
        this.vehicles = result.data;
      }, DEFAULT_REQUEST_DELAY);
    },
    async deleteVehicle(id: string) {
      this.isDeleting = true;
      await funcWithDelay(() => {
        API.delete({ url: `${vehiclesUrl}/${id}`, token: TEMP_TOKEN })
          .then(() => { this.handleDelete(id); })
          .catch((actionErr) => console.log(actionErr))
          .finally(() => { this.isDeleting = false; });
      });
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

<template>
  <form class="form" @submit="submit" @submit.prevent>
    <VehicleInput v-model="vehicle.title" placeholder="Название" required>Название*</VehicleInput>
    <div class="inputWrapper">
      <VehicleInput v-model="vehicle.manufacturer" placeholder="Производитель">Производитель</VehicleInput>
    </div>
    <div class="inputWrapper">
      <VehicleInput v-model="vehicle.model" placeholder="Модель" required>Модель*</VehicleInput>
    </div>
    <div class="inputWrapper">
      <VehicleInput v-model="vehicle.year" placeholder="Год производства" required>Год производства*</VehicleInput>
    </div>
    <div class="inputWrapper">
      <VehicleSelect :options="vehicleOptions" v-model="vehicle.type" @optionSelected="onSelect" required />
    </div>
    <div class="inputWrapper">
      <VehicleInput v-model="vehicle.comment" placeholder="Комментарий" required>Комментарий</VehicleInput>
    </div>
    <div class="inputWrapper">
      <VehicleInput v-model="vehicle.image" placeholder="Изображение(ссылка)">Изображение(ссылка)</VehicleInput>
    </div>
    <div class="buttonWrapper">
      <VehicleButton type="submit">Добавить</VehicleButton>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { EMPTY_VEHICLE, TEST_VEHICLE, vehicleOptions } from '@/constants/vehicles';

export default defineComponent({
  name: 'FormVehicle',
  data() {
    return {
      vehicle: TEST_VEHICLE,
      vehicleOptions,
    };
  },
  methods: {
    clearForm() {
      this.vehicle = EMPTY_VEHICLE;
    },
    submit() {
      this.$emit('formSubmit', this.vehicle);
      this.clearForm();
    },
    onSelect(value: string) {
      this.vehicle = { ...this.vehicle, type: value };
    },
  },
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.inputWrapper {
  margin-top: 12px;
}

.buttonWrapper {
  margin-top: 20px;
}
</style>

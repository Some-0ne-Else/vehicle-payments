<template>
  <div class="vehicle">
    <h1 class="vehicle__title">{{ vehicle.title }}</h1>
      <p class="vehicle__content">{{ `${vehicle.manufacturer} ${vehicle.model} ${vehicle.year}` }}</p>
      <div class="vehicle__image-wrapper"><img class="vehicle__image" v-bind:src=vehicle.image alt="Изображение ТС"/></div>
      <div>
      <p class="vehicle__text">{{ vehicle.type }}</p>
      <p class="vehicle__text" v-if=vehicle.comment>{{ vehicle.comment }}</p>
    </div>
      <VehicleButton @click.prevent="onDelete">Удалить</VehicleButton>
  </div>
</template>

<script lang="ts">
import { Vehicle } from '@/types/general';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VehicleItem',
  props: {
    vehicle: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onDelete(vehicle : Vehicle) {
      this.$emit('onDelete', vehicle._id);
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.vehicle{
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px;
}
.vehicle__title{
  font-size: 32px;
  margin: 0;
  padding: 0;
}
.vehicle__content{
  font-size: 24px;
}

.vehicle__text{
  font-size: 16px;
  margin: 8px 0 0 0;
}
.vehicle__text:last-child{
  margin-bottom: 8px;
}

.vehicle__image-wrapper{
max-width: 600px;
margin: 0 auto;
display: flex;
justify-content: center;
}

.vehicle__image{
  max-width: 300px;
  object-fit: contain;
}

</style>

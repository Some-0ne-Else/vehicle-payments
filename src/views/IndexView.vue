<template>
    <MainComponent/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainComponent from '@/components/MainComponent.vue';

export default defineComponent({
  name: 'IndexView',
  components: {
    MainComponent,
  },
});
</script>

<style scoped>
.wrapper{
  width: 80%;
  margin: 0 auto;
}
</style>

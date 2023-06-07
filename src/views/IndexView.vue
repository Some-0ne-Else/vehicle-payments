<template>
    <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Main from '@/components/Main/index.vue';

export default defineComponent({
  name: 'IndexView',
  components: {
    Main,
  },
});
</script>

<style scoped>
.wrapper{
  width: 80%;
  margin: 0 auto;
}
</style>

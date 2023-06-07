<template>
  <Login />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/components/Login/index.vue';

export default defineComponent({
  name: 'LoginView',
  components: {
    Login,
  },
});
</script>

<style scoped>
.wrapper{
width: 80%;
margin: 0 auto;
}
</style>

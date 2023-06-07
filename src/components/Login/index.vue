<template>
  <main class="main">
    <form class="form" @submit="submit" @submit.prevent>
    <VehicleInput v-model="form.login" placeholder="Логин" required>Логин</VehicleInput>
    <div class="inputWrapper">
      <VehicleInput v-model="form.password" placeholder="Пароль">Пароль</VehicleInput>
    </div>
      <VehicleButton class="form-button" type="submit">Войти</VehicleButton>
  </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainComponent',
  setup() {
    return {};
  },
  components: {
  },
  data(): { form:{ login: string, password: string}, isSending: boolean } {
    return {
      form: {
        login: '',
        password: '',
      },
      isSending: false,
    };
  },
  methods: {
    submit() {
      console.log('submit');
    },
  },
});
</script>

<style scoped>
.main{
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form{
  max-width: 500px;
}

.form-button{
  margin-top: 8px;
  width: 175px;
}
</style>

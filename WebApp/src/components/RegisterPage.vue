<script setup>
import { ref } from 'vue';
import { register } from '../userAuth/auth.js';

const username = ref('');
const email = ref('');
const password = ref('');

async function handleRegister() {
  try {
    const user = await register(email.value, password.value);
    alert(username.value + " erfolgreich registriert");
  } catch (error) {
    alert(error.message);
  }
}
</script>

<template>
  <div class="userApplicationForm">
    <form @submit.prevent="handleRegister">
      <h1>Registrieren</h1>
      <div class="inputLoginData">
        <input v-model="username" type="text" placeholder="Name" id="usernameregister" class="userApplicationFormInput" required>
      </div>
      <div class="inputLoginData">
        <input v-model="email" type="email" placeholder="E-Mail Adresse" id="mailRegister" class="userApplicationFormInput" required>
      </div>
      <div class="inputLoginData">
        <input v-model="password" type="password" placeholder="Passwort" id="passwordRegister" class="userApplicationFormInput" required>
      </div>
      <div id="loginButtonDiv">
        <button type="button" id="loginButton" @click="handleRegister()">Registrieren</button>
      </div>
    </form>
  </div>
</template>

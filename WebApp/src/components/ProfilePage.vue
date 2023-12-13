<script setup>
import { useUser } from '../userAuth/userStore.js';

const { userProfile } = useUser();
</script>

<template>
  <div>
    <p v-if="userProfile">Angemeldet als: {{userProfile.username }}</p>
    <p v-else>Nicht angemeldet</p>
  </div>
</template>

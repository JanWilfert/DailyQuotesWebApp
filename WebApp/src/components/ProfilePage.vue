<script setup>
import { useUser } from '../userAuth/userStore.js';

const { currentUser } = useUser();
</script>

<template>
  <div>
    <p v-if="currentUser">Angemeldet als: {{currentUser.email }}</p>
    <p v-else>Nicht angemeldet</p>
  </div>
</template>

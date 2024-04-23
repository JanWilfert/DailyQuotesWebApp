<script setup>
import { useUser } from '../userAuth/userStore.js';

const { userProfile } = useUser();
</script>

<template>
  <div>
    <p v-if="userProfile">Signed in as: {{ userProfile.username }}</p>
    <p v-else>Not signed in</p>
  </div>
</template>

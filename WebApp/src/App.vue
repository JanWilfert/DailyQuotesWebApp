<script setup>
//import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import MainPage from './components/MainPage.vue'
import ProfilePage from './components/ProfilePage.vue'
import FriendsPage from './components/FriendsPage.vue'
import SettingsPage from './components/SettingsPage.vue'
import SignOutPage from './components/SignOutPage.vue'
import LoginPage from './components/LoginPage.vue'
import RegisterPage from './components/RegisterPage.vue'
import { ref } from 'vue'

const currentComponent =  ref ("mainPage")
const showDropDown = ref (false)
const imgSrcProfile = ref ("./src/assets/defaultUserIcon.webp")
const imgSrcLogo = "./src/assets/DailyQuotes_Logo.png"

const components = {
  "mainPage": MainPage,
  "profilePage": ProfilePage,
  "friendsPage": FriendsPage,
  "settingsPage": SettingsPage,
  "signOutPage": SignOutPage,
  "loginPage": LoginPage,
  "registerPage": RegisterPage
}

function toggleDropDown (){
  showDropDown.value = !showDropDown.value;
}

function onClickChild(value){
  imgSrcProfile.value = URL.createObjectURL(value); 
}
</script>

<template>
  <main>
    <header>
      <div class="logo">
          <img v-on:click="currentComponent='mainPage'" :src="imgSrcLogo">
      </div>
      <div class="profile" >
          <img v-on:click="toggleDropDown" :src="imgSrcProfile">
          <div id="dropDownMenu" v-if="showDropDown">
              <a v-on:click="toggleDropDown(), currentComponent = 'profilePage'">Profile</a>
              <a v-on:click="toggleDropDown(), currentComponent = 'friendsPage'">Friends</a>
              <a v-on:click="toggleDropDown(), currentComponent = 'settingsPage'">Settings</a>
              <a v-on:click="toggleDropDown(), currentComponent = 'signOutPage'">Sign out</a>
              <a v-on:click="toggleDropDown(), currentComponent = 'loginPage'">Login</a>
          </div>
      </div>
  </header>
  <component :is="components[currentComponent]" @showPic="onClickChild" @goRegisterPage="currentComponent='registerPage'"></component>
  </main>
</template>

<!--<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
-->
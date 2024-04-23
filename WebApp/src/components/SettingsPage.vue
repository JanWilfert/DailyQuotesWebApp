<script setup>
import { ref } from 'vue'

   function clickButton() {
    ref (pictureUpload.click());
}

</script>
<template>
    <h1 id="settingsHeading">Settings</h1>
        <div id="profilePicture">
            <h2>Change your profile picture</h2>
            <form method="post">
                <label id="pictureUploadLabel">Select profile picture.</label>
                <input id="pictureUpload" type="file" accept=".jpg, .png" ref="pictureUpload" v-on:change="$emit('showPic', $event.target.files[0])">
                <button v-on:click="clickButton" type="button">Change</button>
            </form>
        </div>
</template>
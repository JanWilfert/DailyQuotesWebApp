<script setup>
import { ref } from 'vue'

   function clickButton() {
    ref (pictureUpload.click());
}

</script>
<template>
    <h1 id="settingsHeading">Einstellungen</h1>
        <div id="profilePicture">
            <h2>Ändere dein Profilbild</h2>
            <form method="post">
                <label id="pictureUploadLabel">Wählen Sie ein Bild von ihrem PC aus.</label>
                <input id="pictureUpload" type="file" accept=".jpg, .png" ref="pictureUpload" v-on:change="$emit('test', $event.target.files[0])">
                <button v-on:click="clickButton" type="button">Ändern</button>
            </form>
        </div>
</template>
<script setup>
import { ref } from 'vue'

   function clickButton() {
    ref (pictureUpload.click());
}
function changeProfilPic(event) {
    const file = event.target.files[0]; //Repräsentiert erste ausgewählte Datei mit [0], 
    //da es immer als Liste übergeben wird (auch wenns nur ein ist)
    if (file) {
        imgSrcProfile = URL.createObjectURL(file); //Erstellt URL dazu, um Img im Browser anzuzeigen
    }
}
</script>
<template>
    <h1 id="settingsHeading">Einstellungen</h1>
        <div id="profilePicture">
            <h2>Ändere dein Profilbild</h2>
            <form method="post">
                <label id="pictureUploadLabel">Wählen Sie ein Bild von ihrem PC aus.</label>
                <input id="pictureUpload" type="file" accept=".jpg, .png" ref="pictureUpload" v-on:change="changeProfilPic">
                <button v-on:click="clickButton" type="button">Ändern</button>
            </form>
        </div>
</template>
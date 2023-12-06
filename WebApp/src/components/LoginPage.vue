<script setup>

</script>

<template>
    <div class="userApplicationForm">
        <form action="/submit-your-login-form" method="post">
            <h1>Login</h1>
            <div id="inputAndLinks">
                <div class="inputLoginData">
                    <input type="text" placeholder="E-Mail Adresse" id="mail" class="userApplicationFormInput"
                        name="username" required>
                </div>
                <div class="inputLoginData">
                    <input type="password" placeholder="Passwort" id="password" class="userApplicationFormInput"
                        name="password" required>
                </div>
                <div class="loginFormLinks">
                    <p id="forgotPassword">Passwort vergessen?</p>
                    <p id="noAccount" v-on:click="$emit('goRegisterPage')">Noch kein Konto?</p>
                </div>
            </div>

            <div id="loginButtonDiv">
                <button type="submit" id="loginButton">Anmelden</button>
            </div>

        </form>
    </div>
</template>
<!--
<style>
/* Hauptcontainer für das Formular */
.userApplicationForm {
    background-color: red; /* Ersetzen Sie dies durch eine tatsächliche Farbe, falls $fourthColor nicht definiert ist */
    width: 400px; /* Breite des Formulars */
    margin: auto; /* Zentriert das Formular horizontal */
    padding: 20px; /* Innerer Abstand */
    border-radius: 10px; /* Abgerundete Ecken */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Leichter Schatten für Tiefe */
    display: flex;
    flex-direction: column; /* Elemente vertikal anordnen */
    align-items: center; /* Elemente horizontal zentrieren */
}

/* Stil für die Eingabefelder */
.userApplicationFormInput {
    width: 100%; /* Volle Breite innerhalb des Containers */
    padding: 10px; /* Innerer Abstand für bessere Lesbarkeit */
    margin: 10px 0; /* Abstand oben und unten */
    border-radius: 10px;
    border: 1px solid black;
    box-sizing: border-box; /* Stellt sicher, dass Padding und Border innerhalb der Breite enthalten sind */
}

/* Stil für den Button */
.userApplicationForm button {
    width: 100%; /* Button nimmt die volle Breite ein */
    padding: 10px; /* Innerer Abstand */
    margin-top: 20px; /* Abstand nach oben */
    border-radius: 10px;
    border: none; /* Kein Rand */
    background-color: #5cb85c; /* Hintergrundfarbe */
    color: white; /* Textfarbe */
    cursor: pointer; /* Mauszeiger-Stil */
}

/* Responsive Design */
@media (max-width: 480px) {
    .userApplicationForm {
        width: 90%; /* Schmaler in kleinen Bildschirmen */
    }
}
</style>

-->
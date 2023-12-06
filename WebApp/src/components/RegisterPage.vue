<script setup>

</script>

<template>
    <div class="userApplicationForm">
        <form action="/submit-your-login-form" method="post">
            <h1>Login</h1>
            <div class="inputLoginData">
                <input type="text" placeholder="Name" id="usernameregister" class="userApplicationFormInput" name="username" required>
            </div>
            <div class="inputLoginData">
                <input type="text" placeholder="E-Mail Adresse" id="mailRegister" class="userApplicationFormInput" name="mail" required>
            </div>
            <div class="inputLoginData">
                <input type="password" placeholder="Passwort" id="passwordRegister" class="userApplicationFormInput" name="password" required>
            </div>
            <div id="loginButtonDiv">
                <button type="submit" id="loginButton">Registieren</button>
            </div>
            
        </form>
    </div>
</template>
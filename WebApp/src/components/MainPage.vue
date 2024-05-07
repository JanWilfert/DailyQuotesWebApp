<script setup>
    import { ref, onMounted } from 'vue';
    import html2canvas from 'html2canvas';
    import { useUser } from '../userAuth/userStore.js';
    import { getQuotes } from '../quote/quotes.js';

    let lastQuotes = ref([]);
    let showAllQuotes = ref(false);
    let isLoading = ref(true);

    onMounted(async () => {
        const { userProfile, userLoaded } = useUser();
        await userLoaded;
        if(!userProfile.value) {
            isLoading.value = false;
            return;
        }
        lastQuotes.value = await getQuotes(userProfile.value.lastQuotes);
        isLoading.value = false;
    });

    async function exportElementAsPNG(elementId) {
        console.log("hat funktioniert");
        const element = document.getElementById(elementId);

        // HTML-Element in Canvas umwandeln
        const canvas = await html2canvas(element);

        // Canvas in PNG umwandeln
        const image = canvas.toDataURL("image/png");

        const link = document.createElement('a');
        link.href = image;
        link.download = 'exported-quote.png';
        link.click();
    }

    function viewAllToggle() {
        if(showAllQuotes.value) {
            showAllQuotes.value = false;
        }
        else{
            showAllQuotes.value = true;
        }
    }
</script>

<template>
    <div class="quoteBox">
        <h1>Quote of the Day!</h1>
        <div id="quoteOfTheDay" class="quote">
            <div id="quoteText">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                takimata sanctus est Lorem ipsum dolor sit amet.
            </div>
            <div id="quoteAuthor">
                ~Max Mustermann
            </div>
        </div>
        <div id="quoteOfTheDayButtons" class="quoteButtons">
            <button v-on:click="() => exportElementAsPNG('quoteOfTheDay')">Share</button>
            <button>Save</button>
        </div>
    </div>
        
    <div id="lastQuotes" class="quoteBox">
        <h1>Last Quotes</h1>
        <div v-if="isLoading">Loading...</div>
        <div v-else v-for="(quote, index) in (showAllQuotes ? lastQuotes : lastQuotes.slice(0, 2))" :key="index" class="quote">
            <div :id="`lastQuote${index}Text`" class="quoteText">
                {{ quote.quote }}
            </div>
            <div :id="`lastQuote${index}Author`" class="author">
                ~author
            </div>
        </div>
        <div id="lastQuotesButton" class="quoteButtons">
            <button v-on:click="viewAllToggle">{{ showAllQuotes ? 'View only last 2' : 'View All' }}</button>
        </div>
    </div>
</template>
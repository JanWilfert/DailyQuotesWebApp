<script setup>
    import html2canvas from 'html2canvas';

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
</script>
<template>
    <div class="quoteBox">
            <h1>Quote of the Day!</h1>
            <div class="quote">
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
            <div id="lastQuote1" class="quote">
                <div id="lastQuote1Text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                    takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
                <div id="lastQuote1Author" class="author">
                    ~Max Mustermann
                </div>
            </div>
            <div id="lastQuote2" class="quote">
                <div id="lastQuote2Text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                    takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
                <div id="lastQuote2Author" class="author">
                    ~Max Mustermann
                </div>
            </div> 
            <div id="lastQuotesButton" class="quoteButtons">
                <button>View All</button>
            </div>
        </div>
</template>
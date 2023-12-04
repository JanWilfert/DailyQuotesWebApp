<script setup>
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
                <button>Share</button>
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
                <button v-on:click="test">View All</button>
            </div>
        </div>
</template>
<template>
    <div class="grid">
        <single-quote :id="quote.id"
                      :key="quote.id"
                      v-for="quote in quotes">{{quote.text}}
        </single-quote>
<!--        @click.native="deleteQuote(index)" -->
    </div>
</template>

<script>
    import {DataStore} from '../main';
    import SingleQuote from './SingleQuote';

    export default {
        name: "QuoteGrid",
        data() {
            return {
                quotes: DataStore.quotes,
            }
        },
        methods: {},
        components: {
            SingleQuote,
        },
    }
</script>

<style scoped>
    .grid {
        border: solid 1px #cccccc;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 5px;
    }


</style>
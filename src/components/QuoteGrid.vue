<template>
    <div class="grid">
        <ul>
            <li v-for="quote in quotes" :key="quote.id">
                <single-quote :id="quote.id">{{quote.text}}</single-quote>
            </li>
        </ul>
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
        methods: {

        },
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

    li {
        display: inline-block;
    }
</style>
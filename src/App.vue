<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <counter></counter>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <new-quote></new-quote>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <quote-grid></quote-grid>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="alert alert-info" role="alert">
                    Click on the quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter';
    import NewQuote from './components/NewQuote';
    import QuoteGrid from './components/QuoteGrid';

    export default {
        name: 'app',
        components: {
            Counter,
            NewQuote,
            QuoteGrid,
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

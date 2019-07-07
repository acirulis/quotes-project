<template>
    <div @click="removeQuote">id: {{id}}
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
    import {DataStore} from "../main";

    export default {
        name: "SingleQuote",
        props: {
            id: Number,
        },
        methods: {
            removeQuote() {
                DataStore.removeQuote(this.id);
            },
        },
    }
</script>

<style scoped>
    div {
        border: solid 1px #42b983;
        margin: 8px;
        padding: 5px;
    }
</style>
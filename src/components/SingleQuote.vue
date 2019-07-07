<template>
    <div @click="removeQuote" class="card my-card">
        <div class="card-body">
            <h5 class="card-title">
                id: {{id}}
            </h5>
            <div class="card-text">
                <slot></slot>
            </div>
        </div>
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
    .my-card {
        width: 14rem;
        display: inline-block;
        margin: 4px;
        cursor: pointer;
    }
    .my-card:hover {
        background-color: lightpink;
    }
</style>
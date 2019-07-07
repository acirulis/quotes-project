<template>
    <div>
        <textarea class="mt-3 mb-4" v-model="newText"></textarea>
        <button class="btn btn-success" @click="addNew">Add New</button>
    </div>
</template>

<script>
    import {DataStore} from '../main';
    export default {
        name: "NewQuote",
        data() {
            return {
                newText: '',
            }
        },
        methods: {
            addNew: function () {
                if (this.newText.length <= 0)
                    return false;
                let added = DataStore.addQuote(this.newText);
                if (added) {
                    this.newText = '';
                }
            },
        },
    }
</script>

<style scoped>
    textarea {
        display: block;
        width: 400px;
    }

</style>
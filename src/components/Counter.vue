<template>
    <div class="mt-3 mb-3">
        <h3>Quotes added</h3>
        <div class="progress">
            <div :aria-valuenow="counterWidth" :style="{width: counterWidth +'%'}" aria-valuemax="100" aria-valuemin="0"
                 class="progress-bar"
                 role="progressbar"> {{currentVal}} / 10
            </div>
        </div>
    </div>
</template>

<script>
    import {DataStore} from '../main.js';
    export default {
        name: "Counter",
        data: function () {
            return {
                currentVal: DataStore.quotes.length,
            }
        },
        computed: {
          'counterWidth': function () {
              return this.currentVal * 10;
          }
        },
        created() {
            DataStore.$on('updateCounter', (c) => {
                this.currentVal = c;
            });
        }
    }
</script>

<style scoped>

</style>
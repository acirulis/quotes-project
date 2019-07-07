import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

export const DataStore = new Vue({
        data: {
            quotes: [
                {id: 1, text: 'Demo quote'},
                {id: 2, text: 'Demo quote 2'},
            ],

        },
        methods: {
            addQuote(text) {
                if (this.quotes.length >= 10) {
                    alert('Please delete some quotes!');
                    return false;
                }
                //lets find latest id
                var nid = 0;
                this.quotes.forEach(function (el) {
                    if (el.id > nid) {
                        nid = el.id
                    }
                });
                this.quotes.push({id: ++nid, text: text});
                this.$emit('updateCounter', this.quotes.length);
                return true;
            },

            removeQuote(qid) {
                this.quotes.forEach(function (el, ix, arr) {
                    if (el.id == qid) {
                        arr.splice(ix, 1);
                        this.$emit('updateCounter', arr.length);
                    }
                }, this)
            },

        }
    }
);

new Vue({
    render: h => h(App),
}).$mount('#app');

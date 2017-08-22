import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './router/App.vue'
import store from './router/counter.js'

Vue.use(Vuex)
Vue.component('watch', require('./router/watch.vue'))

Vue.config.productionTip = false

const defaultBackgroundColor = '#86bbff'

Vue.directive('focus', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
        // Focus the element
        el.focus()
    }
})

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})

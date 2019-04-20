import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Deadline from './deadline'

export default new Vuex.Store({
    modules: {
        Deadline
    }
});


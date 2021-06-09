import Vue from 'vue';
import Vuex from 'vuex';
// 模块
import common from '@/store/modules/common';
import sell from '@/store/modules/sell';
import consumer from '@/store/modules/consumer';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        common,
        sell,
        consumer
    }
});

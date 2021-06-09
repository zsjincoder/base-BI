import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import plugins from '@/plugins';

import 'echarts-liquidfill';

import '@/assets/css/index.less';

store.dispatch('startNumber').then(r => {});

Vue.use(plugins);

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

import Title from '@components/common/Title';
import NumberChange from '@components/common/NumberChange';

export default {
    install(Vue) {
        Vue.component('Title', Title);
        Vue.component('NumberChange', NumberChange);
    }
};

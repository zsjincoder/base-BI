import iviewUi from '@/plugins/iview_ui';
import svgIcon from './svg_icon/index.js';
import component from '@/plugins/component';

const plugins = [
    iviewUi,
    svgIcon,
    component
];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
        });
    }
};

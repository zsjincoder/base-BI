import SvgIcon from '@/plugins/svg_icon/Index.vue';

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('@/assets/svg', false, /\.svg$/);
requireAll(req);

export default {
    install(Vue) {
        Vue.component(SvgIcon.name, SvgIcon);
    }
};

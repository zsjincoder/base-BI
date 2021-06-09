import {
    Button,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Select,
    Option,
    Progress
} from 'view-design';

export default {
    install(Vue) {
        Vue.component('Progress', Progress);
        Vue.component('Button', Button);
        Vue.component('Dropdown', Dropdown);
        Vue.component('DropdownMenu', DropdownMenu);
        Vue.component('DropdownItem', DropdownItem);
        Vue.component('Select', Select);
        Vue.component('Option', Option);
    }
};

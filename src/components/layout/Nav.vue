<!-- 导航 -->
<template>
    <ul class="nav">
        <li v-for="(item, index) in navList"
            :key="item.path"
            :class="{ active: index === navActive }"
            @click="handleClick(item, index)">
            {{ item.meta.title }}
        </li>
    </ul>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import debounce from 'lodash/debounce';

export default {
    name: 'Nav',
    computed: {
        ...mapGetters({
            navActive: 'getNavActive'
        }),
        /**
         * 导航列表
         */
        navList() {
            return this.$router.options.routes.find(router => router.name === 'home')?.children || [];
        },
        setChartData() {
            return debounce(this.setData, 300);
        }
    },
    created() {
        // 统一更新数据
        this.unifiedUpdateData();
    },
    methods: {
        ...mapMutations({
            setNavActive: 'setNavActive'
        }),
        ...mapActions({
            unifiedUpdateData: 'unifiedUpdateData'
        }),
        handleClick(item, index) {
            if (this.navActive === index) return;
            this.$router.push({ name: item.name });
            this.setNavActive(index);
            this.setChartData();
        },
        setData() {
            this.unifiedUpdateData();
        }
    }
};
</script>

<style lang="less"
       scoped>
.nav {
    display: flex;

    li {
        margin-left: -3px;
        width: 130px;
        height: 33px;
        font-size: 18px;
        line-height: 33px;
        text-align: center;
        color: #ffffff;
        background-image: url("../../assets/img/nav.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;

        &:nth-of-type(1) {
            margin-left: 0;
        }

        &.active {
            background-image: url("../../assets/img/nav_active.png");
        }
    }
}
</style>

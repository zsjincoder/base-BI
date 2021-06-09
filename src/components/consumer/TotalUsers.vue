<template>
    <div>
        <Title title="用户总量"/>
        <div class="number">
            <span>
                <NumberChange :num="num + 651212"/>
            </span>
            <span>人</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'TotalUsers',
    computed: {
        ...mapGetters({
            num: 'getNum'
        })
    }
};
</script>

<style scoped
       lang="less">
.number {
    width: 100%;
    display: flex;
    span {
        display: block;
        font-size: 87px;
        line-height: 139px;
        color: #69D8F7;
    }

    span:nth-of-type(2) {
        font-size: 14px;
        margin-left: 15px;
        line-height: 165px;
        color: #FFFFFF;
        opacity: 1;
    }
}
</style>

<template>
    <div>
        <Title :title="`${type === 'today' ? '今日' : '昨日'}新增会员`"/>
        <div style="margin-left: 15px">
            <div class="add-number"
                 :style="numberStyle">
                <NumberChange :num="sexNum"/>
                <span>人</span>
            </div>
            <img class="add-img"
                 :src="img"
                 alt="加载失败">
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'NewMembersAddedYesterday',
    props: {
        type: {
            type: String,
            require: true
        }
    },
    computed: {
        ...mapGetters({
            num: 'getNum'
        }),
        img() {
            const { type } = this;
            return type === 'today' ? require('@/assets/img/consumer/add-2.png') : require('@/assets/img/consumer/add-1.png');
        },
        numberStyle() {
            const { type } = this;
            return {
                color: type === 'today' ? '#FD7817' : '#16CEB9'
            };
        },
        sexNum() {
            const { type, num } = this;
            const number = type === 'today' ? 163080 + num : 120254;
            return number;
        }
    },
    methods: {}
};
</script>

<style scoped
       lang="less">
    .add-number {
        display: flex;
        font-size: 30px;
        height: 35px;

        span {
            display: block;
            box-sizing: border-box;
        }
        span:nth-of-type(2) {
            display: inline-block;
            margin-top: 15px;
            margin-left: 10px;
            font-size: 14px;
        }
    }

    .add-img {
        width: 127px;
        height: 18px;
    }
</style>

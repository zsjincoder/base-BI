<!-- 店铺业绩 -->
<template>
    <div class="store-performance">
        <Title title="店铺业绩"/>
        <ul class="charts">
            <li v-for="item in performanceList"
                :key="item.label"
                class="charts-item">
                <div class="left">
                    <span class="name"> {{ item.label }}</span>
                    <span class="money"> ￥{{ item.money + getNum }}</span>
                </div>
                <Liquidfill :width="111"
                            :height="111"
                            :color="item.color"
                            :proportion="item.proportion"
                            :show-label="false"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Liquidfill from '@components/common/Liquidfill';

export default {
    name: 'StorePerformance',
    components: {
        Liquidfill
    },
    computed: {
        getNum() {
            return this.$store.getters.getNum;
        },
        /**
         * 业绩 数据
         */
        performanceList() {
            return [{
                label: '江北五江路店',
                money: 1770390.6,
                proportion: 0.5,
                color: '#0041BA'
            }, {
                label: '南岸台湾花园店',
                money: 1239908.1,
                proportion: 0.42,
                color: '#00BA64'
            }, {
                label: '大渡口店',
                money: 872340,
                proportion: 0.3,
                color: '#96214E'
            }, {
                label: '沙坪坝石碾盘店',
                money: 587559,
                proportion: 0.15,
                color: '#7507BA'
            }];
        }
    }
};
</script>

<style lang="less"
       scoped>
.store-performance {
    .charts {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .charts-item {
            display: flex;
            align-items: center;
            margin-top: 32px;
            width: 50%;

            .left {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                color: #ffffff;

                .name {
                    overflow: hidden;
                    width: 110px;
                    font-size: 14px;
                    white-space: pre;
                    text-overflow: ellipsis;
                }

                .money {
                    font-size: 22px;
                }
            }

            &:nth-of-type(-n+2) {
                margin-top: 37px;
            }
        }
    }
}
</style>

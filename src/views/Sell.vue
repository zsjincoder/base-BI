<!-- 经营销售 -->
<template>
    <div class="sell page">
<!--        <Title title="实时营收数据"/>-->
        <Layout>
            <template v-slot:left>
                <RealRevenueData :list="realRevenueData"/>
                <ConsumeMoneyDistribute />
            </template>
            <template v-slot:middle>
                <Revenue :revenue-data="revenueData"/>
                <ActivityTable :head-list="orderHead"
                               :table-data="orderData"/>
            </template>
            <template v-slot:right>
                <BrandSalesRatio :scale="brandSalesRatioData"/>
                <SalesRevenueRatio :proportion-list="proportionList"/>
                <MerchandiseSalesRank :list="rankData"/>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from '@components/layout/Layout';
import RealRevenueData from '@components/sell/RealRevenueData';
import BrandSalesRatio from '@components/sell/BrandSalesRatio';
import ConsumeMoneyDistribute from '@components/sell/ConsumeMoneyDistribute';
import Revenue from '@components/sell/Revenue';
import ActivityTable from '@components/activity/activityTable';
import SalesRevenueRatio from '@components/sell/SalesRevenueRatio';
import MerchandiseSalesRank from '@components/sell/MerchandiseSalesRank';

export default {
    name: 'Sell',
    components: {
        Layout,
        RealRevenueData,
        BrandSalesRatio,
        ConsumeMoneyDistribute,
        Revenue,
        ActivityTable,
        SalesRevenueRatio,
        MerchandiseSalesRank
    },
    data() {
        return {

        };
    },
    computed: {
        getNum() {
            return this.$store.getters.getNum;
        },
        /**
         * 销售收入占比list
         */
        proportionList() {
            return [{
                label: '酒类收入',
                money: '5.29',
                proportion: 0.1585,
                color: '#0041ba'
            }, {
                label: '烟品收入',
                money: '28.08',
                proportion: 0.8415,
                color: '#00ba64'
            }, {
                label: '其他非烟',
                money: '7.8',
                proportion: 0.189,
                color: '#96214e'
            }, {
                label: '其他收入',
                money: '0',
                proportion: 0,
                color: '#7507Ba'
            }];
        },
        /**
         * BrandSalesRatio
         */
        brandSalesRatioData() {
            return [{
                name: '茅台酒',
                value: 0.8
            }, {
                name: '其他非烟',
                value: 0.19
            }, {
                name: '天子烟品',
                value: 0.5
            }, {
                name: '其他品牌',
                value: 8.7
            }];
        },
        /**
         * 实时营收 数据
         */
        realRevenueData() {
            return [
                0,
                0,
                0,
                0,
                1.88,
                8.32,
                7.17,
                4.54,
                6.32,
                2.89
            ];
        },
        // 营收数据
        revenueData() {
            return {
                // 今日
                today: 153733.1 + this.getNum * 100,
                yesterday: 475685.8,
                thisWeek: 1896562.75 + this.getNum
            };
        },
        /**
         * 订单表格 表头
         */
        orderHead() {
            return [{
                title: '商品名称',
                key: 'name'
            }, {
                title: '订单编号',
                key: 'number',
                width: 100
            }, {
                title: '订单金额',
                key: 'money',
                width: 100
            }, {
                title: '购买人ID',
                key: 'userId',
                width: 100
            }, {
                title: '下单时间',
                key: 'time'
            }];
        },
        /**
         * 订单表格 数据
         */
        orderData() {
            return [{
                name: '飞天 53%vol 500ml 贵州茅台酒',
                number: '217289',
                money: '¥2998.00',
                userId: '36573',
                time: '2021/3/24 14:38:46'
            }, {
                name: '飞天 53%vol 500ml 贵州茅台酒',
                number: '217279',
                money: '¥2998.00',
                userId: '32265',
                time: '2021/3/24 14:35:12'
            }, {
                name: '飞天 53%vol 500ml 贵州茅台酒',
                number: '217275',
                money: '¥2998.00',
                userId: '34673',
                time: '2021/3/24 14:35:00'
            }, {
                name: '飞天 53%vol 500ml 贵州茅台酒',
                number: '217274',
                money: '¥2998.00',
                userId: '34676',
                time: '2021/3/24 14:34:29'
            }, {
                name: '飞天 53%vol 500ml 贵州茅台酒',
                number: '217272',
                money: '¥2998.00',
                userId: '44269',
                time: '2021/3/24 14:34:21'
            }];
        },
        /**
         * 商品经销商排名 数据
         */
        rankData() {
            return [{
                label: '中华（硬）',
                money: 33600,
                proportion: 56,
                sequential: -46
            }, {
                label: '飞天 53%vol 500ml 贵州茅台酒',
                money: 27000,
                proportion: 50,
                sequential: -25
            }, {
                label: '天下奇坛',
                money: 17100,
                proportion: 30,
                sequential: -25
            }];
        }
    }
};
</script>

<style lang="less"
       scoped>
.sell {
    background: url("../assets/img/sell/sell_bg.png") no-repeat center;
    background-size: 100% 100%;
}
</style>

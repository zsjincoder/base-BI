<!-- 销售收入占比 -->
<template>
    <div class="sales-revenue-ratio">
        <Title title="销售收入占比"/>
        <ul class="box">
            <li v-for="item in proportionList"
                :key="item.label"
                class="item">
                <Liquidfill :proportion="item.proportion"
                            :color="item.color"
                            :width="111"
                            :height="111"/>
                <div class="bottom">
                    <div class="name">{{ item.label }}</div>
                    <div class="money">￥{{ item.money }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Title from '@components/common/Title';
import Liquidfill from '@components/common/Liquidfill';

export default {
    name: 'SalesRevenueRatio',
    components: {
        Title,
        Liquidfill
    },
    props: {
        proportionList: {
            type: Array,
            default: () => ([])
        }
    }
};
</script>

<style lang="less"
       scoped>
.sales-revenue-ratio {
    font-family: 'trends';

    .box {
        display: flex;

        .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 24px;
            padding-left: 10px;
            width: 50%;

            .bottom {
                margin-top: 10px;

                .name {
                    font-size: 12px;
                    color: #ffffff;
                }

                .num {
                    font-size: 9px;
                    color: #75c3ff;
                }
            }
        }
    }
}
</style>

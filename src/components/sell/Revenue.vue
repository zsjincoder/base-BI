<!-- 中间 -- 营收 -->
<template>
    <div class="revenue">
        <ul class="list">
            <li v-for="item in revenuelist"
                :key="item.name"
                class="list-item">
                <Title :title="item.label"/>
                <div class="money">
<!--                    <span class="num">{{ revenueData[item.name] }}</span>-->
                    <number-change class="num"
                                   :num="revenueData[item.name]" />
                    <span class="util">元</span>
                </div>
            </li>
        </ul>
        <div class="map">
            <MapCharts style="width: 600px; height: 308px;"/>
        </div>
    </div>
</template>

<script>
import Title from '@components/common/Title';
import MapCharts from '@components/outLet/mapCharts';

export default {
    name: 'Revenue',
    components: {
        Title,
        MapCharts
    },
    props: {
        revenueData: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        /**
         * 营收数据
         */
        revenuelist() {
            return [{
                name: 'today',
                label: '今日营收'
            }, {
                name: 'yesterday',
                label: '昨日营收'
            }, {
                name: 'thisWeek',
                label: '本周营收'
            }];
        }
    }
};
</script>

<style lang="less"
       scoped>
.revenue {
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;

    .list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: 'trends';

        .money {
            .num {
                font-size: 36px;
                color: #69d8f7;
            }

            .util {
                margin-left: -6px;
                font-size: 15px;
                color: #ffffff;
            }
        }
    }
}
</style>

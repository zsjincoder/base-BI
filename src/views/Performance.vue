<!-- 员工绩效 -->
<template>
    <div class="bg page">
        <Layout>
            <template v-slot:left>
                <div>
                    <Title title="事务分类"/>
                    <pie-charts class="pieWH" :pieData="pieData"></pie-charts>
                </div>
                <div>
                    <Title title="7日事务对比"/>
                    <bar-charts :barData="dataList" :legend="true" class="barWH"></bar-charts>
                </div>
            </template>
            <template v-slot:middle>
                <div class="centerOne">
                    <div class="centerTitle">
                        <div class="mapContent">
                            <Title title="今日待办"/>
                            <div class="mapPrice">
                                {{ 156 + getNum }}<span>件</span>
                            </div>
                        </div>
                        <div class="mapContent">
                            <Title title="今天完成"/>
                            <div class="mapPrice">
                                {{ 88 + getNum }}<span>件</span>
                            </div>
                        </div>
                        <div class="mapContent">
                            <Title title="昨日完成"/>
                            <div class="mapPrice">
                                {{ 201 }}<span>件</span>
                            </div>
                        </div>
                    </div>
                    <map-charts class="mapWH"></map-charts>
                </div>
                <div class="centerTwo">
                    <Title title="投诉事件"/>
                    <ActivityTable :head-list="complaintHead"
                                   :table-data="complaintData"/>
                </div>
            </template>
            <template v-slot:right>
                <StorePerformance />
                <div class="performance-rank">
                    <Title title="绩效排名"/>
                    <rank-charts class="rankWH"
                                 :table-data="rankList"></rank-charts>
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from '@components/layout/Layout';
import BarCharts from '@components/outLet/barCharts';
import PieCharts from '@components/performance/pieCharts';
import MapCharts from '@components/outLet/mapCharts';
import ActivityTable from '@components/activity/activityTable';
import StorePerformance from '@components/performance/StorePerformance';
import RankCharts from '@components/common/rankCharts';
import { randomDataPeriod } from '@/utils';

export default {
    name: 'performance',
    components: {
        Layout,
        BarCharts,
        PieCharts,
        MapCharts,
        ActivityTable,
        StorePerformance,
        RankCharts
    },
    data() {
        return {
            barData: [{
                name: '未完成',
                data: [120, 800, 100, 440, 534, 690, 600]
            },
            {
                name: '已完成',
                data: [220, 500, 400, 640, 134, 500, 600]
            }],
            pieData: [{
                name: '投诉处理',
                value: 20
            }, {
                name: '党建事务',
                value: 24
            }, {
                name: '行政事务',
                value: 17
            }, {
                name: '物流仓储',
                value: 35
            }, {
                name: '销售回访',
                value: 25
            }, {
                name: '其他',
                value: 13
            }]
        };
    },
    computed: {
        getNum() {
            return this.$store.getters.getNum;
        },
        dataList() {
            return randomDataPeriod(7, [200, 800], ['已完成', '未完成']);
        },
        /**
         * 购房表格 表头
         */
        complaintHead() {
            return [{
                title: '投诉主题',
                key: 'theme'
            }, {
                title: '被投诉人',
                key: 'byComplainant'
            }, {
                title: '投诉人ID',
                key: 'complainant'
            }, {
                title: '投诉时间',
                key: 'time'
            }];
        },
        /**
         * 购房表格 数据
         */
        complaintData() {
            return [{
                theme: '包装破损',
                byComplainant: '李民浩',
                complainant: '雾都小花',
                time: '2021-01-01 12:22:32'
            }, {
                theme: '包装破损',
                byComplainant: '李民浩',
                complainant: '雾都小花',
                time: '2021-01-01 12:22:32'
            }, {
                theme: '包装破损',
                byComplainant: '李民浩',
                complainant: '雾都小花',
                time: '2021-01-01 12:22:32'
            }, {
                theme: '包装破损',
                byComplainant: '李民浩',
                complainant: '雾都小花',
                time: '2021-01-01 12:22:32'
            }];
        },
        /**
         * 绩效排名 数据
         */
        rankList() {
            return [{
                name: '李伟',
                percentage: 95,
                sum: '24214 分'
            }, {
                name: '李伟',
                percentage: 75,
                sum: '25214 分'
            }, {
                name: '李伟',
                percentage: 55,
                sum: '21214 分'
            }, {
                name: '李伟',
                percentage: 35,
                sum: '14214 分'
            }];
        }
    }
};
</script>

<style lang="less"
       scoped>
.bg {
    background: url("../assets/outLet/bg.png") no-repeat;
    background-size: 100% 100%;

    .layout {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .pieWH {
        width: 100%;
        height: 300px;
    }

    .barWH {
        width: 100%;
        height: 250px;
    }

    .centerOne {
        position: relative;

        .centerTitle {
            display: grid;
            grid-template-columns: repeat(3, 150px);
            position: absolute;
            top: 0;
            left: 0;

            .mapContent {
                .mapPrice {
                    font-size: 52px;
                    color: #69d8f7;

                    span {
                        font-size: 15px;
                        color: #ffffff;
                    }
                }
            }
        }

        .mapWH {
            width: 100%;
            height: 370px;
        }
    }

    .performance-rank {
        margin-top: 20px;
    }
}

</style>

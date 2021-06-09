<!-- 营销活动 -->
<template>
    <div class="activity page">
        <div class="box">
            <Layout>
                <template v-slot:left>
                    <div>
                        <Title title="预订人年龄段"/>
                        <radar-charts style="width: 100%; height: 280px;"></radar-charts>
                    </div>
                    <div>
                        <Title title="预定数据动态"/>
                        <line-charts style="width: 100%; height: 260px;"></line-charts>
                    </div>
                </template>
                <template v-slot:middle>
                    <!--地图-->
                    <div class="map">
                        <div class="mapTitle">
                            <div>
                                <Title title="今日线上消费"/>
                                <!--                                <div class="mapPrice">1299</div>-->
                                <div class="num">
                                    <number-change class="mapPrice"
                                                   :num="consumptionStatistics.today + getNum" />
                                    <span>人次</span>
                                </div>
                            </div>
                            <div>
                                <Title title="昨日线上消费"/>
                                <div class="num">
                                    <number-change class="mapPrice"
                                                   :num="consumptionStatistics.yesterday" />
                                    <span>人次</span>
                                </div>
                            </div>
                            <div>
                                <Title title="总线上消费"/>
                                <div class="num">
                                    <number-change class="mapPrice"
                                                   :num="consumptionStatistics.total + getNum" />
                                    <span>人次</span>
                                </div>
                            </div>
                        </div>
                        <div class="mapCharts">
                            <map-charts style="width: 720px; height: 370px;"></map-charts>
                        </div>
                    </div>
                    <div>
                        <Title title="实时预定"/>
                        <activity-table :head-list="reserveHead"
                                        :table-data="reserveData"/>
                    </div>
                </template>
                <template v-slot:right>
                    <div class="rank">
                        <Title title="店铺销售排名"/>
                        <rank-charts :table-data="sellRankList"
                                     style="width: 100%; height: 340px;" />
                    </div>
                    <div>
                        <Title title="各个端参与"/>
                        <div class="small-line">
                            <div class="small-line-item blue-bg">
                                <h2>IOS端</h2>
                                <div class="statistics">
                                    <span>{{2560 + getNum}}人</span>
                                    <span>+40%</span>
                                </div>
                                <small-line-charts class="charts"
                                                   style="width: 100%; height: 30px;" />
                            </div>
                            <div class="small-line-item red-bg">
                                <h2>安卓端</h2>
                                <div class="statistics">
                                    <span>{{3456 + getNum}}人</span>
                                    <span>+60%</span>
                                </div>
                                <small-line-charts class="charts"
                                                   style="width: 100%; height: 30px;" />
                            </div>
                        </div>
                    </div>
                </template>
            </Layout>
        </div>
    </div>
</template>

<script>
import Layout from '@components/layout/Layout';
import RadarCharts from '@components/activity/radarCharts';
import LineCharts from '@components/activity/lineCharts';
import ActivityTable from '@components/activity/activityTable';
import RankCharts from '@components/common/rankCharts';
import SmallLineCharts from '@components/activity/smallLineCharts';
import MapCharts from '@components/outLet/mapCharts';

export default {
    name: 'Activity',
    components: {
        Layout,
        RadarCharts,
        LineCharts,
        ActivityTable,
        RankCharts,
        SmallLineCharts,
        MapCharts
    },
    data() {
        return {
            // 消费统计
            consumptionStatistics: {
                today: 1299,
                yesterday: 12333,
                total: 123333
            }
        };
    },
    computed: {
        getNum() {
            return this.$store.getters.getNum;
        },
        /**
         * 预定表格 表头
         */
        reserveHead() {
            return [
                {
                    title: '预订活动',
                    key: 'name'
                },
                {
                    title: '预订人',
                    key: 'reserve'
                },
                {
                    title: '预定人ID',
                    key: 'reserveId',
                    width: 100
                },
                {
                    title: '预定时间',
                    key: 'time'
                }
            ];
        },
        /**
         * 预定表格 数据
         */
        reserveData() {
            return [
                {
                    name: '飞天 53%vol 500ml 贵州茅台酒',
                    reserve: '李民浩',
                    reserveId: '90556',
                    time: '2021/3/24 16:52:29'
                },
                {
                    name: '飞天 53%vol 500ml 贵州茅台酒',
                    reserve: '张中华',
                    reserveId: '90555',
                    time: '2021/3/24 16:52:25'
                },
                {
                    name: '飞天 53%vol 500ml 贵州茅台酒',
                    reserve: '张飞',
                    reserveId: '18721',
                    time: '2021/3/24 16:51:50'
                },
                {
                    name: '飞天 53%vol 500ml 贵州茅台酒',
                    reserve: '王小明',
                    reserveId: '9997',
                    time: '2021/3/24 16:51:21'
                }
            ];
        },
        sellRankList() {
            return [
                {
                    name: '渝北龙溪店',
                    percentage: 75,
                    sum: '1936879'
                },
                {
                    name: '江北五江路店',
                    percentage: 65,
                    sum: '1770390.6'
                },
                {
                    name: '南岸台湾花园店',
                    percentage: 45,
                    sum: '1239908.1'
                },
                {
                    name: '大渡口店',
                    percentage: 35,
                    sum: '872340'
                },
                {
                    name: '巴南李家沱店',
                    percentage: 25,
                    sum: '627657'
                },
                {
                    name: '沙坪坝石碾盘店',
                    percentage: 5,
                    sum: '587559'
                }
            ];
        }
    }
};
</script>

<style lang="less" scoped>
.activity {
    background: url("../assets/outLet/bg.png") no-repeat;
    background-size: 100% 100%;

    .box {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .map {
        position: relative;
        height: 360px;

        .mapTitle {
            display: flex;
            grid-template-columns: repeat(3, 33.3%);
            position: relative;
            z-index: 1;

            .num {
                .mapPrice {
                    margin-left: 8px;
                    font-size: 52px;
                    color: #69d8f7;
                }

                span {
                    margin-left: -15px;
                    font-size: 20px;
                    color: #ffffff;
                }
            }
        }

        .mapCharts {
            position: absolute;
            top: 22px;
            left: 60px;
            z-index: 0;
        }
    }

    .small-line {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 110px;

        .small-line-item {
            flex: 1;
            position: relative;
            margin-top: 10px;

            .statistics {
                display: flex;
                justify-content: space-between;
                position: absolute;
                top: 25px;
                margin: 0 20px;
                width: calc(100% - 60px);

                span {
                    font-size: 20px;
                    color: #ffffff;
                }
            }

            .charts {
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }

        .small-line-item + .small-line-item {
            margin-left: 15px;
        }

        .blue-bg {
            position: relative;
            border-radius: 15px;
            background-color: rgba(134, 195, 255, 0.2);

            h2 {
                position: absolute;
                left: 20px;
                color: #ffffff;
            }

            span {
                color: #ffffff;
            }
        }

        .red-bg {
            position: relative;
            border-radius: 15px;
            background-color: rgba(255, 134, 134, 0.2);

            h2 {
                position: absolute;
                left: 20px;
                color: #ffffff;
            }
        }
    }
}
</style>

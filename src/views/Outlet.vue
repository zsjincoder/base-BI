<!-- 智慧门店 -->
<template>
    <div class="bg page">
        <div class="bg2">
            <div class="leftBox">
                <div class="leftOne">
                    <div class="titleOne">
                        <Title title="店铺销售监控"/>
                    </div>
                    <line-charts class="lineWH"></line-charts>
                </div>
                <div>
                    <Title title="店铺销售占比"/>
                    <pie-charts class="pieWH"></pie-charts>
                </div>
            </div>
            <div class="centerBox">
                <!--地图-->
                <div class="map">
                    <div class="mapTitle">
                        <div class="mapFlex">
                            <Title title="库存金额"/>
                            <div class="mapPrice">
                                {{ 12990 + getNum }}<span>元</span>
                            </div>
                        </div>
                        <div class="mapFlex">
                            <Title title="订购金额"/>
                            <div class="mapPrice">
                                {{ 112990 + getNum }}<span>元</span>
                            </div>
                        </div>
                    </div>
                    <div class="mapCharts">
                        <div class="mapContent">
                            <Title title="销售收入"/>
                            <div class="mapPrice">
                                {{ 129390 + getNum }}<span>元</span>
                            </div>
                        </div>
                        <map-charts class="mapWH"></map-charts>
                    </div>
                </div>
                <!--库存数据-->
                <div class="centerTwo">
                    <div class="centerTitle">
                        <Title title="库存数据"/>
                        <div class="centerName">
                            <Select v-model="shopping" placement="bottom"
                                    style="width: auto;">
                                <Option v-for="item in tableData"
                                        :value="item.value"
                                        :key="item.value">
                                    {{ item.label }}
                                </Option>
                            </Select>
                        </div>
                    </div>
                    <bar-charts :barData="dataList" class="barWH"></bar-charts>
                </div>
            </div>
            <div class="rightBox">
                <div class="rightOne">
                    <Title title="店铺销售排名"/>
                    <rank-charts class="rankWH" :table-data="sellRankList"></rank-charts>
                </div>
                <div class="rightTwo">
                    <Title title="店铺监控"/>
                    <div class="contentTwo">
                        <div class="contentBorder"></div>
                        <div class="contentBorder"></div>
                        <div class="contentBorder"></div>
                        <div class="contentBorder"></div>
                        <div class="contentBorder"></div>
                        <div class="contentBorder"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Title from '@components/common/Title';
import LineCharts from '@components/outLet/lineCharts';
import PieCharts from '@components/outLet/pieCharts';
import BarCharts from '@components/outLet/barCharts';
import MapCharts from '@components/outLet/mapCharts';
import RankCharts from '@components/common/rankCharts';
import { randomDataPeriod } from '@/utils';

export default {
    name: 'Outlet',
    components: {
        Title,
        LineCharts,
        RankCharts,
        PieCharts,
        BarCharts,
        MapCharts
    },
    data() {
        return {
            barData: [{
                name: '未完成',
                data: [120, 800, 100, 440, 534, 690, 600, 345, 234, 545, 12]
            }, {
                name: '已完成',
                data: [220, 500, 400, 640, 134, 500, 600, 345, 65, 34, 234]
            }],
            shopping: 0,
            tableData: [
                {
                    value: 0,
                    label: '渝中区大坪店'
                },
                {
                    value: 1,
                    label: '渝中区较场口店'
                },
                {
                    value: 2,
                    label: '渝中区小什字店'
                }, {
                    value: 3,
                    label: '渝中区解放碑店'
                }
            ]
        };
    },
    computed: {
        getNum() {
            return this.$store.getters.getNum;
        },
        sellRankList() {
            return [
                {
                    name: '渝中区较场口店',
                    percentage: 95,
                    sum: '24214'
                },
                {
                    name: '渝中区较场口店',
                    percentage: 55,
                    sum: '24214'
                },
                {
                    name: '渝中区较场口店',
                    percentage: 25,
                    sum: '24214'
                },
                {
                    name: '渝中区较场口店',
                    percentage: 95,
                    sum: '24214'
                },
                {
                    name: '渝中区较场口店',
                    percentage: 55,
                    sum: '24214'
                }
            ];
        },
        dataList() {
            return randomDataPeriod(12, [200, 800], ['已完成', '未完成']);
        }
    },
    methods: {}
};
</script>

<style lang="less"
       scoped>
/deep/ .ivu-select-selection {
    border: 0;
    padding: 0;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0);
}

/deep/ .ivu-select-visible .ivu-select-selection {
    box-shadow: 0 0 0 0 rgb(0, 0, 0, 0);
}

.bg {
    background: url("../assets/outLet/bg.png") no-repeat;
    background-size: 100% 100%;

    .bg2 {
        display: grid;
        grid-template-columns: 27% 46% 27%;
        grid-template-rows: 100%;
        padding: 22px 45px 0 45px;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        background-size: 100% 100%;
    }

    .leftBox {
        .leftOne {
            position: relative;

            .titleOne {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
            }

            .lineWH {
                width: 100%;
                height: 350px;
            }
        }

        .pieWH {
            width: 100%;
            height: 220px;
        }
    }

    .centerBox {
        margin-left: 90px;

        .map {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-template-rows: 100%;

            .mapTitle {
                display: flex;
                flex-direction: column;

                .mapFlex {
                    flex: 1;

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

            .mapCharts {
                position: relative;

                .mapContent {
                    position: absolute;
                    top: 0;
                    left: 0;

                    .mapPrice {
                        font-size: 52px;
                        color: #69d8f7;

                        span {
                            font-size: 15px;
                            color: #ffffff;
                        }
                    }
                }

                .mapWH {
                    height: 300px;
                }
            }
        }

        .centerTwo {
            .centerTitle {
                display: flex;
                justify-content: space-between;

                .centerName {
                    position: relative;
                    width: auto;
                    font-size: 14px;
                }
            }

            .barWH {
                width: 100%;
                height: 270px;
            }
        }
    }

    .rightBox {
        margin-left: 20px;

        .rightOne {
            height: 300px;

            .rankWH {
                margin-top: 10px;
                width: 100%;
                height: 300px;
            }
        }

        .rightTwo {
            height: 300px;

            .contentTwo {
                display: grid;
                grid-template-columns: repeat(3, 30%);
                grid-template-rows: repeat(2, 120px);
                padding-top: 2%;
                padding-left: 20px;
                grid-gap: 10px 20px;

                .contentBorder {
                    border: 1px solid #ff0000;
                }
            }
        }
    }
}

</style>

<template>
    <div>
        <Title title="新增用户"/>
        <div ref="myEcharts"
             style="width: 100%; height: 250px;"></div>
    </div>
</template>

<script>
import echarts from '@/plugins/echarts';

import Title from '@components/common/Title';
import { randomDataMoment } from '@/utils';

export default {
    name: 'AddUser',
    components: {
        Title
    },
    data() {
        return {
            optionData: []
        };
    },
    mounted() {
        this.optionData = randomDataMoment(12, [500, 1500]);
        this.init();
    },
    computed: {
        xAxisData() {
            const { optionData } = this;
            return optionData.map(item => item.name);
        },
        seriesData() {
            const { optionData } = this;
            return optionData.map(item => item.value);
        }
    },
    methods: {
        /**
             * 初始化echarts
             */
        init() {
            const myEcharts = echarts.init(this.$refs.myEcharts);
            // 指定图表的配置项和数据
            const option = {
                grid: {
                    top: '15%',
                    right: '0%',
                    bottom: '15%',
                    left: '10%'
                },
                tooltip: {
                    trigger: 'axis',
                    padding: [3, 5, 4, 7],
                    backgroundColor: '#375cf0',
                    borderWidth: 0,
                    formatter: '{c}',
                    axisPointer: {
                        type: 'none'
                    },
                    textStyle: {
                        color: '#f1f1f1',
                        fontFamily: 'trends',
                        fontSize: 10
                    }
                },
                xAxis: {
                    data: this.xAxisData,
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff'
                        }
                    },
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        color: '#ffffff',
                        fontSize: 8,
                        fontFamily: 'trends',
                        labelStyle: {

                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#2a2c40',
                            type: 'solid'
                        }
                    }
                },
                yAxis: {
                    nameTextStyle: {
                        color: '#ffffff',
                        fontSize: 12,
                        fontFamily: 'trends'
                    },
                    nameGap: 30,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#ffffff'
                        }
                    },
                    axisLabel: {
                        margin: 9,
                        fontSize: 8,
                        fontFamily: 'trends'
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#8283ba',
                            type: 'dashed'
                        }
                    }
                },
                series: [{
                    type: 'bar',
                    data: this.seriesData,
                    barWidth: 12,
                    itemStyle: {
                        barBorderRadius: [120, 120, 0, 0],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#375CF0'
                        }, {
                            offset: 1,
                            color: '#1C2E78'
                        }])
                    }
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myEcharts.setOption(option);
        }
    }
};
</script>

<!--<style scoped>

</style>-->

<template>
    <div>
        <Title title="实时在线人数"/>
        <div ref="myEcharts"
             style="width: 100%; height: 250px;"></div>
    </div>
</template>

<script>
import echarts from '@/plugins/echarts';
import { randomDataMoment } from '@/utils';
export default {
    name: 'OnlineInRealTime',
    data() {
        return {
            optionData: []
        };
    },
    mounted() {
        this.optionData = randomDataMoment(9, [100, 500]);
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
        init() {
            const myEcharts = echarts.init(this.$refs.myEcharts);
            // 指定图表的配置项和数据
            const option = {
                // backgroundColor: '#fff',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(0, 255, 233,0)'
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(255, 255, 255,1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0, 255, 233,0)'
                                }],
                                global: false
                            }
                        }
                    }
                },

                xAxis: [{
                    show: true,
                    type: 'category',
                    axisLine: {
                        show: true
                    },

                    splitArea: {
                        // show: true,
                        color: '#DBDBDB',
                        lineStyle: {
                            color: '#DBDBDB'
                        }
                    },
                    axisLabel: {
                        color: '#DBDBDB'
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(234,240,244,0.3)'
                        }
                    },
                    boundaryGap: false,
                    data: this.xAxisData

                }],
                grid: {
                    x: '10%',
                    y: '15%',
                    x2: '5%',
                    y2: '15%',
                    borderWidth: 1
                },
                yAxis: [{
                    type: 'value',
                    min: 0,
                    // max: 140,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(234,240,244,0.3)'
                        }
                    },
                    axisLine: {
                        show: true
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#DBDBDB'
                        }
                    },
                    axisTick: {
                        show: true
                    }
                }],
                series: [{
                    name: '实时在线人数',
                    type: 'line',
                    smooth: true, // 是否平滑
                    showAllSymbol: true,
                    symbol: 'circle',
                    symbolSize: 6,
                    lineStyle: {
                        normal: {
                            color: '#7DD1BD'
                        }
                    },
                    itemStyle: {
                        color: '#fff',
                        borderColor: '#7DD1BD',
                        borderWidth: 2
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(38, 225, 175, 1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(38, 225, 175, .2)'
                            }
                            ], false),
                            shadowColor: 'rgba(38, 225, 175, .5)',
                            shadowBlur: 5
                        }
                    },
                    data: this.seriesData
                }

                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myEcharts.setOption(option);
        }
    }
};
</script>

<style scoped>

</style>

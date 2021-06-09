<template>
    <div ref="myEcharts" class="real-revenue-data">
    </div>
</template>

<script>
import echarts from '@/plugins/echarts';

export default {
    name: 'barCharts',
    data() {
        return {
        };
    },
    props: {
        barData: {
            type: Object,
            default: () => {}
        },
        legend: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        console.log(this.barData);
        this.init();
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
                    top: '5%',
                    left: '2%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true
                },
                legend: {
                    show: this.legend,
                    top: '2%',
                    right: '5%',
                    itemHeight: 10,
                    itemWidth: 15,
                    icon: 'roundRect',
                    data: [this.barData.values[0].name, this.barData.values[1].name],
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 10
                    }
                },
                xAxis: {
                    type: 'category',
                    data: this.barData.xAxisData,
                    axisTick: {
                        show: false // 隐藏X轴刻度
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#0D226A'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#53FFF8' // X轴文字颜色
                        }
                    }
                },
                yAxis: [
                    {
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#0D226A'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#8283BA',
                                opacity: 0.3
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#53FFF8' // X轴文字颜色
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: this.barData.values[0].name,
                        type: 'pictorialBar',
                        symbolRepeat: true,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#2DC9EB'
                                },
                                {
                                    offset: 1,
                                    color: '#14D2B8'
                                }
                                ])
                            }
                        },
                        symbolMargin: 3,
                        symbolSize: [12, 4],
                        barCategoryGap: '40%',
                        symbol: 'roundRect',
                        symbolPosition: 'start',
                        data: this.barData.values[0].data
                    }, {
                        name: this.barData.values[1].name,
                        type: 'pictorialBar',
                        barGap: '10%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#F15887'
                                },
                                {
                                    offset: 1,
                                    color: '#FE9B86'
                                }
                                ])
                            }
                        },
                        symbolMargin: 3,
                        symbolRepeat: true,
                        symbol: 'roundRect',
                        symbolSize: [12, 4],
                        symbolPosition: 'start',
                        data: this.barData.values[1].data
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

<template>
    <div ref="myEcharts" class="real-revenue-data"></div>
</template>

<script>
import echarts from '@/plugins/echarts';
export default {
    name: 'smallLineCharts',

    mounted() {
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
                color: ['rgb(110,112,114)'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                /* grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                    show: false
                }, */
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1/1', '2/1', '3/1', '4/1', '5/1', '6/1', '7/1'],
                        axisLabel: {
                            // 修改刻度文字颜色
                            textStyle: {
                                color: '#fff'
                            },
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            // y轴刻度线
                            show: false
                        },
                        axisLine: {
                            // y轴
                            show: false
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            show: false // 网格线
                        },
                        axisTick: {
                            // y轴刻度线
                            show: false
                        },
                        axisLine: {
                            // y轴
                            show: false
                        },
                        axisLabel: {
                            // 修改刻度文字颜色
                            textStyle: {
                                color: '#fff'
                            },
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: '',
                        type: 'line',
                        stack: '总量',
                        smooth: true,
                        lineStyle: {
                            width: 1.5,
                            shadowColor: 'rgba(255,255,255,.4)',
                            shadowBlur: 4,
                            shadowOffsetX: 1,
                            shadowOffsetY: 1
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: 'rgba(44,58,85,.3)'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [140, 232, 101, 264, 90, 340, 250]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myEcharts.setOption(option);
        }
    }
};
</script>

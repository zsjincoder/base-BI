<template>
    <div ref="myEcharts" class="real-revenue-data">
     </div>
</template>

<script>
import echarts from '@/plugins/echarts';
import { randomDataMoment } from '@/utils';
export default {
    name: 'lineCharts',
    data() {
        return {
            optionData: []
        };
    },
    mounted() {
        this.optionData = randomDataMoment(7, [100, 350]);
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
                color: ['rgb(241,42,79)'],
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
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                    show: false
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: this.xAxisData,
                        axisLabel: { // 修改刻度文字颜色
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick: {
                            show: false,
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        show: true,
                        splitLine: {
                            show: false // 网格线
                        },
                        axisTick: { // y轴刻度线
                            show: false
                        },
                        axisLine: { // y轴
                            show: true
                        },
                        axisLabel: { // 修改刻度文字颜色
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '',
                        type: 'line',
                        stack: '总量',
                        smooth: true,
                        symbol: 'circle',
                        lineStyle: {
                            width: 1.5,
                            shadowColor: 'rgba(255,255,255,.4)',
                            shadowBlur: 4,
                            shadowOffsetX: 1,
                            shadowOffsetY: 1
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(241,42,79)',
                                borderColor: '#fff', // 拐点边框颜色
                                borderWidth: 5
                            }
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: 'rgba(241,42,79,.3)'
                        },
                        emphasis: {
                            focus: 'series'
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

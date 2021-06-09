<template>
    <div ref="myEcharts">
     </div>
</template>

<script>
import echarts from '@/plugins/echarts';
export default {
    name: 'lineCharts',

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
                color: ['#21CAC7', '#F03768', '#558BE9'],
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    top: '0%',
                    right: '5%',
                    itemHeight: 10,
                    itemWidth: 15,
                    icon: 'roundRect',
                    orient: 'horizontal',
                    data: ['烟类', '酒类', '其他类'],
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 10
                    }
                },
                grid: {
                    top: '15%',
                    left: '0%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['0/1', '1/1', '2/1', '3/1', '4/1', '5/1', '6/1'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFFFFF',
                            opacity: 0.1
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#FFFFFF',
                            opacity: 0.1
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#FFFFFF',
                            opacity: 0.1
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#FFFFFF',
                            opacity: 0.1
                        }
                    }
                },
                series: [
                    {
                        name: '烟类',
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '酒类',
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '其他类',
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        data: [150, 232, 201, 154, 190, 330, 410]
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

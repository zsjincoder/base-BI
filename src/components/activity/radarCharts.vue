<template>
  <div ref="myEcharts" class="real-revenue-data"></div>
</template>

<script>
import echarts from '@/plugins/echarts';
export default {
    name: 'radarCharts',
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
                tooltip: {},
                legend: {
                    data: ['男', '女'],
                    right: 50,
                    orient: 'vertical',
                    bottom: 0,
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    }
                },
                radar: {
                    // shape: 'circle',
                    axisName: {
                        textStyle: {
                            color: '#fff',
                            // backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5],
                            fontSize: 16
                        }
                    },
                    indicator: [
                        { text: '12~24岁', max: 6500 },
                        { text: '25~30岁', max: 16000 },
                        { text: '31~40岁', max: 30000 },
                        { text: '41~50岁', max: 38000 },
                        { text: '51~60岁', max: 52000 },
                        { text: '61岁', max: 25000 }
                    ],
                    splitArea: {
                        show: false,
                        areaStyle: {
                            color: 'rgba(255,0,0,0)' // 图表背景的颜色
                        }
                    }
                },
                series: [
                    {
                        type: 'radar',
                        areaStyle: {
                            colors: ['rgb(88,128,195)', 'rgb(151,146,203)']
                        },
                        data: [
                            {
                                value: [4300, 10000, 28000, 35000, 50000, 19000],
                                name: '男',
                                itemStyle: {
                                    color: 'rgb(151,146,203)'
                                }
                            },
                            {
                                value: [5000, 14000, 28000, 31000, 42000, 21000],
                                name: '女',
                                itemStyle: {
                                    color: 'rgb(88,128,195)'
                                }
                            }
                        ]
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

<!-- 实时营收数据 -->
<template>
    <div class="real-revenue-data">
        <Title title="实时营收数据"/>
        <div ref="myEcharts"
             style="width: 100%; height: 250px;"></div>
    </div>
</template>

<script>
import echarts from '@/plugins/echarts';
import coordImg from '@/assets/img/sell/coord.png';

export default {
    name: 'RealRevenueData',
    props: {
        list: {
            type: Array,
            default: () => ([])
        }
    },
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
                grid: {
                    top: '25%',
                    right: '0%',
                    bottom: '10%',
                    left: '10%'
                },
                /* tooltip: {
                    trigger: 'item'
                }, */
                xAxis: {
                    data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 1)',
                            opacity: 0.3
                        }
                    },
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        color: 'rgba(255, 255, 255, 0.36)',
                        fontSize: 8,
                        fontFamily: 'trends'
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
                    name: '单位：万元',
                    nameTextStyle: {
                        color: 'rgba(255, 255, 255, 0.49)',
                        fontSize: 12,
                        fontFamily: 'trends'
                    },
                    nameGap: 30,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.29)'
                        }
                    },
                    axisLabel: {
                        margin: 9,
                        fontSize: 8,
                        fontFamily: 'trends',
                        color: 'rgba(255, 255, 255, 0.36)'
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(130, 131, 186, 0.3)',
                            type: 'dashed'
                        }
                    }
                },
                series: [{
                    type: 'bar',
                    data: this.list,
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
                    },
                    emphasis: {
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{style|{c}}\n{nullRow| }\n{coord| }',
                            textStyle: {
                                align: 'center',
                                fontSize: 10,
                                fontFamily: 'trends'
                            },
                            rich: {
                                coord: {
                                    width: 9,
                                    height: 9,
                                    backgroundColor: {
                                        image: coordImg
                                    }
                                },
                                nullRow: {
                                    width: 1,
                                    height: 3
                                },
                                style: {
                                    padding: [3, 5, 3, 7],
                                    color: '#f1f1f1',
                                    backgroundColor: '#375cf0',
                                    borderRadius: 2
                                }
                            }
                        }
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

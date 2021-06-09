<template>
    <div ref="myEcharts" class="real-revenue-data">
    </div>
</template>

<script>
import echarts from '@/plugins/echarts';
import mapObj from '@/utils/map.js';
import { storeList } from '@/utils/store.json';
export default {
    name: 'mapCharts',
    data() {
        return {
            mapData: mapObj
        };
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
            echarts.registerMap('重庆市', this.mapData);
            // 指定图表的配置项和数据
            const option = {
                geo: {
                    map: '重庆市',
                    left: '1%',
                    top: '1%',
                    right: '1%',
                    bottom: '5%',
                    itemStyle: {
                        normal: {
                            shadowColor: '#0655BF',
                            shadowOffsetX: 0,
                            shadowOffsetY: 15,
                            opacity: 100,
                            borderColor: 'rgba(0,0,0,0)'
                        }
                    },
                    label: {
                        emphasis: {
                            show: false
                        }
                    }
                },
                series: [{
                    type: 'map',
                    silent: true,
                    map: '重庆市',
                    left: '1%',
                    top: '1%',
                    right: '1%',
                    bottom: '5%',
                    tooltip: {
                        show: false
                    },
                    showLegendSymbol: false,
                    roam: false,
                    itemStyle: {
                        normal: {
                            borderWidth: 0,
                            areaColor: {
                                type: 'linear-gradient',
                                x: 1000,
                                y: 600,
                                x2: 1000,
                                y2: 0,
                                colorStops: [{
                                    offset: 1,
                                    color: '#96D1FF' // 0% 处的颜色
                                }, {
                                    offset: 0,
                                    color: '#0655BF' // 50% 处的颜色
                                }],
                                global: true // 缺省为 false
                            }
                        },
                        emphasis: {
                            show: false,
                            borderWidth: 0,
                            opacity: 0
                        }
                    },
                    z: 1
                }, {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    symbolSize: 10,
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: 'rgba(30,83,144,0.2)'
                        }
                    },
                    data: storeList
                },
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbolSize: 20,
                    symbol: 'pin',
                    itemStyle: {
                        normal: {
                            color: '#fc6412'
                        }
                    },
                    data: storeList
                }]
            };
                // 使用刚指定的配置项和数据显示图表。
            myEcharts.setOption(option);
        }
    }
};
</script>

<style scoped>

</style>

<template>
    <div ref="myEcharts" >
    </div>
</template>

<script>
import echarts from '@/plugins/echarts';
export default {
    name: 'pieCharts',

    mounted() {
        this.init();
    },
    props: {
        pieData: Array
    },
    methods: {
        angleText(i, num) {
            // 每个元素的角度
            const everyAngle = 360 / num;
            // 文字现在所在的角度
            const currentAngle = i * everyAngle + everyAngle / 2;
            // 文字所在模块的所占角度
            // const currentArea = (i + 1) * everyAngle;

            if (currentAngle <= 90) {
                return -currentAngle;
            } else if (currentAngle <= 180 && currentAngle > 90) {
                return 180 - currentAngle;
            } else if (currentAngle < 270 && currentAngle > 180) {
                return 180 - currentAngle;
            } else if (currentAngle < 360 && currentAngle >= 270) {
                return 360 - currentAngle;
            }
        },
        /**
             * 初始化echarts
             */
        init() {
            let sum = 0;
            this.pieData.forEach(item => {
                sum += item.value;
                item.label = { color: '#fff' };
                item.itemStyle = {};
                item.emphasis = { itemStyle: {} };
            });
            console.log(sum);
            const data1 = JSON.parse(JSON.stringify(this.pieData));
            for (let i = 0; i < data1.length; i++) {
                data1[i].label.rotate = this.angleText(i, data1.length);
                data1[i].value = this.pieData[i].value;
                if (i === 0) {
                    data1[i].label.color = 'rgba(25, 255, 224)';
                }
            }
            const data2 = [];
            for (let i = 0; i < this.pieData.length; i++) {
                if (i === 0) {
                    data2.push({
                        value: this.pieData[i].value,
                        itemStyle: {
                            color: 'rgba(25, 255, 224,0.05)'
                        }
                    });
                } else {
                    data2.push({
                        value: this.pieData[i].value,
                        itemStyle: {
                            color: 'transparent'
                        }
                    });
                }
            }
            const data3 = JSON.parse(JSON.stringify(this.pieData));
            for (let i = 0; i < data3.length; i++) {
                if (i === 0) {
                    data3[i].label.color = '#333';
                    data3[i].itemStyle.color = 'rgba(25, 255, 224)';
                    data3[i].emphasis.itemStyle.color = 'rgba(25, 255, 224)';
                    data3[i].label.rotate = this.angleText(i, data3.length);
                } else {
                    data3[i].label.color = '#fff';
                    data3[i].itemStyle.color = '#0F74EA';
                    data3[i].emphasis.itemStyle.color = '#6A5ACD';
                    data3[i].label.rotate = this.angleText(i, data3.length);
                }
            }

            const myEcharts = echarts.init(this.$refs.myEcharts);
            // 指定图表的配置项和数据
            const option = {
                series: [{
                    type: 'pie',
                    radius: ['68%', '90%'],
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'transparent'
                    },
                    labelLine: {
                        normal: {
                            show: false,
                            length: 30,
                            length2: 55
                        }
                    },
                    label: {
                        normal: {
                            position: 'inside',
                            align: 'right'
                        }
                    },
                    name: '',
                    data: data1
                }, {
                    stack: 'a',
                    type: 'pie',
                    radius: ['70%', '42%'],
                    zlevel: 10,
                    itemStyle: {
                        color: '#0F74EA'
                    },
                    emphasis: {
                        itemStyle: {
                            color: '#6A5ACD'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 12,
                                color: '#fff'
                            },
                            position: 'inside',
                            rotate: 30,
                            align: 'right',
                            fontWeight: 'bold',
                            formatter: '{c}%'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    animation: false,
                    data: data3
                }, {
                    type: 'pie',
                    zlevel: 99,
                    radius: ['15%', '90%'],
                    selectedOffset: 0,
                    animation: false,
                    hoverAnimation: false,
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    data: data2
                }, { // 指针上的圆
                    type: 'pie',
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false,
                    legendHoverLink: false,
                    radius: ['0%', '2%'],
                    center: ['50%', '50%'],
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: 'rgba(25, 255, 224)'
                            }
                        }
                    }]
                }, { // 指针上的圆
                    type: 'pie',
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false,
                    legendHoverLink: false,
                    radius: ['2%', '5%'],
                    center: ['50%', '50%'],
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: 'rgba(25, 255, 224,0.5)'
                            }
                        }
                    }]
                }, { // 指针上的圆
                    type: 'pie',
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false,
                    legendHoverLink: false,
                    radius: ['5%', '10%'],
                    center: ['50%', '50%'],
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: 'rgba(25, 255, 224)'
                            }
                        }
                    }]
                }]
            };
                // 使用刚指定的配置项和数据显示图表。
            myEcharts.setOption(option);
            myEcharts.on('click', function(a) {
                // 最外层的字体颜色重置变色
                for (let da1 = 0; da1 < option.series[0].data.length; da1++) {
                    option.series[0].data[da1].label.color = '#fff';
                }

                // 色圈的字体颜色和选中颜色重置
                for (let da2 = 0; da2 < option.series[1].data.length; da2++) {
                    option.series[1].data[da2].itemStyle.color = '#0F74EA';
                    option.series[1].data[da2].label.color = '#fff';
                    // hover颜色重置
                    option.series[1].data[da2].emphasis.itemStyle.color = '#6A5ACD';
                }

                // 背景的透明饼图的重置
                for (let da3 = 0; da3 < option.series[2].data.length; da3++) {
                    option.series[2].data[da3].itemStyle.color = 'transparent';
                }

                option.series[1].data[a.dataIndex].itemStyle.color = 'rgba(25, 255, 224)';
                option.series[1].data[a.dataIndex].label.color = '#333';
                // hover 颜色改变
                option.series[1].data[a.dataIndex].emphasis.itemStyle.color = 'rgba(25, 255, 224)';
                option.series[0].data[a.dataIndex].label.color = 'rgba(25, 255, 224)';
                option.series[2].data[a.dataIndex].itemStyle.color = 'rgba(25, 255, 224,0.1)';
                // console.log(option)
                myEcharts.setOption(option);
            });

            myEcharts.on('mouseover', function(a) {
                myEcharts.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 1,
                    dataIndex: a.dataIndex
                });
            });

            myEcharts.on('mouseout', function(a) {
                myEcharts.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 1,
                    dataIndex: a.dataIndex
                });
            });
        }
    }
};
</script>

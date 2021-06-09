<!-- 水球图-->
<template>
    <div class="liquidfill">
        <div ref="myEcharts"
             :style="canvasSize"></div>
    </div>
</template>

<script>
import echarts from '@/plugins/echarts';

export default {
    name: 'Liquidfill',
    props: {
        /**
         * 比例
         */
        proportion: {
            type: Number,
            default: 0
        },
        /**
         * 水球颜色
         */
        color: {
            type: String,
            default: ''
        },
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        },
        /**
         * 是否显示label
         */
        showLabel: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        /**
         * canvas画布大小
         * @return {{width: string, height: string}}
         */
        canvasSize() {
            return {
                width: this.width + 'px',
                height: this.height + 'px'
            };
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            const myEcharts = echarts.init(this.$refs.myEcharts);
            const options = {
                series: [{
                    type: 'liquidFill',
                    radius: '100%', // 水球图的半径
                    center: ['50%', '50%'], // 水球图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
                    // 水填充图的形状 circle 默认圆形  rect 圆角矩形  triangle 三角形
                    // diamond 菱形  pin 水滴状 arrow 箭头状  还可以是svg的path
                    shape: 'circle',
                    color: '#000000', // 波浪颜色
                    phase: 0, // 波的相位弧度 不设置  默认自动
                    direction: 'right', // 波浪移动的速度  两个参数  left 从右往左 right 从左往右
                    outline: {
                        show: false,
                        borderDistance: 0, // 边框线与图表的距离 数字
                        itemStyle: {
                            opacity: 1, // 边框的透明度   默认为 1
                            borderWidth: 2, // 边框的宽度
                            shadowBlur: 1, // 边框的阴影范围 一旦设置了内外都有阴影
                            shadowColor: '#fff', // 边框的阴影颜色,
                            borderColor: '#1e5a7e' // 边框颜色
                        }
                    },
                    // 图形样式
                    itemStyle: {
                        // 水球显示的背景颜色
                        color: this.color
                    },
                    backgroundStyle: {
                        // 水球未到的背景颜色
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(0,24,55, 0)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,24,55, 0)'
                            }, {
                                offset: 1,
                                color: this.color
                            }],
                            globalCoord: false
                        },
                        borderWidth: 0,
                        borderColor: 'red'
                    },
                    // 图形上的文本标签
                    label: {
                        normal: {
                            show: this.showLabel,
                            fontFamily: 'trends',
                            color: '#a0eaff',
                            fontSize: 22,
                            fontWeight: 400,
                            formatter: function(param) {
                                return `${param.value * 100}%`;
                            }
                        }
                    },
                    // 图形的高亮样式
                    emphasis: {
                        itemStyle: {
                            opacity: 0.8 // 鼠标经过波浪颜色的透明度
                        }
                    },
                    data: [this.proportion] // 系列中的数据内容数组
                }]
            };
            myEcharts.setOption(options);
        }
    }
};
</script>

<!--<style scoped>

</style>-->

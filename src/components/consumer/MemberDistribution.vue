<template>
    <div style="position: relative">
        <Title title="会员分布"/>
        <div ref="myEcharts"
             class="real-revenue-data"
             style="width: 100%;height: 470px"></div>
        <div class="heat-show">
            <div v-for="(item, index) in icons"
                 :key="index"
                 class="heat-item">
                <img :src="item.icon" alt="">
                <span :style="{color: index < 2 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,.89)'}">{{item.label}}</span>
            </div>
            <div class="heat-item">
                低
                <div v-for="(item, index) in icons"
                     :key="index"
                     class="staff"
                     :style="{backgroundColor: item.color}"></div>
                高
            </div>
        </div>
        <div class="top3">
            <img src="../../assets/img/consumer/top3.png" alt="">
            <span class="top-title">支持会员排名</span>
            <div class="top-one tops">
                <span>TOP1</span>
                <span>渝北区</span>
            </div>
            <div class="top-two tops">
                <span>TOP2</span>
                <span>渝中区</span>
            </div>
            <div class="top-three tops">
                <span>TOP3</span>
                <span>江北区</span>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from '@/plugins/echarts';
import mapObj from '@/utils/map.js';
export default {
    name: 'MemberDistribution',
    data() {
        return {
            mapData: mapObj,
            img: require('@/assets/img/consumer/icon3.png'),
            topTip: require('@/assets/img/consumer/top-tip.png'),
            // 图标
            icons: [
                { label: '5000人以下', icon: require('@/assets/img/consumer/icon1.png'), threshold: 0, color: '#466ED9' },
                { label: '5000~10000人', icon: require('@/assets/img/consumer/icon2.png'), threshold: 5000, color: '#00ABD7' },
                { label: '10000-15000人', icon: require('@/assets/img/consumer/icon3.png'), threshold: 10000, color: '#FF441F' },
                { label: '15000-20000人', icon: require('@/assets/img/consumer/icon4.png'), threshold: 15000, color: '#842942' },
                { label: '20000人以上', icon: require('@/assets/img/consumer/icon5.png'), threshold: 20000, color: '#844229' }
            ],
            areaData: [
                { name: '渝中区', value: 150 },
                { name: '渝北区', value: 20 }
            ]
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
                textStyle: {
                    rich: {
                        orgname: {
                            fontSize: 12,
                            width: 100
                        },
                        count: {
                            fontSize: 12,
                            verticalAlign: 'top',
                            align: 'center',
                            color: '#fff',
                            padding: [0, 0, 0, 0]
                        }
                    }
                },
                visualMap: { // 左边的图标
                    min: 0,
                    max: 100000,
                    left: 26,
                    bottom: 30,
                    legend: false,
                    seriesIndex: 1,
                    pieces: [{
                        gt: 800,
                        // label: "> 10000人",
                        color: '#7f1100'
                    }, {
                        gte: 600,
                        lte: 800,
                        // label: "1000 - 10000人",
                        color: '#ff5428'
                    }, {
                        gte: 400,
                        lt: 600,
                        // label: "100 - 1000人",
                        color: '#ff8c71'
                    }, {
                        gt: 200,
                        lt: 400,
                        // label: "1 - 100人",
                        color: '#ffd768'
                    }, {
                        gt: 0,
                        lt: 200,
                        color: '#ffffff'
                    }],
                    show: !0
                },
                geo: {
                    map: '重庆市',
                    left: '1%',
                    top: '15%',
                    right: '1%',
                    bottom: '12%',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowColor: '#0E345F',
                            shadowOffsetX: 0,
                            shadowOffsetY: 8,
                            opacity: 100,
                            borderColor: 'rgba(0,0,0,0)'
                        }
                    }
                },
                series: [{
                    type: 'map',
                    silent: true,
                    map: '重庆市',
                    left: '1%',
                    top: '15%',
                    right: '1%',
                    bottom: '12%',
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
                                    color: '#1a7dd0'
                                }, {
                                    offset: 0,
                                    color: '#0E53A7'
                                }],
                                global: false // 缺省为 false
                            }
                        },
                        emphasis: {
                            show: false,
                            borderWidth: 0,
                            opacity: 0
                        }
                    },
                    z: 1
                },
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbolSize: [12, 12],
                    symbol: `image://${this.img}`,
                    labelLayout: function(e) {
                        return {
                            x: e.labelRect.x,
                            dx: 50,
                            y: e.labelRect.y,
                            dy: 30,
                            verticalAlign: 'middle',
                            align: 'left'
                        };
                    },
                    labelLine: {
                        show: true,
                        length2: 10,
                        lineStyle: {
                            color: '#bbb'
                        }
                    },
                    emphasis: {
                        show: true,
                        focus: 'self',
                        scale: true,
                        itemStyle: {
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10
                        },
                        label: {
                            show: true,
                            formatter: (e) => {
                                return `{a|${e.data.name}}{abg|}\n  {b|注册用户：} {per|${e.data.number}人}  `;
                            },
                            backgroundColor: {
                                image: this.topTip
                            },

                            rich: {
                                a: {
                                    color: '#fff',
                                    lineHeight: 24,
                                    fontFamily: 'TRENDS',
                                    fontSize: 13,
                                    align: 'center'
                                },
                                b: {
                                    color: '#fff',
                                    fontSize: 9,
                                    fontFamily: 'TRENDS',
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#fff',
                                    fontSize: 14,
                                    fontFamily: 'TRENDS',
                                    padding: [3, 4]
                                }
                            }
                        }
                    },
                    data: [{ name: '重庆市', value: ['106.55', '29.57'], number: 5555 }]
                },
                {
                    name: '总人口',
                    type: 'map',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#CD4F39',
                            areaColor: '#54FF9F',
                            borderWidth: 4,
                            opacity: 0.2
                        }
                    },
                    data: this.areaData
                }]
            };
                // 使用刚指定的配置项和数据显示图表。
            myEcharts.setOption(option);
        }
    }
};
</script>

<style scoped
       lang="less">
.heat-show{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 63px;
    background: rgba(5, 7, 11, 0.44);
    padding: 5px 15px;
    .heat-item {
        height: 50%;
        display: flex;
        align-items: center;
        margin-right: 13px;
        font-size: 12px;
        img {
            width: 11.33px;
            height: 11.33px;
        }
        span {
            margin-left: 5px;
            font-size: 12px;
            font-family: ShiShangZhongHeiJianTi;
            font-weight: 400;
            line-height: 14px;
        }
        .staff {
            width: 16px;
            height: 9px;
            margin: 0 3px;
        }
    }
}

.top3{
    position: absolute;
    top: 80px;
    left: 0;
    display: flex;
    width: 180px;
    color: #FFFFFF;
    img {
        width: 134.69px;
        height: 147.61px;
    }
    .top-title {
        position: absolute;
        top: 8px;
        left: 40px;
        font-size: 14px;
    }
    .tops {
        width: 82px;
        display: flex;
        font-size: 12px;
        justify-content: space-between;
    }
    .top-one {
        position: absolute;
        top: 50px;
        left: 40px;

        span:nth-of-type(1){
            color: #FF3B2D;
        }
    }
    .top-two {
        position: absolute;
        top: 80px;
        left: 40px;

        span:nth-of-type(1){
            color: #16CEB9;
        }
    }
    .top-three {
        position: absolute;
        top: 110px;
        left: 40px;

        span:nth-of-type(1){
            color: #196ED0;
        }
    }
}
</style>

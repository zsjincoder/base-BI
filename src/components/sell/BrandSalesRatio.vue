<!-- 品牌销售占比 -->
<template>
    <div class="brand-sales-ratio">
        <Title title="品牌销售占比"/>
        <div ref="myEcharts"
             style="width: 100%; height: 170px;"></div>
        <ul class="legend">
            <li v-for="(item, index) in scale"
                :key="item.name"
                class="legend-item">
                <img :src="imgList[index]"
                     class="left-img"
                     alt="">
                <div class="right">
                    <span class="name"> {{ item.name }}</span>
                    <span class="value">{{ item.value * 10 }}%</span>
                </div>
                <div class="border border-one"></div>
                <div class="border border-two"></div>
            </li>
        </ul>
    </div>
</template>

<script>
import echarts from '@/plugins/echarts';

import Title from '@components/common/Title';
import img1 from '@/assets/img/sell/sales_ratio_1.png';
import img2 from '@/assets/img/sell/sales_ratio_2.png';
import img3 from '@/assets/img/sell/sales_ratio_3.png';
import img4 from '@/assets/img/sell/sales_ratio_4.png';

export default {
    name: 'BrandSalesRatio',
    components: {
        Title
    },
    props: {
        /**
         * 比例数据
         */
        scale: {
            type: Array,
            default: () => ([])
        }
    },
    computed: {
        /**
         * 图标列表
         */
        imgList() {
            return [img1, img2, img3, img4];
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            const muEcharts = echarts.init(this.$refs.myEcharts);
            const option = {
                color: ['#2B94FB', '#16CEB9', '#6648FF', '#ff3b2d'],
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'pie',
                    data: this.scale,
                    radius: [50, 60],
                    center: ['25%', '50%'],
                    label: {
                        show: false
                    },
                    tooltip: {
                        show: false
                    },
                    emphasis: {
                        scale: false
                    }
                }, {
                    type: 'pie',
                    silent: false,
                    radius: [33, 43],
                    center: ['25%', '50%'],
                    data: [10, 10, 50, 30],
                    itemStyle: {
                        color: '#333333'
                    },
                    labelLine: {
                        show: false
                    },
                    tooltip: {
                        show: false
                    },
                    emphasis: {
                        scale: false
                    }
                }]
            };
            muEcharts.setOption(option);
        }
    }
};
</script>

<style lang="less"
       scoped>
.brand-sales-ratio {
    position: relative;

    .legend {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        top: 50%;
        right: 30px;
        width: 225px;
        transform: translateY(-50%);

        .legend-item {
            display: flex;
            align-items: center;
            position: relative;
            margin-top: 26px;
            margin-right: 53px;

            .left-img {
                width: 14px;
                height: 16px;
            }

            .right {
                display: flex;
                flex-direction: column;
                margin-left: 10px;
                text-align: center;

                .name {
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.42);
                }

                .value {
                    width: 61px;
                    height: 20px;
                    font-size: 9px;
                    line-height: 20px;
                    color: #ffffff;
                    background: linear-gradient(269deg, rgba(255, 255, 255, 0) 0%, #424242 100%);
                }
            }

            .border {
                position: absolute;
                background-color: #424951;
            }

            .border-one {
                top: 25px;
                left: 7px;
                width: 1px;
                height: 5px;
            }

            .border-two {
                top: 29px;
                left: 7px;
                width: 17px;
                height: 1px;
            }

            &:nth-of-type(-n+2) {
                margin-top: 0;
            }

            &:nth-of-type(2n) {
                margin-right: 0;
            }
        }
    }
}
</style>

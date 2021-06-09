<!-- 商品销售排名 -->
<template>
    <div class="merchandise-sales-rank">
        <Title title="商品销售排名"/>
<!--        <div ref="myEcharts"
             style="width: 100%; height: 170px;"></div>-->
        <ul class="charts">
            <li v-for="(item, index) in  list"
                :key="item.label"
                class="charts-item">
                <div :class="['left', rankClass[index]]">
                    <span class="top">TOP{{ index + 1 }}</span>
                    <span class="name"
                          :title="item.label">{{ item.label }}</span>
                </div>
                <div class="middle">
                    <Progress :percent="item.proportion"
                              hide-info
                              :stroke-width="8"
                              :stroke-color="colorList[index]"></Progress>
                    <div class="money">{{ item.money }}元</div>
                </div>
                <div class="right">
                    <span class="top">
                        <svg-icon v-if="item.sequential > 0"
                                  class-name="up"
                                  icon-class="up"></svg-icon>
                        <svg-icon v-else
                                  class-name="down"
                                  icon-class="down"></svg-icon>
                        {{ Math.abs(item.sequential) }}%
                    </span>
                    <span class="bottom">{{ item.sequential > 0 ? '环比增长' : '环比下降' }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'MerchandiseSalesRank',
    props: {
        /**
         * 数据
         */
        list: {
            type: Array,
            required: true,
            default: () => ([])
        }
    },
    computed: {
        /**
         * 类名列表
         */
        rankClass() {
            return ['one', 'two', 'three'];
        },
        /**
         * 颜色列表
         */
        colorList() {
            return ['#ff3b2d', '#1569cc', '#16ceb9'];
        }
    }
};
</script>

<style lang="less"
       scoped>
.merchandise-sales-rank {
    margin-top: 25px;

    .charts {
        margin-top: 25px;

        .charts-item {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            font-size: 14px;

            .left {
                display: flex;

                .name {
                    display: -webkit-box;
                    overflow: hidden;
                    margin-left: 7px;
                    width: 56px;
                    line-height: 16px;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                &.one {
                    color: rgba(255, 59, 45, 1);

                    .top {
                        color: rgba(255, 59, 45, 0.42);
                    }
                }

                &.two {
                    color: rgba(21, 105, 204, 1);

                    .top {
                        color: rgba(21, 105, 204, 0.42);
                    }
                }

                &.three {
                    color: rgba(22, 206, 185, 1);

                    .top {
                        color: rgba(22, 206, 185, 0.42);
                    }
                }
            }

            .middle {
                position: relative;
                margin: 0 5px;
                width: 328px;

                .money {
                    position: absolute;
                    top: -16px;
                    right: 0;
                    color: #ffffff;
                }

                /deep/ .ivu-progress-inner {
                    border-radius: 0;
                    background-color: rgba(223, 242, 255, 0.16);

                    .ivu-progress-bg {
                        border-radius: 0;
                    }
                }
            }

            .right {
                display: flex;
                flex-direction: column;

                .top {
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                }

                .bottom {
                    font-size: 8px;
                    line-height: 8px;
                    white-space: nowrap;
                    color: rgba(255, 255, 255, 0.4);
                }
            }
        }
    }
}
</style>

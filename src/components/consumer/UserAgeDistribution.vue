<template>
    <div>
        <Title title="用户年龄分布"/>
        <div class="age-con">
            <div v-for="(item, index) in barData"
                 :key="index"
                 class="age-item" >
                <div class="bar-body">
                    <div class="bar-item"
                         :style="{height: `${Math.abs(item.value)}%`}"></div>
                    <div v-if="item.value !== 0"
                         class="bar-text"
                         :style="{bottom: `${Math.abs(item.value)}%`}">
                        <div class="bar-text-num">
                            <span v-if="item.value > 0"
                                  style="color: #37D792;">↑</span>
                            <span v-else
                                  style="color: #D73737;">↓</span>
                            {{Math.abs(item.value)}}%
                        </div>
                        <div class="bar-text-title">环比{{item.value > 0 ? '增长' : '下降'}}</div>
                    </div>
                    <div class="bar-name">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserAgeDistribution',
    data() {
        return {
            num: 30
        };
    },
    computed: {
        barData() {
            return [
                { name: '0~ 18岁', value: 10 },
                { name: '19~ 28岁', value: -20 },
                { name: '29~ 35岁', value: 30 },
                { name: '36~ 50岁', value: 35 },
                { name: '51~ 60岁', value: -10 },
                { name: '61+岁', value: 15 }
            ];
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

        }
    }
};
</script>

<style scoped
       lang="less">
.age-con {
    width: 100%;
    height: 260px;
    display: flex;
    padding-top: 36px;
    .age-item {
        flex: 1;
        display: flex;
        justify-content: center;
        margin: 0 10px;

        .bar-body {
            position: relative;
            width: 8px;
            height: 100%;
            background: rgba(223, 242, 255, 0.16);
            .bar-item {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                background: linear-gradient(180deg, #49ACF9 0%, #0655BF 100%);
            }
            .bar-text {
                position: absolute;
                right: -50px;
                padding-bottom: 7px;
                padding-left: 5px;
                border-bottom: 1px #75C3FF solid;
                .bar-text-num {
                    font-size: 12px;
                    height: 15px;
                    line-height: 19px;
                    color: #75C3FF;
                    span {
                        display: inline-block;
                        margin-left: -2px;
                        margin-right: -3px;
                    }
                }
                .bar-text-title {
                    height: 10px;
                    font-size: 10px;
                    color: #FFFFFF;
                    opacity: 0.4;
                }
            }
            .bar-name {
                position: absolute;
                width: 35px;
                left: -40px;
                bottom: 0;
                font-size: 14px;
                line-height: 16px;
                color: #FFFFFF;
            }
        }
    }
}
</style>

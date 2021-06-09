<!-- 消费金额分布 -->
<template>
    <div class="consume-money-distribute">
        <Title title="消费金额分布"/>
        <div ref="myEcharts"
             style="width: 100%; height: 260px;"></div>
    </div>
</template>

<script>
import Title from '@components/common/Title';
import echarts from '@/plugins/echarts';

export default {
    name: 'Consume',
    components: {
        Title
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
                color: [
                    '#1d73d3',
                    '#73caf0',
                    '#ff3b2d',
                    '#ffbc36',
                    '#2b94fb',
                    '#6648ff',
                    '#16ceb9',
                    '#a82bfb'
                ],
                title: [{
                    text: '412.21',
                    x: '47%',
                    y: '45%',
                    textAlign: 'center',
                    textStyle: {
                        fontSize: 21,
                        fontWeight: '100',
                        fontFamily: 'trends',
                        color: '#ffffff'
                    }
                }, {
                    text: '万元',
                    x: '56%',
                    y: '48%',
                    textAlign: 'center',
                    textStyle: {
                        fontSize: 10,
                        fontWeight: '100',
                        fontFamily: 'trends',
                        color: '#ffffff'
                    }
                }, {
                    text: '{border|}\n\n总金额',
                    left: '49%',
                    top: '55%',
                    textAlign: 'center',
                    textStyle: {
                        fontSize: 11,
                        fontWeight: '100',
                        fontFamily: 'trends',
                        color: '#ffffff',
                        rich: {
                            border: {
                                width: 111,
                                height: 0,
                                borderWidth: 1,
                                borderColor: '#5a5a5a'
                            }
                        }
                    }
                }],
                series: [{
                    type: 'pie',
                    radius: ['56%', '80%'],
                    center: ['50%', '55%'],
                    label: {
                        color: '#ffffff',
                        formatter: '{b}:{d}%',
                        fontSize: 10,
                        fontFamily: 'trends',
                        shadowOffsetX: 10
                    },
                    labelLine: {
                        show: true,
                        length: 10,
                        length2: 0
                    },
                    data: [
                        { value: 1048, name: '50元及以下' },
                        { value: 335, name: '50-100元' },
                        { value: 310, name: '101-200元' },
                        { value: 251, name: '201-300元' },
                        { value: 234, name: '301-400元' },
                        { value: 147, name: '401-500元' },
                        { value: 135, name: '401-500元' },
                        { value: 102, name: '1000元及以上' }
                    ]
                }, {
                    type: 'pie',
                    radius: ['48%'],
                    center: ['50%', '55%'],
                    itemStyle: {
                        color: '#252525'
                    },
                    data: [100]
                }]
            };
            // 使用刚指定的配置项和数据显示图表。
            myEcharts.setOption(option);
        }
    }
};
</script>

<style scoped>
.consume-money-distribute {
    margin-top: 20px;
}
</style>

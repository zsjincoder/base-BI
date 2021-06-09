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
    methods: {
        /**
             * 初始化echarts
             */
        init() {
            const myEcharts = echarts.init(this.$refs.myEcharts);
            // 指定图表的配置项和数据
            const option = {
                color: ['#21CAC7', '#F03768', '#558BE9'],
                legend: {
                    bottom: '2%',
                    right: '5%',
                    itemHeight: 10,
                    itemWidth: 15,
                    icon: 'roundRect',
                    orient: 'vertical',
                    data: ['烟类', '酒类', '其他类'],
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 10
                    }
                },
                series: [
                    {
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: ['40%', '65%'],
                        clockwise: false,
                        label: {
                            color: 'auto',
                            formatter: '{d}%'
                        },
                        emphasis: {
                            scaleSize: 30
                        },
                        data: [
                            { value: 84.15, name: '烟类' },
                            { value: 15.85, name: '酒类' },
                            { value: 0, name: '其他类' }
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

<template>
    <div class="rankCharts">
        <div
            class="rank-charts_flex"
            v-for="(item, index) in tableData"
            :key="index"
        >
            <div class="rank-charts_flex--item20">
                <i>{{ index + 1 }}.</i>
                <span>{{ item.name }}</span>
            </div>
            <div class="rank-charts_flex--item">
                <div class="spot" :style="{ left: item.percentage + '%' }"></div>
            </div>
            <div class="rank-charts_flex--item15">
                <span>{{ item.sum }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        /**
         * 表格数据
         */
        tableData: {
            type: Array,
            default: () => ([])
        }
    },
    data() {
        return {

        };
    },
    created() {
    },
    computed: {
        barStyle() {
            const style = {};
            style.right = '15' + '%';
            return style;
        }
    }
};
</script>

<style lang="less" scoped>
.rankCharts {
    margin-top: 24px;

    .rank-charts_flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        text-align: center;

        .rank-charts_flex--item20 {
            width: 20%;
            color: #ffffff;

            i {
                float: left;
                padding-top: 5px;
                padding-right: 5px;
                font-style: normal;
                color: #5174d6;
            }
        }

        .rank-charts_flex--item {
            position: relative;
            margin: 0 15px;
            width: 65%;
            height: 10px;
            background: #243b63;
            background-image: repeating-linear-gradient(105deg, #243c61, #2b446c, #2b446c 4%);

            .spot {
                position: absolute;
                width: 5px;
                height: 10px;
                background-color: #19efcc;
            }
        }

        .rank-charts_flex--item15 {
            width: 15%;
            color: #ffffff;

            span {
                font-size: 16px;
                color: #1cefd0;
            }
        }
    }
}
</style>

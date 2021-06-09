<template>
    <div>
        <Title title="用户性别比例"/>
        <div class="water-polo-con">
            <div v-for="(item, index) in proportionList"
                 :key="index"
                 class="w-p-c-item">
                <Liquidfill :proportion="item.proportion"
                            :color="item.color"
                            :width="86"
                            :height="86"/>
                <div class="qiu-title">{{item.label}}</div>
                <div class="qiu-num"
                     :style="{color: item.color}">{{item.value}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Liquidfill from '@components/common/Liquidfill';
export default {
    name: 'UserGenderRatio',
    components: { Liquidfill },
    data() {
        return {};
    },
    computed: {
        proportionList() {
            return [{
                label: '男性用户',
                value: '12121',
                proportion: 0.2112,
                color: '#0E83DD'
            }, {
                label: '女性用户',
                value: '22545',
                proportion: 0.5,
                color: '#FF758A'
            }];
        }
    },
    methods: {}
};
</script>

<style scoped
       lang="less">
.water-polo-con {
    margin-top: 25px;
    width: 100%;
    display: flex;
    padding: 0 15px;
    justify-content: space-between;
    .w-p-c-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        .qiu-title {
            margin-top: 10px;
            font-size: 25px;
            line-height: 29px;
            color: #FFFFFF;
        }
        .qiu-num {
            font-size: 20px;
            line-height: 32px;
            color: #0E83DD;
        }
    }
}
</style>

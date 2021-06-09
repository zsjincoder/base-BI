<template>
    <div>
        <Title title="新用户实时新增"/>
        <ActivityTable :head-list="newUserHead"
                       :table-data="newUserData"/>
    </div>
</template>

<script>
import ActivityTable from '@components/activity/activityTable';

export default {
    name: 'NewUsersAreAddedInRealTime',
    components: {
        ActivityTable
    },
    data() {
        return {};
    },
    computed: {
        /**
         * 新用户 表格 表头
         */
        newUserHead() {
            return [{
                title: '购买注册人ID',
                key: 'registryId'
            }, {
                title: '性别',
                key: 'sex',
                width: 60
            }, {
                title: '注册时间',
                key: 'time'
            }];
        },
        /**
         * 新用户 表格 数据
         */
        newUserData() {
            return [{
                registryId: '90551',
                sex: '保密',
                time: '2021/3/25 16:17'
            }, {
                registryId: '90550',
                sex: '保密',
                time: '2021/3/25 16:16'
            }, {
                registryId: '90549',
                sex: '保密',
                time: '2021/3/25 16:05'
            }, {
                registryId: '90548',
                sex: '男',
                time: '2021/3/25 15:52'
            }, {
                registryId: '90547',
                sex: '男',
                time: '2021/3/25 15:41'
            }, {
                registryId: '90546',
                sex: '男',
                time: '2021/3/25 14:51'
            }];
        }
    },
    methods: {}
};
</script>

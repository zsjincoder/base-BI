<!-- 消费者画像 -->
<template>
    <div class="consumer page">
        <layout>
            <template v-slot:left>
                <OnlineInRealTime/>
                <NewUsersAreAddedInRealTime/>
            </template>
            <template v-slot:middle>
                <div class="mid-con">
                    <div class="mid-item">
                        <MemberDistribution/>
                    </div>
                    <div class="mid-item">
                        <TotalUsers/>
                        <div class="min-two">
                            <NewMembersAddedYesterday type="yesterday"/>
                            <NewMembersAddedYesterday type="today"/>
                        </div>
                        <UserGenderRatio/>
                    </div>
                </div>
            </template>
            <template v-slot:right>
                <AddUser/>
                <UserAgeDistribution/>
            </template>
        </layout>
    </div>
</template>

<script>
import Layout from '@components/layout/Layout';
import OnlineInRealTime from '@components/consumer/OnlineInRealTime';
import NewUsersAreAddedInRealTime from '@components/consumer/NewUsersAreAddedInRealTime';
import MemberDistribution from '@components/consumer/MemberDistribution';
import TotalUsers from '@components/consumer/TotalUsers';
import NewMembersAddedYesterday from '@components/consumer/NewMembersAddedYesterday';
import UserGenderRatio from '@components/consumer/UserGenderRatio';
import AddUser from '@components/consumer/AddUser';
import UserAgeDistribution from '@components/consumer/UserAgeDistribution';

export default {
    name: 'Consumer',
    components: { UserAgeDistribution, AddUser, UserGenderRatio, NewMembersAddedYesterday, TotalUsers, MemberDistribution, NewUsersAreAddedInRealTime, OnlineInRealTime, Layout }
};
</script>

<style scoped
       lang="less">
    .consumer {
        background: url("../assets/img/sell/sell_bg.png") no-repeat center;
        background-size: 100% 100%;
    }

    .mid-con {
        display: flex;

        .mid-item {
            width: 50%;
            height: 100%;

            .min-two {
                display: flex;
                justify-content: space-between;
                margin-bottom: 66px;
            }
        }
    }
</style>

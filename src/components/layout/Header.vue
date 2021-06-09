<template>
    <div class="header">
        <Nav />
        <h1 class="title">渝叶连锁直营终端数据中心</h1>
        <div class="tag"></div>
        <div class="time-weather">
            <div class="time">
                <div class="time-time">{{ time }}</div>
                <div class="time-date">{{ date }}</div>
            </div>
            <div class="weather">
                16℃~26℃
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';

import Nav from '@/components/layout/Nav';

export default {
    name: 'Header',
    components: {
        Nav
    },
    data() {
        return {
            // 时间
            time: '',
            // 日期
            date: ''
        };
    },
    mounted() {
        this.getCurrentTime();
    },
    methods: {
        getCurrentTime() {
            const timer = setInterval(() => {
                this.time = dayjs().format('HH:mm:ss');
                this.date = dayjs().format('YYYY-MM-DD');
            }, 1000);
            this.$once('hook:beforeDestroy', () => {
                clearInterval(timer);
            });
        }
    }
};
</script>

<style lang="less"
       scoped>
.header {
    overflow: hidden;
    position: relative;
    height: 90px;
    font-family: 'trends';
    background: #141414 url("../../assets/img/header.png") no-repeat  center;
    background-size: 100% 100%;

    .nav {
        position: absolute;
        bottom: 11px;
        left: 43px;
    }

    .title {
        position: absolute;
        top: 11px;
        left: 686px;
        width: 560px;
        height: 58px;
        font-size: 32px;
        line-height: 58px;
        text-align: center;
        letter-spacing: 6px;
        color: #ffffff;
        background: url("../../assets/img/header_title.png") no-repeat center;
        background-size: 100% 100%;
    }

    .tag {
        position: absolute;
        bottom: 11px;
        left: 1242px;
        width: 268px;
        height: 33px;
        background: url("../../assets/img/header_tag.png") no-repeat center;
        background-size: 100% 100%;
    }

    .time-weather {
        display: flex;
        align-items: center;
        position: absolute;
        right: 29px;
        bottom: 5px;

        .time {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-right: 9px;

            .time-time {
                font-size: 19px;
                color: #006cd7;
            }

            .time-date {
                font-size: 12px;
                color: #efefef;
            }
        }

        .weather {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            border-left: 2px solid #a8a8a8;
            width: 138px;
            height: 25px;
            font-size: 18px;
            color: rgba(239, 239, 239, 0.82);
            font-weight: 400;
        }
    }
}
</style>

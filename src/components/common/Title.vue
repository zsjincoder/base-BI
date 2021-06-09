<template>
    <div class="title">
        <div class="icon"></div>
        <div class="name">{{ title }}</div>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="less"
       scoped>
.title {
    display: flex;
    align-items: flex-start;

    .icon {
        margin-right: 8px;
        width: 18.91px;
        height: 18.91px;
        background: url("../../assets/img/title.png") no-repeat center;
        background-size: 100% 100%;
    }

    .name {
        font-size: 18px;
        line-height: 18px;
        color: #ffffff;
    }
}
</style>

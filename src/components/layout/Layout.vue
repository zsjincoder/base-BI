<template>
    <div class="layout">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
            <slot name="middle"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Layout'
};
</script>

<style lang="less"
       scoped>
.layout {
    display: grid;
    grid-template-columns: 450px 790px 480px;
    grid-template-rows: 100%;
    grid-column-gap: 60px;
    overflow: hidden;
    padding: 40px 28px 10px 42px;
    height: 100%;
}
</style>

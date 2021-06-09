<template>
    <svg :class="`svg-icon ${className}`" aria-hidden="true">
        <use :xlink:href="`#icon-${this.iconClass}`"/>
    </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        iconClass: {
            type: String,
            required: true
        },
        className: {
            type: String,
            default: ''
        }
    }
};
</script>

<style scoped>
.svg-icon {
    overflow: hidden;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
}
</style>

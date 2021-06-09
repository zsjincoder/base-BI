<template>
    <count-to :startVal='startVal'
              :endVal='endVal'
              separator=""
              :duration='2000'></count-to>
</template>

<script>
import countTo from 'vue-count-to';
export default {
    name: 'NumberChange',
    components: { countTo },
    props: {
        num: {
            type: Number,
            require: true,
            default: 0
        }
    },
    data() {
        return {
            startVal: 0,
            endVal: 0
        };
    },
    watch: {
        num: {
            handler(newvalue, oldvalue) {
                this.endVal = newvalue;
                this.startVal = oldvalue;
            },
            immediate: true
        }
    }
};
</script>

<style scoped>

</style>

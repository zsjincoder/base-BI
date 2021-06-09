<template>
    <div id="container" ref="container">
        <template v-if="ready">
            <slot></slot>
        </template>
    </div>
</template>

<script>
import debounce from 'lodash/debounce';

export default {
    name: 'Container',
    props: {
        options: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            // 容器 ref
            dom: null,
            // 容器的宽
            width: '',
            // 容器的高
            height: '',
            // 屏幕的宽
            originalWidth: '',
            // 屏幕的高
            originalHeight: '',
            // 是否已经准备好
            ready: false
        };
    },
    computed: {
        _onResize() {
            return debounce(this.onResize, 300);
        }
    },
    async mounted() {
        this.ready = false;
        await this.init();
        this.updateSize();
        this.updateScale();
        window.addEventListener('resize', this._onResize);
        let observer = new MutationObserver(this.onResize);
        observer.observe(this.dom, {
            attributes: true,
            attributeFilter: ['style'],
            attributeOldvalue: true
        });
        this.$once('hook:beforeDestroy', () => {
            window.removeEventListener('resize', this._onResize);
            if (observer) {
                observer.disconnect();
                observer.takeRecords();
                observer = null;
            }
        });
        this.ready = true;
    },
    methods: {
        async onResize() {
            await this.init();
            this.updateScale();
        },
        /**
         * 初始化
         */
        async init() {
            await this.$nextTick();
            this.dom = this.$refs.container;
            const {
                width,
                height
            } = this.options;
            if (width && height) {
                this.width = width;
                this.height = height;
            } else {
                this.width = this.dom.clientWidth;
                this.height = this.dom.clientHeight;
            }
            if (!this.originalWidth || !this.originalHeight) {
                this.originalWidth = window.screen.width;
                this.originalHeight = window.screen.height;
            }
        },
        /**
         * 更新style
         */
        updateSize() {
            const {
                width,
                height,
                originalWidth,
                originalHeight
            } = this;
            let domWith, domHeight;
            if (width && height) {
                domWith = width + 'px';
                domHeight = height + 'px';
            } else {
                domWith = originalWidth + 'px';
                domHeight = originalHeight + 'px';
            }
            this.dom.style.width = domWith;
            this.dom.style.height = domHeight;
        },
        /**
         * 更新缩放
         */
        updateScale() {
            const {
                width,
                height,
                originalWidth,
                originalHeight
            } = this;
            const viewportWidth = document.body.clientWidth;
            const viewportHeight = document.body.clientHeight;
            const realWidth = width || originalWidth;
            const realHeight = height || originalHeight;
            this.dom.style.transform = `scale(${viewportWidth / realWidth}, ${viewportHeight / realHeight})`;
        }
    }
};
</script>

<style>
#container {
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    transform-origin: left top;
}
</style>

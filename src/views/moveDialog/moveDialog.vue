<template>
    <div
        class="moveDialog"
        ref="dialog"
        v-show="visible"
        :style="computedWidth"
    >
        <div ref="headDom" class="moveDialog__header">
            <span class="moveDialog__title">{{title}}</span>
            <span class="moveDialog__close__button  el-icon-close" @click="closeDialog"></span>
        </div>

        <div class="moveDialog__body" :style="computedBodyHeight">
            <slot></slot>
        </div>

        <div class="moveDialog__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "moveDialog",
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
            width: {
                type: String,
                default: ''
            },
            height: {
                type: String,
                default: ''
            }
        },
        mounted() {
            let headDom = this.$refs.headDom;
            let dialog = this.$refs.dialog;
            headDom.onmousedown = (e) => {
                let disX = e.offsetX;
                let disY = e.offsetY;
                document.onmousemove = (e) => {
                    dialog.style.left = `${e.clientX - disX}px`;
                    dialog.style.top = `${e.clientY - disY}px`;
                };

                document.onmouseup = () => {
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
            }

        },
        methods: {
            closeDialog() {
                this.$emit('update:visible', false)
            }
        },
        computed: {
            computedWidth() {
                let style = {};
                if (this.width) {
                    if (this.width.indexOf('px') > 0) {
                        style.width = this.width
                    }
                    else {
                        style.width = `${this.width}px`
                    }
                }
                return style
            },
            computedBodyHeight() {
                let style = {};
                if (this.height) {
                    if (this.height.indexOf('px') > 0) {
                        style.height = this.height
                    }
                    else {
                        style.height = `${this.height}px`
                    }
                    style.overflow = 'auto';
                }
                return style
            }
        }
    }
</script>

<style lang="scss" scoped>
    .moveDialog {
        position: fixed;
        width: 805px;
        background: #FFFFFF;
        z-index: 9999;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        .moveDialog__header {
            position: relative;
            height: 48px;
            padding: 12px 10px;
            cursor: pointer;
            border-bottom: 1px solid #dcdfe6;
            .moveDialog__title {
                font-size: 16px;
                color: black;
            }
            .moveDialog__close__button {
                position: absolute;
                line-height: 24px;
                right: 20px;
            }
        }
        .moveDialog__body {
            padding: 15px 10px;
        }

        .moveDialog__footer {
            padding: 8px 10px;
        }
    }
</style>
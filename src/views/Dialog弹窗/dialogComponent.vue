<template>
    <div class="padding-10">
        <div class="container">
            <div class="content">
                <div ref="basicDialog" class="header-nav-divider">弹窗组件</div>
                <p class="module-introduced">本例只展示基本用法，更多详情<a href="https://element.eleme.cn/#/zh-CN/component/dialog"
                                                              target="_blank">element-uiDialog组件</a></p>

                <el-button type="primary" size="mini" @click="openDialog">打开弹窗</el-button>
                <p class="module-introduced">title用于指明弹窗标题,before-close用于关闭弹窗回调，一般会在这里处理关闭弹窗前干的事情,done方法关闭弹窗</p>

                <el-dialog :title="title"
                           width="1190px"
                           lock-scroll
                           :before-close="handleClose"
                           :visible.sync="visiable">
                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" size="mini" @click="handleClose">保存</el-button>
                    </div>
                </el-dialog>

                <codemirror class="margin-top20" v-model="basicDialog"/>
            </div>
        </div>
    </div>
</template>

<script>
    import basicDialog from './dialogCode'
    export default {
        name: "dialogComponent",
        data() {
            return {
                title: '弹窗演示',
                visiable: false,
                basicDialog: basicDialog.basicDialog
            }
        },
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: 'basicDialog',
                    title: "dialog弹窗"
                }
            ]);
        },
        methods: {
            openDialog() {
                this.visiable = true;
            },
            handleClose(done) {
                this.visiable = false
            },
        }
    }
</script>

<style scoped>

</style>
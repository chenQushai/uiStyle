<template>
    <div class="container" style="overflow:auto;">
        <moveDialog
            :visible.sync="show"
            title="可移动的弹窗"
            width="980px"
        >
            <div>
                主题区
            </div>
            <template v-slot:footer>
                <el-button>取 消</el-button>
                <el-button>确 定</el-button>
            </template>
        </moveDialog>
        <div ref="moveDialog" class="header-nav-divider" style="margin-top: 200px;">可移动弹窗</div>
        <p class="module-introduced">
            此组件用于可移动的弹窗
        </p>
        <p class="module-introduced"> 1.visible 默认fasle,可通过添加.sync后缀。</p>
        <p class="module-introduced"> 2.title，弹窗名称。</p>
        <p class="module-introduced"> 3.width，弹窗宽度。</p>
        <p class="module-introduced"> 4.默认内容插入到弹窗主题，插槽slot-footer 可添加底部功能</p>


        <codemirror class="margin-top20" v-model="dialog"/>
    </div>
</template>

<script>
    import moveDialog from './moveDialog'
    import moveDialogCode from './dialogCode'
    export default {
        name: "moveDialogPage",
        data() {
            return {
                dialog: moveDialogCode.moveDialog,
                show: true
            }
        },
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: "moveDialog",
                    title: '页头'
                }
            ]);
        },
        components: {
            moveDialog
        }
    }
</script>

<style scoped>

</style>
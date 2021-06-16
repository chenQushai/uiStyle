<template>

    <page-header title="测试标题方面考虑是否加密老师纽芬兰南斯拉夫">
        <template v-slot:buttonContent>
            <el-button size="mini">默认按钮</el-button>
            <el-button size="mini">默认按钮</el-button>
            <el-button size="mini">默认按钮</el-button>
            <el-button size="mini">默认按钮</el-button>
            <el-button size="mini">默认按钮</el-button>
            <el-button size="mini">默认按钮</el-button>
            <el-button size="mini">默认按钮</el-button>
            <el-button size="mini">默认按钮</el-button>
            <el-button size="mini">默认按钮</el-button>
        </template>
    </page-header>

</template>

<script>
    export default {
        name: "pageHead",
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: "pageHeader",
                    title: '页头'
                }
            ]);
        }
    }
</script>

<style scoped>

</style>
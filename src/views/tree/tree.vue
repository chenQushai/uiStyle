<template>
    <div class="padding-10">
        <div class="container">
            <div class="content">
                <div ref="basisTree" class="header-nav-divider">树形组件</div>
                <p class="module-introduced">本系统只介绍基本树形，更多详情<a href="https://element.eleme.cn/#/zh-CN/component/tree" target="_blank">element-ui树形组件</a></p>
                <el-tree :data="data"
                         @node-click="handleNodeClick">
                </el-tree>

                <codemirror class="margin-top20" v-model="basicTree"/>

                <p ref="selectTrees" class="module-introduced">选中树菜单项，此时在外层div添加类select-tree-bg-blue</p>

                <div class="select-tree-bg-blue">
                    <el-tree
                            :data="data"
                            default-expand-all
                            @node-click="handleNodeClick">
                    </el-tree>
                </div>

                <codemirror class="margin-top20" v-model="selectTree"/>


            </div>
        </div>
    </div>
</template>

<script>
    import basicTree from './treeCode'
    export default {
        name: "tree",
        data() {
            return {
                data: [
                    {
                        label: '一级',
                        children: [{
                            label: '一级 1',
                            children: [{
                                label: '二级 1-1',
                                children: [{
                                    label: '三级 1-1-1'
                                }]
                            }]
                        }, {
                            label: '一级 2',
                            children: [{
                                label: '二级 2-1',
                                children: [{
                                    label: '三级 2-1-1'
                                }]
                            }, {
                                label: '二级 2-2',
                                children: [{
                                    label: '三级 2-2-1'
                                }]
                            }]
                        }, {
                            label: '一级 3',
                            children: [{
                                label: '二级 3-1',
                                children: [{
                                    label: '三级 3-1-1'
                                }]
                            }, {
                                label: '二级 3-2',
                                children: [{
                                    label: '三级 3-2-1'
                                }]
                            }]
                        }]
                    },
                ],
                basicTree: basicTree.basicTree,
                selectTree:basicTree.selectTree
            }
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            },
        },
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: 'basisTree',
                    title: "基础树形"
                },
                {
                    el: 'selectTrees',
                    title: '选中树形样式'
                }

            ]);
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="padding-10">
        <div class="container">
            <div class="content">
                <div ref="basisTable" class="header-nav-divider">基础表格样式</div>

                <p class="module-introduced">此处只演示基础表格样式,更多表格详见<a
                        href="https://element.eleme.cn/#/zh-CN/component/table" target="_blank">element-ui表格组件</a></p>

                <el-table
                        :data="tableData"
                        :height="268"
                        stripe
                        border
                        highlight-current-row
                        :header-row-style="{background:'#F2F7FF'}"
                        :header-cell-style="{background:'transparent'}"
                        style="width: 100%">
                    <el-table-column
                            label="序号"
                            type="index"
                            width="70">
                    </el-table-column>
                    <el-table-column
                            label="字段"
                            align="left"
                            prop="zd">
                    </el-table-column>
                    <el-table-column
                            label="是否只读"
                            align="left"
                            prop="bt">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.isOnlyRead">备选项</el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="更新字段"
                            align="left"
                            prop="cd">
                    </el-table-column>
                    <el-table-column
                            label="附带更新字段"
                            align="left"
                            prop="cd">
                    </el-table-column>
                    <el-table-column
                            label="写入字段"
                            align="left"
                            prop="xrzd">
                    </el-table-column>
                </el-table>

                <codemirror class="margin-top20" v-model="basicTable"/>
            </div>
        </div>
    </div>
</template>

<script>
    import tableCode from './tableCode'

    export default {
        name: "table",
        data() {
            return {
                tableData: [
                    {
                        zd: 'CMB',
                        bt: '编码655',
                        cd: '150',
                        isOnlyRead: true,
                        isChecked: true
                    }
                ],
                basicTable: tableCode.basicTable
            }
        },
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: 'basisTable',
                    title: "基础表格"
                },
            ]);
        }
    }
</script>

<style scoped>

</style>
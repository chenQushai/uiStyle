<template>
    <div class="padding-10">
        <div class="container">
            <div class="content">
                <div ref="basisTable" class="header-nav-divider">基础表格样式</div>

                <p class="module-introduced">此处只演示基础表格样式,更多表格详见<a
                        href="https://element.eleme.cn/tableComponent.vue#/zh-CN/component/table" target="_blank">element-ui表格组件</a>
                </p>

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


                <p ref="rowStyle" class="module-introduced">当表格行类需要根据条件修改样式时,添加row-style属性，回调方法返回样式对象</p>

                <el-table
                        :data="tableData"
                        :height="268"
                        stripe
                        border
                        highlight-current-row
                        :header-row-style="{background:'#F2F7FF'}"
                        :header-cell-style="{background:'transparent'}"
                        :row-style="renderRelationed"
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

                <codemirror class="margin-top20" v-model="rowStyle"/>

                <p ref="selectRow" class="module-introduced">当一些表格点击时高亮选中行，在组件外层div添加类table-height-current</p>

                <div class="table-height-current">
                    <el-table
                            :data="sysData"
                            :height="288"
                            stripe
                            border
                            highlight-current-row
                            :header-row-style="{background:'#F2F7FF'}"
                            :header-cell-style="{background:'transparent'}"
                            style="width: 100%">
                        <el-table-column
                                label="编码"
                                align="center"
                                prop="code"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                label="系统名称"
                                align="center"
                                prop="name">
                        </el-table-column>
                    </el-table>
                </div>

                <codemirror class="margin-top20" v-model="selectCurrent"/>

                <p ref="operatorColumn" class="module-introduced">当需要在表格里添加操作栏时在column组件里添加template插槽</p>

                <el-table
                        :data="sysData"
                        :height="288"
                        stripe
                        border
                        highlight-current-row
                        :header-row-style="{background:'#F2F7FF'}"
                        :header-cell-style="{background:'transparent'}"
                        style="width: 100%">
                    <el-table-column
                            label="编码"
                            align="center"
                            prop="code"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            label="系统名称"
                            align="center"
                            prop="name">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            align="center"
                            width="180">
                        <template slot-scope="scope">
                            <span class="blue-main pointer">编辑</span>
                            <span class="green-main margin-left10 pointer">保存</span>
                            <span class="red-main margin-left10 pointer">删除</span>
                            <span class="red-main margin-left10 pointer">停用</span>
                        </template>
                    </el-table-column>
                </el-table>

                <codemirror class="margin-top20" v-model="operatorRow"/>

                <div ref="pagination" class="header-nav-divider">分页器</div>

                <p class="module-introduced">多数情况下，数据量过多时，我们会进行分页处理。更多详情
                    <a href="https://element.eleme.cn/#/zh-CN/component/pagination" target="_blank">element-ui分页组件</a>
                </p>

                <div class="pagination">
                    <el-pagination
                            background
                            :page-sizes="[10, 20,30]"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :page-size="pageSize"
                            :current-page.sync="currentPage"
                            layout=" total,prev, pager, next, sizes"
                            :total="total" class="right">
                    </el-pagination>
                </div>

                <codemirror class="margin-top20" v-model="pagination"/>


            </div>
        </div>
    </div>
</template>

<script>
    import tableCode from './tableCode'

    export default {
        name: "tableComponent",
        data() {
            return {
                pageSize: 10,
                currentPage: 1,
                total: 100,
                tableData: [
                    {
                        zd: 'CMB',
                        bt: '编码655',
                        cd: '150',
                        isOnlyRead: true,
                        isChecked: true,
                        iscolor: true
                    },
                    {
                        zd: 'CMB',
                        bt: '编码655',
                        cd: '150',
                        isOnlyRead: true,
                        isChecked: true,
                        iscolor: false
                    }
                ],
                sysData: [
                    {
                        code: '266646',
                        name: '医疗保健中心'
                    },
                    {
                        code: '566566',
                        name: '医疗保健中心'
                    }],
                basicTable: tableCode.basicTable,
                rowStyle: tableCode.rowStyle,
                selectCurrent: tableCode.selectCurrent,
                operatorRow: tableCode.operatorRow,
                pagination: tableCode.pagination,
            }
        },
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: 'basisTable',
                    title: "基础表格"
                },
                {
                    el: 'rowStyle',
                    title: '行类样式'
                },
                {
                    el: 'selectRow',
                    title: '选中表格行'
                },
                {
                    el: 'operatorColumn',
                    title: '操作列'
                },
                {
                    el: 'pagination',
                    title: '分页器'
                }

            ]);
        },
        methods: {
            //计算关联行样式
            renderRelationed(row, rowIndex) {
                if (row.row.iscolor) {
                    return {
                        color: 'red'
                    }
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
        }
    }
</script>

<style scoped>
    .seamless-warp {
        height: 229px;
        overflow: hidden;
    }
</style>
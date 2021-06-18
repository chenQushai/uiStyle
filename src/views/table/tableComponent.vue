<template>
    <div class="padding-10">
        <div class="container">
            <div class="content">

                <div ref="basisTable1" class="header-nav-divider">对齐</div>
                <p class="module-introduced">
                    表格内的信息通过对齐，会更加规范易理解，给用户视觉上的统一感，且视线流动顺畅，能够让人快速的捕捉到所要的内容。
                </p>
                <p class="module-introduced"> 1.文本信息左对齐，因为现代人的阅读方式习惯从左到右，符合正常的心智(注:时间左对齐)﹔</p>
                <p class="module-introduced"> 2.数据信息右对齐，更加方便数字大小的直观对比（如价格、数据统计，带有数据对比的)﹔</p>
                <p class="module-introduced"> 3.固定内容居中对齐，更好的信息呈现及表格空间的节省(如1首列序号，建议采用两位展示“01");</p>
                <p class="module-introduced"> 4.表头与信息内容对齐方式一致，一致性以达到简化，降低视觉噪音。</p>

                <div ref="basisTable" class="header-nav-divider">斑马纹基础表格样式</div>

                <p class="module-introduced">此处只演示基础表格样式,更多表格详见<a
                    href="https://element.eleme.cn/#/zh-CN/component/table" target="_blank">element-ui表格组件</a>
                </p>

                <el-table
                    :data="tableData"
                    :height="268"
                    stripe
                    highlight-current-row
                    :header-row-style="{background:'#E0EFFF'}"
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


                <div ref="borderTable" class="header-nav-divider">斑马纹线框表格</div>
                <p class="module-introduced">线框和边框表格</p>
                <el-table
                    :data="tableData"
                    :height="268"
                    stripe
                    border
                    highlight-current-row
                    :header-row-style="{background:'#E0EFFF',color:'#262626'}"
                    :header-cell-style="{background:'transparent',borderBottom: '1px solid #B2D7FF'}"
                    :cell-style="{color: '#595959'}"
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

                <codemirror class="margin-top20" v-model="borderTable"/>


                <p ref="rowStyle" class="module-introduced">当表格行类需要根据条件修改样式时,添加row-style属性，回调方法返回样式对象</p>
                <p class="module-introduced">常常会在表格中出现颜色区分不同的例子，我们会用图列展示这是只需在表格上方添加div类barge-content,背景颜色根据背景颜色类</p>

                <div class="barge-content">
                    <div class="barge-item">
                        <div class="barge-rect orange-bg"></div>
                        <div class="barge-des">精神毒麻</div>
                    </div>
                    <div class="barge-item">
                        <div class="barge-rect gray-bg"></div>
                        <div class="barge-des">长期</div>
                    </div>
                    <div class="barge-item">
                        <div class="barge-rect green-bg"></div>
                        <div class="barge-des">临时</div>
                    </div>
                    <div class="barge-item">
                        <div class="barge-rect blue-bg"></div>
                        <div class="barge-des">出院带药</div>
                    </div>
                </div>
                <el-table
                    :data="tableData"
                    :height="268"
                    stripe
                    border
                    highlight-current-row
                    :header-row-style="{background:'#E0EFFF'}"
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
                        :header-row-style="{background:'#E0EFFF'}"
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
                    :header-row-style="{background:'#E0EFFF'}"
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
                        width="220">
                        <template slot-scope="scope">
                            <span class="blue-main pointer">编辑</span>
                            <span class="green-main margin-left16 pointer">保存</span>
                            <span class="red-main margin-left16 pointer">删除</span>
                            <span class="red-main margin-left16 pointer">停用</span>
                        </template>
                    </el-table-column>
                </el-table>

                <codemirror class="margin-top20" v-model="operatorRow"/>

                <p ref="editTable" class="module-introduced">编辑表格，当需要编辑表格时，在每个列中插入template以及编辑框，编辑框可以是任意表单</p>

                <el-table
                    :data="editTable"
                    :height="288"
                    stripe
                    border
                    highlight-current-row
                    :header-row-style="{background:'#E0EFFF'}"
                    :header-cell-style="{background:'transparent'}"
                    style="width: 100%">
                    <el-table-column
                        label="编码"
                        align="center"
                        prop="code"
                        min-width="120">
                        <template slot-scope="scope">
                            <span v-if="!scope.row.edit">{{scope.row.code}}</span>
                            <el-input v-if="scope.row.edit" v-model="scope.row.code" size="mini"></el-input>
                        </template>
                    </el-table-column>

                    <el-table-column
                        label="名称"
                        align="left"
                        prop="name"
                        min-width="150">
                        <template slot-scope="scope">
                            <span v-if="!scope.row.edit">{{scope.row.name}}</span>
                            <el-input v-if="scope.row.edit" v-model="scope.row.name" size="mini"></el-input>
                        </template>
                    </el-table-column>

                    <el-table-column
                        label="拼音码"
                        align="left"
                        prop="pym"
                        width="100">
                        <template slot-scope="scope">
                            <span v-if="!scope.row.edit">{{scope.row.pym}}</span>
                            <el-input v-if="scope.row.edit" v-model="scope.row.pym" size="mini"></el-input>
                        </template>
                    </el-table-column>

                    <el-table-column
                        label="可用性"
                        align="center"
                        prop="canUse"
                        width="70">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.canUse"></el-checkbox>
                        </template>
                    </el-table-column>

                    <el-table-column
                        label="备注"
                        align="left"
                        prop="bz"
                        min-width="220">
                        <template slot-scope="scope">
                            <span v-if="!scope.row.edit">{{scope.row.bz}}</span>
                            <el-input v-if="scope.row.edit" v-model="scope.row.bz"></el-input>
                        </template>
                    </el-table-column>

                    <el-table-column
                        label="操作"
                        align="left"
                        prop="bz"
                        width="220">
                        <template slot-scope="scope">
                            <span class="blue-main pointer" v-if="!scope.row.edit" @click="editRow(scope.row)">编辑</span>
                            <span class="green-main pointer margin-right16" v-if="scope.row.edit"
                                  @click="confirmRow(scope.row)">保存</span>
                            <span class="red-main margin-left10 pointer" @click="delRow(scope.$index)">删除</span>
                        </template>
                    </el-table-column>
                </el-table>

                <codemirror class="margin-top20" v-model="editTableRow"/>


                <p ref="editCell" class="module-introduced">
                    编辑单元格，需要拉取https://github.com/chenQushai/vue-component.git编辑cell组件,edit-cell组件暂只支
                    持input框和date-pick框，v-model绑定值，type值类型，text:input框，date: date-pick</p>

                <el-table
                    :data="sysData"
                    :height="288"
                    stripe
                    border
                    highlight-current-row
                    :header-row-style="{background:'#E0EFFF'}"
                    :header-cell-style="{background:'transparent'}"
                    style="width: 100%">
                    <el-table-column
                        label="编码"
                        align="center"
                        prop="code"
                        width="120">
                        <template slot-scope="scope">
                            <editable-cell v-model="scope.row.code" :type="'text'"></editable-cell>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="系统名称"
                        align="center"
                        prop="name">
                        <template slot-scope="scope">
                            <editable-cell v-model="scope.row.name" :type="'text'"></editable-cell>
                        </template>
                    </el-table-column>
                </el-table>


                <codemirror class="margin-top20" v-model="editTableCell"/>


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
                        layout=" total,prev, pager, next, sizes,jumper"
                        :total="total" class="right">
                    </el-pagination>
                </div>

                <codemirror class="margin-top20" v-model="pagination"/>

                <div ref="checkTable" class="header-nav-divider">复选框表格</div>

                <el-table
                    :data="sysData"
                    :height="288"
                    stripe
                    border
                    highlight-current-row
                    :header-row-style="{background:'#E0EFFF'}"
                    :header-cell-style="{background:'transparent'}"
                    style="width: 100%">
                    <el-table-column
                        type="selection"
                        align="left"
                        width="55">
                    </el-table-column>
                    <el-table-column
                        label="编码"
                        align="center"
                        prop="code"
                        width="120">
                        <template slot-scope="scope">
                            <editable-cell v-model="scope.row.code" :type="'text'"></editable-cell>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="系统名称"
                        align="center"
                        prop="name">
                        <template slot-scope="scope">
                            <editable-cell v-model="scope.row.name" :type="'text'"></editable-cell>
                        </template>
                    </el-table-column>
                </el-table>

                <div ref="staticTable" class="header-nav-divider">静态表格</div>
                <div>
                    <el-row class="row-list">
                        <el-col :span="2" class="col-item text-right">
                            <div class="cell">姓名:</div>
                        </el-col>
                        <el-col :span="2" class="col-item">
                            <div class="cell"></div>
                        </el-col>

                        <el-col :span="3" class="col-item text-right">
                            <div class="cell">工号:</div>
                        </el-col>
                        <el-col :span="12" class="col-item">
                            <div class="cell"></div>
                        </el-col>

                        <el-col :span="2" class="col-item text-right">
                            <div class="cell">科室:</div>
                        </el-col>
                        <el-col :span="3" class="col-item">
                            <div class="cell"></div>
                        </el-col>
                    </el-row>

                    <el-row class="row-list">
                        <el-col :span="2" class="col-item text-right">
                            <div class="cell">时间:</div>
                        </el-col>
                        <el-col :span="2" class="col-item">
                            <div class="cell"></div>
                        </el-col>

                        <el-col :span="3" class="col-item text-right">
                            <div class="cell">标题:</div>
                        </el-col>
                        <el-col :span="12" class="col-item">
                            <div class="cell"></div>
                        </el-col>

                        <el-col :span="2" class="col-item text-right">
                            <div class="cell">金额:</div>
                        </el-col>
                        <el-col :span="3" class="col-item">
                            <div class="cell"></div>
                        </el-col>
                    </el-row>

                    <el-row class="row-list">
                        <el-col :span="2" class="col-item text-right">
                            <div class="cell">类型:</div>
                        </el-col>
                        <el-col :span="2" class="col-item">
                            <div class="cell"></div>
                        </el-col>

                        <el-col :span="3" class="col-item text-right">
                            <div class="cell">奖惩单位:</div>
                        </el-col>
                        <el-col :span="12" class="col-item">
                            <div class="cell"></div>
                        </el-col>

                        <el-col :span="2" class="col-item">
                            <div class="cell">审核人:</div>
                        </el-col>
                        <el-col :span="3" class="col-item">
                            <div class="cell"></div>
                        </el-col>
                    </el-row>
                </div>

                <codemirror class="margin-top20" v-model="staticTable"/>
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
                editTable: [
                    {
                        code: '201251452',
                        name: '这是一条很长的名称',
                        pym: 'Xds',
                        canUse: true,
                        bz: '备注',
                        edit: false
                    },
                    {
                        code: '2012',
                        name: '这是一条很长的名称',
                        pym: 'ss',
                        canUse: true,
                        bz: '备注',
                        edit: false
                    }
                ],
                basicTable: tableCode.basicTable,
                borderTable: tableCode.borderTable,
                rowStyle: tableCode.rowStyle,
                selectCurrent: tableCode.selectCurrent,
                operatorRow: tableCode.operatorRow,
                editTableRow: tableCode.editTableRow,
                editTableCell: tableCode.editTableCell,
                pagination: tableCode.pagination,
                staticTable: tableCode.staticTable
            }
        },
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: 'basisTable',
                    title: "斑马纹基础表格"
                },
                {
                    el: 'borderTable',
                    title: "线框表格"
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
                    el: 'editTable',
                    title: '编辑表格'
                },
                {
                    el: 'editCell',
                    title: '编辑单元格'
                },
                {
                    el: 'pagination',
                    title: '分页器'
                },
                {
                    el: 'checkTable',
                    title: '复选框表格'
                },
                {
                    el: 'staticTable',
                    title: '静态表格'
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

            editRow(row) {
                row.edit = true;
            },
            confirmRow(row) {
                row.edit = false;
            },
            delRow(index) {
                this.editTable.splice(index, 1)
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
export default {
    basicTable: `
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
    `
}
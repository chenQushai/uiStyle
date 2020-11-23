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
    `,

    rowStyle: `
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
    
    
    <!--methods-->
    methods: {
       renderRelationed(row, rowIndex) {
           if (row.row.iscolor) {
                return {
                        color: 'red'
                }
           }
       }
    }
    `,

    selectCurrent: `
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
    `,

    operatorRow: `
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
    `,

    pagination: `
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
    
    <!--methods-->
    handleSizeChange(val) {
         console.log('每页val条');
    },
    handleCurrentChange(val) {
        console.log(当前页: val);
    }
    `

}
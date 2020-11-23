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

    editTableRow: `
    <el-table
         :data="editTable"
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
              min-width="120">
             <template slot-scope="scope">
                 <span v-if="!scope.row.edit">{{scope.row.code}}</span>
                 <el-input  v-if="scope.row.edit" v-model="scope.row.code" size="mini"></el-input>
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
                 <span class="green-main pointer" v-if="scope.row.edit"
                     @click="confirmRow(scope.row)">保存</span>
                 <span class="red-main margin-left10 pointer" @click="delRow(scope.$index)">删除</span>
             </template>
         </el-table-column>
    </el-table>
    
    <!--data-->
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
     
     <!--methods-->
     editRow(row) {
          row.edit = true;
     },
     confirmRow(row) {
         row.edit = false;
     },
     delRow(index) {
         this.editTable.splice(index, 1)
     },
    `,

    editTableCell: `
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
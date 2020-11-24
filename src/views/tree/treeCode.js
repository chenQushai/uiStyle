export default {
    basicTree: `
     <el-tree :data="data"
          @node-click="handleNodeClick">
     </el-tree>
     
    <!--methods-->
    handleNodeClick(data) {
         console.log(data);
    },
    `,

    selectTree: `
     <div class="select-tree-bg-blue">
        <el-tree
            :data="data"
            default-expand-all
            @node-click="handleNodeClick">
        </el-tree>
     </div>
    `
}
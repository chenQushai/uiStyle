export default {
    basicDialog: `
     <el-dialog :title="title"
         width="1190px"
         lock-scroll
         :before-close="handleClose"
         :visible.sync="visiable">
         <div slot="footer" class="dialog-footer">
            <el-button type="primary" size="mini" @click="handleClose">保存</el-button>
         </div>
     </el-dialog>
     
     <!--data-->
     title: '弹窗演示'
     visiable: false
     <!--methods   -->
     openDialog() {
        this.visiable = true;
     },
     handleClose(done) {
         this.visiable = false
     },
    `
}
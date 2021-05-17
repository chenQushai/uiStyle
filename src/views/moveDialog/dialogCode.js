export default  {
    moveDialog: `
         <moveDialog
            :visible.sync="show"
            title="可移动的弹窗"
            width="980px"
        >
            <div>
                主题区
            </div>
            <template v-slot:footer>
                <el-button>取 消</el-button>
                <el-button>确 定</el-button>
            </template>
        </moveDialog>
    `
}
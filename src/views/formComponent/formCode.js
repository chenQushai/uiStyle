export default  {
    btn: `
    <el-button size="mini">默认按钮</el-button>
    <el-button type="primary" size="mini">主要按钮</el-button>
    <el-button type="success" size="mini">成功按钮</el-button>
    <el-button type="info" size="mini">信息按钮</el-button>
    <el-button type="warning" size="mini">警告按钮</el-button>
    <el-button type="danger" size="mini">危险按钮</el-button> 
    `,

    basicRadio: `
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    `,

    radioGroup: `
    <el-radio-group v-model="radio1">
         <el-radio :label="3">备选项</el-radio>
         <el-radio :label="6">备选项</el-radio>
         <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
    `,

    checkedCode: `
    <el-checkbox v-model="checked">备选项</el-checkbox>
    
    <!--data-->
    checked: true
    `,
    inputCode: `
    <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input>
    <!--data-->
    input: ''
    `,


    selectCode: `
     <el-select v-model="selectValue" placeholder="请选择">
          <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
           </el-option>
     </el-select>
    `

}
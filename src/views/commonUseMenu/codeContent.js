export default {
    fourListFourWorld: ` 
    <el-form ref="form" :model="form" :inline="true" size="mini">
        <div class="form-box border-gray">
            <p class="divider-tag">4列4词表单</p>
            <el-row :gutter="10">
                <el-col :span="6" class="el-world-4">
                     <el-form-item label="姓名:">
                         <el-input v-model="form.name"></el-input>
                     </el-form-item>
                </el-col>             

                <el-col :span="6" class="el-world-4">
                    <el-form-item label="身份证号:">
                       <el-input v-model="form.idCard"></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="6" class="el-world-4">
                    <el-form-item label="年龄:">
                         <el-input v-model="form.age"></el-input>
                    </el-form-item>
                </el-col>

                 <el-col :span="6" class="el-world-4">
                      <el-form-item label="性别:">
                           <el-radio v-model="form.gender" label="男">男</el-radio>
                           <el-radio v-model="form.gender" label="女">女</el-radio>
                      </el-form-item>
                 </el-col>        
            </el-row>
        </div>
    </el-form>
`,
    fourListSixWorld: `
    <el-form ref="form" :model="form" :inline="true" size="mini">
         <div class="form-box border-gray">
              <p class="divider-tag">4列6词表单</p>
              <el-row :gutter="10">
                   <el-col :span="6" class="el-world-6">
                        <el-form-item label="姓名:">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                   </el-col>

                   <el-col :span="6" class="el-world-6">
                        <el-form-item label="身份证号:">
                            <el-input v-model="form.idCard"></el-input>
                        </el-form-item>
                   </el-col>

                   <el-col :span="6" class="el-world-6">
                      <el-form-item label="年龄:">
                          <el-input v-model="form.age"></el-input>
                      </el-form-item>
                   </el-col>

                   <el-col :span="6" class="el-world-6">
                        <el-form-item label="六字词语表单:">
                            <el-input v-model="form.gender"></el-input>
                        </el-form-item>
                    </el-col>

              </el-row>
         </div>
    </el-form>  
    
    `,


    fourListEightWorld: `
    <el-form ref="form" :model="form" :inline="true" size="mini">
         <div class="form-box border-gray">
              <p class="divider-tag">4列8词表单</p>
              <el-row :gutter="10">
                   <el-col :span="6" class="el-world-8">
                        <el-form-item label="姓名:">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                   </el-col>

                   <el-col :span="6" class="el-world-8">
                        <el-form-item label="身份证号:">
                            <el-input v-model="form.idCard"></el-input>
                        </el-form-item>
                   </el-col>

                   <el-col :span="6" class="el-world-8">
                      <el-form-item label="年龄:">
                          <el-input v-model="form.age"></el-input>
                      </el-form-item>
                   </el-col>

                   <el-col :span="6" class="el-world-8">
                        <el-form-item label="六字词语表单八八:">
                            <el-input v-model="form.gender"></el-input>
                        </el-form-item>
                    </el-col>

              </el-row>
         </div>
    </el-form>  
    `,

    threeListFourWorld: `
     <el-form ref="form" :model="form" :inline="true" size="mini">
         <div class="form-box border-gray">
              <p class="divider-tag">3列4词表单</p>
              <el-row :gutter="10">
                   <el-col :span="8" class="el-world-4">
                        <el-form-item label="姓名:">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                   </el-col>

                   <el-col :span="8" class="el-world-4">
                        <el-form-item label="身份证号:">
                            <el-input v-model="form.idCard"></el-input>
                        </el-form-item>
                   </el-col>

                   <el-col :span="8" class="el-world-4">
                      <el-form-item label="年龄:">
                          <el-input v-model="form.age"></el-input>
                      </el-form-item>
                   </el-col>
              </el-row>
         </div>
    </el-form>  
    `,

    threeListSixWorld: `
    <el-form ref="form" :model="form" :inline="true" size="mini">
         <div class="form-box border-gray">
              <p class="divider-tag">3列6词表单</p>
              <el-row :gutter="10">
                   <el-col :span="8" class="el-world-6">
                        <el-form-item label="姓名:">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                   </el-col>

                   <el-col :span="8" class="el-world-6">
                        <el-form-item label="身份证号:">
                            <el-input v-model="form.idCard"></el-input>
                        </el-form-item>
                   </el-col>

                   <el-col :span="8" class="el-world-6">
                      <el-form-item label="年龄:">
                          <el-input v-model="form.age"></el-input>
                      </el-form-item>
                   </el-col>
              </el-row>
         </div>
    </el-form>  
    `,

    threeListEightWorld: `
    <el-form ref="form" :model="form" :inline="true" size="mini">
         <div class="form-box border-gray">
              <p class="divider-tag">3列8词表单</p>
              <el-row :gutter="10">
                   <el-col :span="8" class="el-world-8">
                        <el-form-item label="姓名:">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                   </el-col>

                   <el-col :span="8" class="el-world-8">
                        <el-form-item label="身份证号:">
                            <el-input v-model="form.idCard"></el-input>
                        </el-form-item>
                   </el-col>

                   <el-col :span="8" class="el-world-8">
                      <el-form-item label="年龄:">
                          <el-input v-model="form.age"></el-input>
                      </el-form-item>
                   </el-col>
              </el-row>
         </div>
    </el-form>  
    `,

    requiredCode: `
    <el-form ref="form" :model="form" :inline="true" :rules="rules" size="mini">
        <div class="form-box border-gray">
            <p class="divider-tag">必填</p>
            <el-row :gutter="10">
                <el-col :span="8" class="el-world-8 el-world-color-red">
                    <el-form-item label="姓名:" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="8" class="el-world-8">
                    <el-form-item label="身份证号:">
                       <el-input v-model="form.idCard"></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="8" class="el-world-8">
                     <el-form-item label="年龄年龄年龄年龄:">
                        <el-input v-model="form.age"></el-input>
                     </el-form-item>
                </el-col>
            </el-row>
        </div>
    </el-form>
    
    js: 
    
     form: {
          name: '',
          idCard: '',
          age: '',
          gender: ''
     },
    
     rules: {
          name: [
             {required: true, message: '请输入姓名', trigger: 'change'},
          ],
          idCard: [
             {required: true, message: '请输入身份证', trigger: 'change'},
          ]
     }
    `


}
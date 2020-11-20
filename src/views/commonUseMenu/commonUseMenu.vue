<template>
    <div class="padding-10">
        <div class="container">
            <div class="content">
                <div ref="formCom" class="header-nav-divider">常用表单组件</div>
                <p class="module-introduced">本表单组件配合栅格使用，采用最小980px分编率通用表单，<b>所有表单组件下边距均为10px</b>具体可根据实际ui在当前组件进行调整
                更多详情请查询<a href="https://element.eleme.cn/#/zh-CN/component/form" target="_blank">element-ui表单组件</a>

                </p>
                <p ref="fourToFourWord" class="module-introduced">一行4列，单个item4词直接在el-col组件上添加类el-world-4,在最小980px分辨率下能正常显示</p>

                <div class="margin-top20">
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
                </div>

                <codemirror class="margin-top20" v-model="fourListFourWorld"/>

                <p ref="fourToSixWord" class="module-introduced">一行4列6词，均在980px分变率下,单个el-col添加类el-world-6</p>

                <div class="margin-top20">
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
                </div>

                <codemirror class="margin-top20" v-model="fourListSixWorld"/>


                <p ref="FourToEightWorld" class="module-introduced">一行4列8词，均在980px分变率下,单个el-col添加类el-world-8</p>

                <div class="margin-top20">
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
                </div>

                <codemirror class="margin-top20" v-model="fourListEightWorld"/>


                <p ref="threeToFourWord" class="module-introduced">一行3列4词，均在最小980px分变率下,单个el-col添加类el-world-4</p>

                <div class="margin-top20">
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
                </div>

                <codemirror class="margin-top20" v-model="threeListFourWorld"/>


                <p ref="threeToSixWord" class="module-introduced">一行3列6词，均在最小980px分变率下,单个el-col添加类el-world-6</p>

                <div class="margin-top20">
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
                                    <el-form-item label="年龄年龄年龄:">
                                        <el-input v-model="form.age"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                    </el-form>
                </div>

                <codemirror class="margin-top20" v-model="threeListSixWorld"/>

                <p ref="threeToEightWord" class="module-introduced">一行3列8词，均在最小980px分变率下,单个el-col添加类el-world-8</p>

                <div class="margin-top20">
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
                                    <el-form-item label="年龄年龄年龄年龄:">
                                        <el-input v-model="form.age"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                    </el-form>
                </div>

                <codemirror class="margin-top20" v-model="threeListEightWorld"/>

                <p ref="required" class="module-introduced">表单红色label与必填验证,更多可详见<a href="https://element.eleme.cn/#/zh-CN/component/form" target="_blank">element-ui表单组件</a></p>
                <p class="module-introduced">当验证字段label需标红时在el-col组件添加类el-world-color-red,更多校验规则详见element-ui表单组件</p>

                <div class="margin-top20">
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
                </div>

                <codemirror class="margin-top20" v-model="requiredCode"/>


            </div>
        </div>

    </div>
</template>

<script>
    import code from './codeContent'

    export default {
        name: "commonUseMenu",
        data() {
            return {
                form: {
                    name: '',
                    idCard: '',
                    age: '',
                    gender: ''
                },
                fourListFourWorld: code.fourListFourWorld,
                fourListSixWorld: code.fourListSixWorld,
                fourListEightWorld: code.fourListEightWorld,
                threeListFourWorld: code.threeListFourWorld,
                threeListSixWorld: code.threeListSixWorld,
                threeListEightWorld: code.threeListEightWorld,
                requiredCode: code.requiredCode,
                rules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'change'},

                    ],
                    idCard: [
                        {required: true, message: '请输入身份证', trigger: 'change'},
                    ]
                }
            }
        },
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: 'formCom',
                    title: "常用表单"
                },
                {
                    el: 'fourToFourWord',
                    title: '4列4词'
                },
                {
                    el: 'fourToSixWord',
                    title: '4列6词'
                },
                {
                    el: 'FourToEightWorld',
                    title: '4列8词'
                },
                {
                    el: 'threeToFourWord',
                    title: '3列4词'
                },
                {
                    el: 'threeToSixWord',
                    title: '3列6词'
                },
                {
                    el: 'threeToEightWord',
                    title: '3列8词'
                },
                {
                    el: 'required',
                    title: '必填'
                },
            ]);
        }
    }
</script>

<style lang="scss" scoped>
    #code-box {
        height: 500px;

    }

</style>
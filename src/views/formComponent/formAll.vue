<template>
    <div class="padding-10">
        <div class="container">
            <div class="content">
                <div  class="header-nav-divider">常用表单控件</div>
                <p class="module-introduced">本例展示基本常用的表单控件，我们一般只会采用size为mini的控件</p>

                <p ref="btn" class="module-introduced">按钮控件,更多详见<a href="https://element.eleme.cn/#/zh-CN/component/button" target="_blank">element-ui按钮控件</a></p>

                <p class="module-introduced">所有按钮规范高度均为32px</p>

                <el-button size="mini">默认按钮</el-button>
                <el-button type="primary" size="mini">主要按钮</el-button>
                <el-button type="success" size="mini">成功按钮</el-button>
                <el-button type="info" size="mini">信息按钮</el-button>
                <el-button type="warning" size="mini">警告按钮</el-button>
                <el-button type="danger" size="mini">危险按钮</el-button>

                <codemirror class="margin-top20" v-model="btn"/>

                <div  class="header-nav-divider">单选框</div>
                <p ref="radioCom" class="module-introduced">radio单选框组件，更多详见 <a href="https://element.eleme.cn/#/zh-CN/component/radio">element-ui单选组件</a></p>
                <p class="module-introduced">基础单选框样式</p>

                <el-radio v-model="radio" label="1">备选项</el-radio>
                <el-radio v-model="radio" label="2">备选项</el-radio>

                <codemirror class="margin-top20" v-model="basicRadio"/>

                <p class="module-introduced">单选框组</p>

                <el-radio-group v-model="radio1">
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                    <el-radio :label="9">备选项</el-radio>
                </el-radio-group>

                <codemirror class="margin-top20" v-model="radioGroup"/>

                <div  ref="checkedBox" class="header-nav-divider">复选框</div>
                <p class="module-introduced">复选框组件，更多详见<a href="https://element.eleme.cn/#/zh-CN/component/checkbox">element-ui复选框组件</a></p>
                <el-checkbox v-model="checked">备选项</el-checkbox>

                <codemirror class="margin-top20" v-model="checkedCode"/>

                <div  class="header-nav-divider">输入框</div>
                <p class="module-introduced">输入框组件，更多详见<a href="https://element.eleme.cn/#/zh-CN/component/input" target="_blank">element-ui输入框组件</a></p>
                <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input>

                <codemirror class="margin-top20" v-model="inputCode"/>
            </div>
        </div>
    </div>
</template>

<script>
    import form from './formCode'
    export default {
        name: "formAll",
        data() {
            return {
                btn: form.btn,
                radio: '1',
                radio1: 3,
                checked: true,
                input: '哈哈',
                basicRadio: form.basicRadio,
                radioGroup: form.radioGroup,
                checkedCode: form.checkedCode,
                inputCode: form.inputCode
            }
        },
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: 'btn',
                    title: "按钮"
                },
                {
                    el: 'radioCom',
                    title: '单选框'
                },
                {
                    el: 'checkedBox',
                    title: '复选框'
                }

            ]);
        }
    }
</script>

<style scoped>

</style>
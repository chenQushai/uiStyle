<template>
    <div class="padding-10">
        <div class="container">
            <div class="content">
                <div class="header-nav-divider">常用表单控件</div>
                <p class="module-introduced">本例展示基本常用的表单控件，我们一般只会采用size为mini的控件</p>

                <p ref="btn" class="module-introduced">按钮控件,更多详见<a
                    href="https://element.eleme.cn/#/zh-CN/component/button" target="_blank">element-ui按钮控件</a></p>

                <p class="module-introduced">所有按钮规范高度均为32px</p>
                <el-row>
                    <el-button size="mini">默认按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="success" size="mini">成功按钮</el-button>
                    <el-button type="info" size="mini">信息按钮</el-button>
                    <el-button type="warning" size="mini">警告按钮</el-button>
                    <el-button type="danger" size="mini">危险按钮</el-button>
                </el-row>

                <el-row class="margin-top10">
                    <el-button size="mini" plain>朴素按钮</el-button>
                    <el-button size="mini" type="primary" plain>主要按钮</el-button>
                    <el-button size="mini" type="success" plain>成功按钮</el-button>
                    <el-button size="mini" type="info" plain>信息按钮</el-button>
                    <el-button size="mini" type="warning" plain>警告按钮</el-button>
                    <el-button size="mini" type="danger" plain>危险按钮</el-button>
                </el-row>

                <codemirror class="margin-top20" v-model="btn"/>

                <div class="header-nav-divider">单选框</div>
                <p ref="radioCom" class="module-introduced">radio单选框组件，更多详见 <a
                    href="https://element.eleme.cn/#/zh-CN/component/radio">element-ui单选组件</a></p>
                <p class="module-introduced">基础单选框样式</p>

                <el-radio v-model="radio" label="1">备选项</el-radio>
                <el-radio v-model="radio" label="2">备选项</el-radio>

                <p class="module-introduced">mini单选框</p>

                <el-radio class="radio-mini" v-model="radio" label="1">备选项</el-radio>
                <el-radio class="radio-mini" v-model="radio" label="2">备选项</el-radio>

                <p class="module-introduced">禁用单选</p>
                <el-radio class="radio-mini" v-model="radio" disabled label="1">备选项</el-radio>

                <codemirror class="margin-top20" v-model="basicRadio"/>

                <p class="module-introduced">单选框组</p>

                <el-radio-group v-model="radio1">
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                    <el-radio :label="9">备选项</el-radio>
                </el-radio-group>

                <codemirror class="margin-top20" v-model="radioGroup"/>

                <div ref="checkedBox" class="header-nav-divider">复选框</div>
                <p class="module-introduced">复选框组件，更多详见<a href="https://element.eleme.cn/#/zh-CN/component/checkbox">element-ui复选框组件</a>
                </p>
                <el-checkbox v-model="checked">备选项</el-checkbox>

                <codemirror class="margin-top20" v-model="checkedCode"/>

                <div class="header-nav-divider">输入框</div>
                <p class="module-introduced">输入框组件，更多详见<a href="https://element.eleme.cn/#/zh-CN/component/input"
                                                          target="_blank">element-ui输入框组件</a></p>
                <el-input
                    v-model="input"
                    style="width: 176px"
                    size="mini"
                    placeholder="请输入内容">
                </el-input>
                <codemirror class="margin-top20" v-model="inputCode"/>

                <div ref="selects" class="header-nav-divider">下拉框</div>
                <p class="module-introduced">下拉框组件，更多详见<a href="https://element.eleme.cn/#/zh-CN/component/select"
                                                          target="_blank">element-ui输入框组件</a></p>

                <el-select
                    v-model="selectValue"
                    style="width: 176px"
                    size="mini"
                    multiple
                    placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>

                <codemirror class="margin-top20" v-model="selectCode"/>

                <div ref="filterSelectCode" class="header-nav-divider">下拉模糊搜索</div>
                <p class="module-introduced">模糊搜索添加filterable即可</p>

                <el-select
                    v-model="selectValue"
                    style="width: 176px"
                    size="mini"
                    multiple
                    filterable
                    placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>

                <codemirror class="margin-top20" v-model="filterSelectCode"/>

                <div ref="timeCom" class="header-nav-divider">日期控件</div>
                <p class="module-introduced">日期控件，用于显示日期。</p>
                <el-row :gutter="16">
                    <el-col :span="6">
                        <el-date-picker
                            v-model="dateTime"
                            type="date"
                            size="mini"
                            style="width: 176px"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-col>

                    <el-col :span="6">
                        <el-date-picker
                            v-model="month"
                            type="month"
                            size="mini"
                            style="width: 176px"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-col>

                    <el-col :span="6">
                        <el-date-picker
                            v-model="week"
                            type="week"
                            size="mini"
                            style="width: 176px"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-col>
                </el-row>
                <codemirror class="margin-top20" v-model="dateCode"/>

                <div ref="timeCom" class="header-nav-divider">时间控件</div>
                <p class="module-introduced">时间控件，用于选择时间段。</p>

                <el-row :gutter="16">
                    <el-col :span="6">
                        <el-time-picker
                            v-model="timePoint"
                            style="width: 176px"
                            size="mini"
                            placeholder="任意时间点">
                        </el-time-picker>
                    </el-col>
                </el-row>
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
                selectValue: [],
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
                dateTime: '',
                month: '',
                week: '',
                timePoint: '',
                basicRadio: form.basicRadio,
                radioGroup: form.radioGroup,
                checkedCode: form.checkedCode,
                inputCode: form.inputCode,
                selectCode: form.selectCode,
                filterSelectCode: form.filterSelectCode,
                dateCode: form.dateCode
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
                },
                {
                    el: 'selects',
                    title: '下拉框'
                },
                {
                    el: 'filterSelectCode',
                    title: '模糊搜索'
                }

            ]);
        },
        methods: {
            show(e) {
                console.log(e)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
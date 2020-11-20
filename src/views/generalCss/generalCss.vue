<template>
    <div class="padding-10">
        <div class="container">
            <div class="content">
                <div ref="nomalElment" class="header-nav-divider">基本元素</div>
                <p class="module-introduced">通用css需引入basic.scss文件，此css提供较为高频率使用的简单样式，直接在dom上引用</p>

                <codemirror v-model="code"/>

                <div ref="border" class="header-nav-divider">边框、边距</div>

                <codemirror v-model="borderCode"/>

                <div ref="backgroundColor" class="header-nav-divider">背景颜色</div>

                <codemirror v-model="backgroundCode"/>


            </div>
        </div>
    </div>
</template>

<script>
    import codeStyle from './codeStyle'

    export default {
        name: "generalCss",
        data() {
            return {
                code: codeStyle.generalCss,
                borderCode: codeStyle.borderCode,
                backgroundCode: codeStyle.backgroundCode
            }
        },
        mounted() {

            this.$store.commit("changeNavList", [
                {
                    el: 'nomalElment',
                    title: " 基本元素"
                },
                {
                    el: 'border',
                    title: " 边框、边距"
                },
                {
                    el: 'backgroundColor',
                    title: " 背景颜色"
                }
            ]);
        }
    }
</script>

<style lang="scss" scoped>
</style>
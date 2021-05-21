<template>
    <div class="padding-10">
        <div class="container">
            <div ref="lazy" class="header-nav-divider">模块懒加载</div>
            <p class="module-introduced"> 1.主要用于大篇幅加载内容，分模块加载内容，当模块进入可视区后才加载数据</p>
            <p class="module-introduced"> 2.在需要滚动的容器里添加v-lazyModules</p>
            <p class="module-introduced"> 3.添加滚动事件load,该方法返回三个参数（index,node,hasView）,
                index最新进入可视区的domIndex，node最新进入可视区的dom,hasView，已经在可视区domIndex</p>

            <div class="loading-content" v-lazyModules="load">
                <div style="height: 200px;background-color: #9a6e3a"></div>
                <div style="height: 200px;background-color: #44b449"></div>
                <div style="height: 200px;background-color: red"></div>
                <div  style="height: 200px;background-color: #795da3"></div>
            </div>

            <codemirror class="margin-top20" v-model="lazy"/>
        </div>
    </div>
</template>

<script>
    import modulesLoading from  './modulesLoading'
    export default {
        name: "modulesLoading",
        data() {
            return {
                lazy: modulesLoading.lazy
            }
        },
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: "lazy",
                    title: '模块懒加载'
                }
            ]);
        },
        methods: {
            load(index,node,hasInView) {
                console.log(node,index,hasInView)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loading-content {
        width: 100%;
        height: 500px;
        overflow: auto;
    }
</style>
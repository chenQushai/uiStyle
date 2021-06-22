<template>
    <div class="padding-10">
        <div class="container">
            <div class="content">
                <div ref="basisTabs" class="header-nav-divider">tabs基础</div>

                <p class="module-introduced">此处只展示本系统的基础tabs应用，更多详情请查看
                    <a href=" https://element.eleme.cn/#/zh-CN/component/tabs" target="_blank">element-ui tabs 组件</a>
                </p>

                <p class="module-introduced">主页的tabs是最为常见的基础tabs版本，此时只需在外层div添加类home-tabs,更多需求可根据实际在当前组件中修改</p>

                <div class="home-tabs">
                    <el-tabs v-model="ItemTabsValue" type="card"
                             @tab-click="tabClick"
                             closable @tab-remove="removeTab">
                        <el-tab-pane
                                v-for="(item, index) in itemTabs"
                                :key="item.name"
                                :label="item.label"
                                :name="item.name"
                        >
                        </el-tab-pane>
                    </el-tabs>
                </div>

                <codemirror class="margin-top20" v-model="basicTabs"/>

                <p ref="trapezoid" class="module-introduced">梯形tabs,此时只需在外层div中加入类trapezoid-tabs</p>

                <div class="trapezoid-tabs">
                    <el-tabs v-model="ItemTabsValue" type="card" @tab-click="tabClick">
                        <el-tab-pane
                                v-for="(item, index) in itemTabs"
                                :key="item.name"
                                :label="item.label"
                                :name="item.name"
                        >
                        </el-tab-pane>
                    </el-tabs>
                </div>

                <codemirror class="margin-top20" v-model="trapezoidTabs"/>

                <p ref="borderCard" class="module-introduced">用于栏目切换border-card,外层div加上类,一般这种选项卡较为固定，可设置外层div的宽度</p>

                <div style="width: 196px">
                    <div class="border-card">
                        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                            <el-tab-pane label="最近使用" name="0">最近使用</el-tab-pane>
                            <el-tab-pane label="最新项目" name="1">最新项目</el-tab-pane>
                        </el-tabs>
                    </div>
                </div>

                <codemirror class="margin-top20" v-model="borderTabs"/>

                <p ref="normalTabs" class="module-introduced">普通的tabs</p>

                <div  class="margin-top10 normal-tabs">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                    </el-tabs>
                </div>

                <codemirror class="margin-top20" v-model="normalTabs"/>

                <p ref="radiusTabs" class="module-introduced">圆角的tabs</p>
                <p  class="module-introduced">采用type为card模式，在外层div添加radius-tabs即可</p>
                <div class="margin-top10 radius-tabs">
                    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                    </el-tabs>
                </div>

                <codemirror class="margin-top20" v-model="radiusTabs"/>
            </div>
        </div>
    </div>
</template>

<script>
    import basicTabs from './tabsCode'

    export default {
        name: "tabsComponent",
        data() {
            return {
                ItemTabsValue: '1',
                activeName: '1',
                itemTabs: [
                    {
                        label: '用户管理',
                        name: '1'
                    },
                    {
                        label: '配置管理',
                        name: '2'
                    },
                    {
                        label: '角色管理',
                        name: '3'
                    }
                ],
                basicTabs: basicTabs.basicTabs,
                trapezoidTabs: basicTabs.trapezoidTabs,
                borderTabs: basicTabs.borderTabs,
                normalTabs: basicTabs.normalTabs,
                radiusTabs: basicTabs.radiusTabs
            }
        },
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: 'basisTabs',
                    title: "基础Tabs"
                },
                {
                    el: 'trapezoid',
                    title: '梯形tabs'
                },
                {
                    el: 'borderCard',
                    title: '边框tabs'
                },
                {
                    el: 'normalTabs',
                    title: '普通tabs'
                },
                {
                    el: 'radiusTabs',
                    title: '圆角tabs'
                }

            ]);
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab.name, event);
            },
            tabClick(tab) {
                this.ItemTabsValue = tab.name;
            },
            removeTab(targetName) {
                let tabs = this.itemTabs;
                let activeName = this.ItemTabsValue;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }

                this.ItemTabsValue = activeName;
                this.itemTabs = tabs.filter(tab => tab.name !== targetName);
            }
        }
    }
</script>

<style scoped>

</style>
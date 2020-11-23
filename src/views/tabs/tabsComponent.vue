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
                trapezoidTabs: basicTabs.trapezoidTabs
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
                }

            ]);
        },
        methods: {
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
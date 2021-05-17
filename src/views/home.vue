<template>
    <el-container>
        <el-header class="page-header" :style="{backgroundImage: `url(${headerBg})`}">
            <img class="company-icon" src="../assets//img/company-icon.png" alt="">
            <div class="system-name">ui样式模板</div>
            <div class="user-function">
                <span class="iconfont iconxiaoxi2 set"></span>
                <span class="iconfont iconshezhi1 set"></span>
                <div class="user-msg">
                    <img class="user-head-img" src="../assets/img/doctor-img.png" alt="">
                    <el-dropdown class="user-name">
                                    <span class="el-dropdown-link">
                                    {{createName}}<i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </el-header>
        <el-container>
            <el-aside width="210px" class="aside">

                <el-menu
                        router
                        unique-opened
                        :default-active="defaultActive"
                        class="el-menu-vertical-demo"
                        background-color="#ffffff"
                        text-color="#545c64"
                        @select="addTab"
                >
                    <div v-for="(item,index) in menuData" :key="index">
                        <el-submenu :index="item.url" v-if="item.children.length > 0">
                            <template slot="title">
                                <i :class="item.icon"></i>
                                <span slot="title">{{item.menuName}}</span>
                            </template>
                            <div :key="i" v-for="(child,i) in item.children">
                                <el-submenu :index="child.url" v-if="child.children.length > 0">
                                    <template slot="title">{{child.menuName}}</template>
                                    <div v-for="(third,i) in child.children">
                                        <el-submenu :index="third.url" v-if="third.children.length > 0">
                                            <template slot="title">{{third.menuName}}</template>
                                            <div v-for="(fourth,i) in third.children">
                                                <el-menu-item :index="fourth.url"
                                                              v-if="fourth.children.length === 0">
                                                    {{fourth.menuName}}
                                                </el-menu-item>
                                            </div>
                                        </el-submenu>

                                        <el-menu-item :index="third.url" :key="i"
                                                      v-if="third.children.length === 0">
                                            {{third.menuName}}
                                        </el-menu-item>
                                    </div>

                                </el-submenu>

                                <el-menu-item :index="child.url" :key="i" v-if="child.children.length === 0">
                                    {{child.menuName}}
                                </el-menu-item>
                            </div>
                        </el-submenu>

                        <el-menu-item :index="item.url" v-if="item.children.length === 0">
                            <i :class="item.icon"></i>
                            <span slot="title">{{item.menuName}}</span>
                        </el-menu-item>
                    </div>
                </el-menu>
            </el-aside>
            <el-main>
                <div class="tabs-title">
                    <div class="home-tabs">
                        <el-tabs v-model="ItemTabsValue" type="card"
                                 @tab-click="tabClick"
                                 closable @tab-remove="removeTab">
                            <el-tab-pane
                                    v-for="(item, index) in itemTabs"
                                    :key="item.name"
                                    :label="item.title"
                                    :name="item.name"
                            >
                            </el-tab-pane>
                        </el-tabs>
                    </div>

                </div>

                <div class="router-view">
                    <router-view ref="childView" style="min-width: 1280px;"></router-view>
                </div>

                <el-card class="box-card side-nav pointer">
                    <div :key="index" v-for="(n,index) in $store.state.index.navList"
                         @click="jumpToNav(n.el)"
                         class="item">
                        {{n.title}}
                    </div>
                </el-card>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "home",
        data() {

            return {
                headerBg: require('../assets/img/header.png'),
                createName: '',
                defaultActive: '/home/generalCss',
                ItemTabsValue: '/home/generalCss',
                activeMenuName: '',//当前点击的菜单名
                itemTabs: [
                    {
                        title: '通用CSS',
                        name: '/home/generalCss',
                        path: '/home/generalCss'
                    }
                ],//tabs栏目
                menuData: [
                    {
                        icon: ['iconfont', 'iconchufangguanli2', 'menu-iconfont'],
                        menuName: '通用css',
                        url: '/home/generalCss',
                        children: []
                    },
                    {
                        icon: ['iconfont', 'iconchufangguanli2', 'menu-iconfont'],
                        menuName: '常用表单布局',
                        url: '/home/commonUseMen',
                        children: []
                    },
                    {
                        icon: ['iconfont', 'iconchufangguanli2', 'menu-iconfont'],
                        menuName: '表格',
                        url: '/home/table',
                        children: []
                    },
                    {
                        icon: ['iconfont', 'iconchufangguanli2', 'menu-iconfont'],
                        menuName: 'Tabs标签',
                        url: '/home/tabs',
                        children: []
                    },
                    {
                        icon: ['iconfont', 'iconchufangguanli2', 'menu-iconfont'],
                        menuName: '树形',
                        url: '/home/tree',
                        children: []
                    },
                    {
                        icon: ['iconfont', 'iconchufangguanli2', 'menu-iconfont'],
                        menuName: 'dialog弹窗',
                        url: '/home/dialog',
                        children: []
                    },
                    {
                        icon: ['iconfont', 'iconchufangguanli2', 'menu-iconfont'],
                        menuName: '表单常用控件',
                        url: '/home/formAll',
                        children: []
                    },
                    {
                        icon: ['iconfont', 'iconchufangguanli2', 'menu-iconfont'],
                        menuName: '页头',
                        url: '/home/pageHead',
                        children: []
                    },
                    {
                        icon: ['iconfont', 'iconchufangguanli2', 'menu-iconfont'],
                        menuName: '可移动的弹窗',
                        url: '/home/moveDialog',
                        children: []
                    },
                    {
                        icon: ['iconfont', 'iconchufangguanli2', 'menu-iconfont'],
                        menuName: '鱼骨图',
                        url: '/home/fishBone',
                        children: []
                    }
                ],
            }
        },
        created() {
            this.$router.replace('/home/generalCss');
        },
        mounted() {

        },
        methods: {

            /****
             * 查询菜单名
             * @param menu {菜单节点}
             * @param index{菜单名}
             * @returns {string}
             */
            getMenuName(menu, index) {
                for (let i = 0; i < menu.length; i++) {
                    if (menu[i].url === index) {
                        this.activeMenuName = menu[i].menuName;
                        break;
                    }
                    if (menu[i].children.length > 0) {
                        this.getMenuName(menu[i].children, index)
                    }
                }
                return this.activeMenuName;
            },

            /****
             * 跳到菜单
             * @param index
             */
            addTab: function (index) { //type 跳转类型,target为点击的对象
                console.log(index)
                let include = null;
                this.itemTabs.forEach((item) => {
                    if (item.name === index) {
                        include = true;
                    }
                });
                if (include) {
                    this.ItemTabsValue = index;
                    return
                }

                this.itemTabs.push({
                    title: this.getMenuName(this.menuData, index),
                    name: index,
                    path: index
                });

                this.ItemTabsValue = index;
            },

            tabClick(tab) {
                this.$router.push(tab.name)
                this.ItemTabsValue = tab.name;
            },

            removeTab(targetName) {//target为将要删除的item的name
                if (targetName === this.itemTabs[0].name) { //选项卡 第一个不能删除
                    this.$message({
                        message: `${this.itemTabs[0].title}为首页，不能删除哦！`,
                        type: 'warning',
                        duration: 2000
                    });
                    return
                }

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
                this.$router.push(activeName)

            },
            /****
             * 导航到当前点击的dom
             * @param el 点击的元素
             */
            jumpToNav(el) {
                this.$refs.childView.$refs[el].scrollIntoView({behavior: "smooth"});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page-header {
        .company-icon {
            float: left;
            width: 27px;
            height: 30px;
            margin-top: 9px;
        }
        .system-name {
            float: left;
            width: 450px;
            line-height: 44px;
            color: white;
            font-weight: bold;
            font-size: 20px;
            padding-left: 10px;
        }
        .user-function {
            float: right;
            height: 40px;
            line-height: 40px;
            .set {
                color: white;
                font-size: 18px;
                cursor: pointer;
                margin-right: 30px;
            }

            .user-msg {
                float: right;
                height: 100%;
                line-height: 40px;
                .user-name {
                    display: inline-block;
                    font-size: 15px;
                    font-weight: bold;
                    vertical-align: middle;
                    color: white;
                }
                .user-head-img {
                    width: 25px;
                    height: 25px;
                    border-radius: 30px;
                    margin-right: 8px;
                    vertical-align: middle;
                }
            }

        }
    }


    .aside {
        box-shadow: 1px 0px 3px rgba(25, 41, 63, 0.1);
        overflow: auto;
    }

    .router-view {
        width: 100%;
        height: calc(100% - 40px);
        overflow: auto;
        background-color: rgb(241, 245, 253);
    }

    .side-nav {
        position: fixed;
        right: 30px;
        top: 30%;
        max-width: 200px;
        z-index: 1000;
        .item {
            padding: 8px 0;
        }
    }
</style>
<template>
    <div class="container">
        <div ref="fish" class="header-nav-divider">鱼骨图</div>
        <p class="module-introduced"> 1.安装</p>
        <p class="module-introduced"> npm install cky-fish-bone</p>
        <p class="module-introduced">这里只做简单介绍，更多详见<a href="https://www.npmjs.com/package/cky-fish-bone" target="_blank">鱼骨图文档说明</a></p>
        <fishBone
            :data="fishData"
            :start-title="'住院'"
            theme="#459DF5"
            @handClick="child"
            @handClickTime="timeItem"
            :prop="{top: 't',bottom: 'b'}"
        >
        </fishBone>
    </div>


</template>

<script>
    import fishBone from './fishBone'

    export default {
        name: "fishBonePage",
        components: {
            fishBone
        },
        data() {
            return {
                fishData: [
                    {
                        t: {
                            label: '2020-05-30',
                            children: [
                                {
                                    label: '哈哈',
                                    children: [
                                        {
                                            label: '子集1',
                                            data: '14'
                                        },
                                        {
                                            label: '子集2'
                                        },
                                        {
                                            label: '子集3'
                                        },
                                        {
                                            label: '子集4'
                                        },
                                        {
                                            label: '子集5'
                                        }
                                    ]
                                },
                                {
                                    label: '第二'
                                },
                            ]
                        }
                        ,
                        b: {
                            label: "2020-06-05",
                            children: [
                                {
                                    label: '第2'
                                },
                                {
                                    label: '5445'
                                }
                            ]
                        }

                    },
                    {
                        t: {
                            label: '2020-05-30',
                            children: [
                                {
                                    label: '哈哈',
                                    children: [
                                        {
                                            label: '子集1',
                                            data: '14'
                                        },
                                        {
                                            label: '子集2'
                                        },
                                        {
                                            label: '子集3'
                                        },
                                        {
                                            label: '子集4'
                                        },
                                        {
                                            label: '子集5'
                                        }
                                    ]
                                },
                                {
                                    label: '第二'
                                },
                            ]
                        }
                        ,
                        b: {
                            label: "2020-06-05",
                            children: [
                                {
                                    label: '第2'
                                },
                                {
                                    label: '5445'
                                }
                            ]
                        }

                    },
                ]
            }
        },
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: "fish",
                    title: '鱼骨图'
                }
            ]);
        },
        methods: {
            child(c) {
                console.log(c)
            },
            timeItem(it) {
                console.log(it)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page {
        /*position: relative;*/
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }
</style>
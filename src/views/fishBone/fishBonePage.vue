<template>

    <fishBone
        :data="fishData"
        :start-title="'开始'"
        :prop="{top: 't',bottom: 'b'}">
    </fishBone>

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
                        t: [
                            {
                                label: '哈哈',
                                children: [
                                    {
                                        label: '子集1'
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
                            {
                                label: '哈哈',
                                children: [
                                    {
                                        label: '子集1'
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
                                label: '哈哈',
                                children: [
                                    {
                                        label: '子集1'
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
                            }, {
                                label: '哈哈',
                                children: [
                                    {
                                        label: '子集1'
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
                        ],
                        b: [
                            {
                                label: '第2'
                            },
                            {
                                label: '5445'
                            }
                        ]
                    },
                    {
                        t: [
                            {
                                label: '256'
                            }
                        ],
                        b: []
                    },
                    {
                        t: [{}, {}],
                        b: [{}, {}]
                    },
                    {
                        t: [{}],
                        b: []
                    },
                    {
                        t: [
                            {
                                label: '哈哈',
                                children: [
                                    {
                                        label: '子集1'
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
                            }
                        ],
                        b: [
                            {
                                label: '第2'
                            },
                            {
                                label: '5445'
                            }
                        ]
                    },
                    {
                        t: [{}, {}],
                        b: [{}, {}, {}, {}, {}]
                    },

                ]
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
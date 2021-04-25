<template>

    <fishBone
        :data="fishData"
        :start-title="'住院'"
        theme="#459DF5"
        @handClick="child"
        :prop="{top: 't',bottom: 'b'}"
    >
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
        methods: {
            child(c) {
                console.log(c)
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
<template>
    <div
        class="fish-bone"
        :style="{
            height: `${height}px`,
        }"
    >
        <div v-drag class="fish-bone__container"
             :style="{
                top: `${height / 2}px`
             }"
        >
            <div class="fish-bone__header">{{startTitle}}</div>
            <div class="fish-bone__trunk"
                 :key="index"
                 v-for="(f,index) in fishData"
            >
                <!--上部分鱼翅-->
                <div>
                    <div
                        class="fish-bone__barb fish-bone__barb--top"
                        :key="i"
                        v-for="(b,i) in f[props.top]"
                        :style="{
                    transform: `rotate(-45deg) translateX(${i*200}px)`
                }"
                    >
                        <div class="fish-bone__barb__circle-container" @click.stop="handClickItem(b)">
                        </div>
                        <div
                            :class="b.active ? ['fish-bone__barb__content','fish-bone__barb__content--active']
                        : ['fish-bone__barb__content']"
                        >
                            <span v-if="!b.active">{{b[props.label]}}</span>
                            <ul v-else>
                                <li :key="ci" v-for="(c,ci) in b[props.children]">{{c[props.label]}}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!--下部分鱼翅-->
                <div>
                    <div
                        class="fish-bone__barb fish-bone__barb--bottom"
                        :key="x"
                        v-for="(b,x) in f[props.bottom]"
                        :style="{
                    transform: `rotate(45deg) translateX(${x*200}px)`
                }"
                    >
                        <div class="fish-bone__barb__circle-container" @click.stop="handClickItem(b)">

                        </div>
                        <div
                            :class="b.active ? ['fish-bone__barb__content','fish-bone__barb__content--active']
                        : ['fish-bone__barb__content']"
                        >
                            <span v-if="!b.active">{{b[props.label]}}</span>
                            <ul v-else>
                                <li :key="ci" v-for="(c,ci) in b[props.children]">{{c[props.label]}}</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "fishBone",
        props: {
            height: {
                type: Number,
                default: 969
            },
            startTitle: {
                type: String,
                required: true,
                default: ''
            },
            data: {
                type: Array,
                required: true,
                default: () => []
            },
            prop: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        created() {
            this.props = Object.assign(this.props, this.prop);
        },
        data() {
            return {
                props: {
                    top: 'top',
                    bottom: 'bottom',
                    children: 'children',
                    label: 'label'
                }
            }
        },
        computed: {
            fishData() {
                this.data.forEach((item) => {
                    item[this.prop.top].forEach((t) => {
                        this.$set(t, 'active', false)
                    })
                    item[this.prop.bottom].forEach((t) => {
                        this.$set(t, 'active', false)
                    })
                })
                return this.data
            }
        },
        methods: {
            handClickItem(item, e) {
                this.$set(item, 'active', !item.active);
                event.stopPropagation();
            }
        },
    }
</script>

<style lang="scss" scoped>
    .fish-bone {
        display: flex;
        position: relative;
        justify-content: center;
        overflow: auto;
    }

    .fish-bone__container {
        display: flex;
        position: relative;
        width: 100%;
        .fish-bone__header {
            position: absolute;
            top: -17px;
            width: 60px;
            height: 35px;
            border-radius: 3px;
            background-color: #07c160;
            line-height: 35px;
            color: #ffffff;
            text-align: center;
            z-index: 100;
            cursor: pointer;
        }
        .fish-bone__trunk { //鱼躯干
            position: relative;
            width: 400px;
            height: 1px;
            border-bottom: 2px solid #969799;
            &:nth-of-type(2) { //第二个子集
                .fish-bone__barb {
                    &--top {
                        left: 96px;
                    }
                    &--bottom {
                        left: 136px;
                    }
                }
            }
        ;
            .fish-bone__barb { //鱼刺
                display: flex;
                position: absolute;
                width: 200px;
                height: 1px;
                border-bottom: 2px solid #969799;
                &:first-child {
                    &::after {
                        width: 8px;
                        height: 8px;
                    }
                }
                .fish-bone__barb__circle-container {
                    position: absolute;
                    right: -3px;
                    top: -3px;
                    width: 8px;
                    height: 8px;
                    border-radius: 8px;
                    cursor: pointer;
                    background-color: #07c160;
                }

                &--top {
                    transform: rotate(-45deg);
                    transform-origin: 0px 0px;
                    .fish-bone__barb__content {
                        width: 80px;
                        height: 16px;
                        font-size: 12px;
                        line-height: 16px;
                        color: #07c160;
                        border: 1px solid #07c160;
                        border-radius: 2px;
                        text-align: center;
                        transition: all 0.3s;
                        transform: rotate(45deg) translateX(155px) translateY(-108px);
                        ul {
                            width: 100%;
                            li {
                                font-size: 16px;
                                line-height: 30px;
                                color: #07c160;
                                border-bottom: 1px solid #07c160;
                            }
                        }
                        &--active {
                            height: 120px;
                            overflow: auto;
                            transform: rotate(45deg) translateX(113px) translateY(-85px);
                            border-bottom: none;
                            border-right: none;
                            border-top: none;
                        }
                    }
                }
                &--bottom {
                    transform: rotate(45deg);
                    left: 40px;
                    transform-origin: 0px 0px;
                    .fish-bone__barb__content {
                        width: 80px;
                        height: 16px;
                        font-size: 12px;
                        line-height: 16px;
                        text-align: center;
                        color: #07c160;
                        border: 1px solid #07c160;
                        border-radius: 2px;
                        transition: all 0.3s;
                        transform: rotate(315deg) translateX(71px) translateY(119px);
                        &--active {
                            height: 120px;
                            overflow: auto;
                            transform: rotate(315deg) translateX(106px) translateY(138px);
                            border-bottom: none;
                            border-left: none;
                            border-top: none;
                        }
                        ul {
                            width: 100%;
                            li {
                                font-size: 16px;
                                line-height: 30px;
                                color: #07c160;
                                border-bottom: 1px solid #07c160;
                            }
                        }
                    }
                }
            }

        }

    }
</style>
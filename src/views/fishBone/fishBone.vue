<template>
    <div
        class="fish-bone"
        :style="{
            height: `${height}px`,
        }"
    >
        <div
            v-drag
            class="fish-bone__container"
            :style="{
                top: `${height / 2}px`
             }"
        >
            <div
                class="fish-bone__header"
                :style="{
                    backgroundColor: theme ? theme :''
                }"
            >
                {{startTitle}}
            </div>
            <div class="fish-bone__trunk"
                 :key="index"
                 v-for="(f,index) in fishData"
                 :style="{
                    left: `${index*400}px`,
                    top: `-${index*2}px`
                 }"
            >
                <!--上部分鱼翅-->
                <div>
                    <div
                        v-if="f[props.top][props.children]"
                        class="fish-bone__time fish-bone__time--top"
                        :style="{
                           backgroundColor: theme ? theme : '',
                        }"
                        @click="handTimeItem(f[props.top])"
                    >
                        {{f[props.top][props.label]}}
                    </div>
                    <div
                        class="fish-bone__barb fish-bone__barb--top"
                        :key="i"
                        v-for="(b,i) in f[props.top][props.children]"
                        :style="{
                            transform: `rotate(-45deg) translateX(${(i*200)+36}px)`
                        }"
                    >
                        <div
                            :class="b.active && i % 2===0 ? ['fish-bone__barb__content']
                            :b.active && i % 2 !== 0 ? ['fish-bone__barb__content','fish-bone__barb__content--even']
                            :!b.active && i % 2 === 0 ? ['fish-bone__barb__content']
                            :!b.active && i % 2 !== 0 ? ['fish-bone__barb__content','fish-bone__barb__content--even'] : ''
                            "
                            :style="{
                                border: theme ? `1px solid ${theme}` : '',
                                color: theme ? theme : '',
                            }"
                        >

                            <span
                                :class="
                                i % 2 === 0 ? 'fish-bone__barb__content__guideLine--even'
                                : 'fish-bone__barb__content__guideLine--odd'
                                "
                                :style="{
                                    backgroundColor: theme ? theme : '',
                                }"
                            >
                            </span>
                            <span>
                                {{b[props.label]}}
                                 <img
                                     class="fish-bone__barb__circle-container_icon"
                                     :src="require('./icon/eyes.png')"
                                     @click="handChildItem(b)"
                                     alt="">
                            </span>
                        </div>
                    </div>
                </div>

                <!--下部分鱼翅-->
                <div>
                    <div
                        v-if="f[props.bottom][props.children]"
                        class="fish-bone__time fish-bone__time--bottom"
                        :style="{
                           backgroundColor: theme ? theme : '',
                        }"
                        @click="handTimeItem(f[props.bottom])"
                    >
                        {{f[props.bottom][props.label]}}
                    </div>
                    <div
                        class="fish-bone__barb fish-bone__barb--bottom"
                        :key="x"
                        v-for="(b,x) in f[props.bottom][props.children]"
                        :style="{
                            transform: `rotate(45deg) translateX(${(x*200) + 36}px)`
                        }"
                    >
                        <div
                            :class="b.active && x % 2===0 ? ['fish-bone__barb__content']
                            :b.active && x % 2 !== 0 ? ['fish-bone__barb__content','fish-bone__barb__content--even']
                            :!b.active && x % 2 === 0 ? ['fish-bone__barb__content']
                            :!b.active && x % 2 !== 0 ? ['fish-bone__barb__content','fish-bone__barb__content--even'] : ''
                            "
                            :style="{
                                border: theme ? `1px solid ${theme}` : '',
                                color: theme ? theme : '',
                            }"
                        >
                             <span
                                 :class="
                                x % 2 === 0 ? 'fish-bone__barb__content__guideLine--even'
                                : 'fish-bone__barb__content__guideLine--odd'
                                "
                                 :style="{
                                    backgroundColor: theme ? theme : '',
                                }"
                             >
                                  <img
                                      class="fish-bone__barb__circle-container_icon"
                                      :src="require('./icon/eyes.png')"
                                      @click="handChildItem(b)"
                                      alt="">
                            </span>
                            <span>{{b[props.label]}}</span>
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
            },
            theme: {
                type: String,
                default: ''
            },
            icon: {
                type: Boolean,
                default: true
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
                    if (item[this.props.top][this.props.children]) {
                        item[this.props.top][this.props.children].forEach((t) => {
                            this.$set(t, 'active', false)
                        });
                    }
                    if (item[this.props.bottom][this.props.children]) {
                        item[this.props.bottom][this.props.children].forEach((t) => {
                            this.$set(t, 'active', false)
                        })
                    }

                });
                return this.data
            },
            computedIcon(active) {
                return (active) => {
                    if (active) {
                        return require('./icon/reduce.png')
                    }
                    else {
                        return require('./icon/add.png')
                    }
                }
            }
        },
        methods: {
            handChildItem(childItem) {
                this.$emit('handClick', childItem)
            },
            handTimeItem(timeItem) {
                this.$emit('handClickTime',timeItem);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .fish-bone {
        display: flex;
        /*position: relative;*/
        justify-content: center;
        overflow: auto;
        cursor: pointer;
    }

    .fish-bone__container {
        position: relative;
        width: 100%;
        z-index: 0;
        .fish-bone__header {
            position: absolute;
            top: -17px;
            padding: 5px;
            height: 35px;
            border-radius: 3px;
            background-color: #07c160;
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
                        left: 183px;
                    }
                    &--bottom {
                        left: 356px;
                    }
                }
                .fish-bone__time {
                    &--top {
                        left: 159px;
                    }
                    &--bottom {
                        left: 336px;
                    }
                }
            }
            .fish-bone__time { //鱼刺的开始时间
                position: absolute;
                left: 99px;
                width: 95px;
                height: 25px;
                background-color: #07c160;
                font-size: 14px;
                text-align: center;
                line-height: 25px;
                color: #ffffff;
                &--top {
                    top: -25px;
                }
                &--bottom {
                    top: 2px;
                    left: 265px;
                }
            }
            .fish-bone__barb { //鱼刺
                display: flex;
                position: absolute;
                width: 200px;
                height: 1px;
                left: 120px;
                border-bottom: 2px solid #969799;
                &:first-child {

                    &::after {
                        width: 8px;
                        height: 8px;
                    }
                }

                &--top {
                    transform: rotate(-45deg);
                    transform-origin: 0px 0px;
                    .fish-bone__barb__content {
                        position: relative;
                        width: 80px;
                        height: 25px;
                        font-size: 14px;
                        line-height: 25px;
                        color: #07c160;
                        border: 1px solid #07c160;
                        border-radius: 2px;
                        text-align: left;
                        padding-left: 5px;
                        transition: all 0.3s;
                        transform: rotate(45deg) translateX(182px) translateY(-108px);
                        .fish-bone__barb__circle-container_icon {
                            position: absolute;
                            top: 3px;
                            right: 3px;
                            background-color: #ffFFFF;
                            transition: all 0.3s;
                            line-height: 25px;
                            cursor: pointer;
                        }
                        .fish-bone__barb__content__guideLine--even { //偶数个
                            position: absolute;
                            display: inline-block;
                            width: 50px;
                            height: 1px;
                            left: -50px;
                            top: 12px;
                            background-color: #07c160;
                        }
                        .fish-bone__barb__content__guideLine--odd {
                            position: absolute;
                            display: inline-block;
                            width: 50px;
                            height: 1px;
                            left: 78px;
                            top: 12px;
                            background-color: #07c160;
                        }
                        ul {

                            border: 1px solid #07c160;
                            position: absolute;
                            top: 30px;
                            z-index: 100;
                            background-color: #ffFFFF;
                            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);

                        }
                        &--active {
                            height: 120px;
                            overflow: auto;
                            transform: rotate(45deg) translateX(113px) translateY(-85px);
                            border-bottom: none;
                            border-right: none;
                            border-top: none;
                        }
                        &--even { //偶数列
                            transform: rotate(45deg) translateX(0px) translateY(-108px);
                        }
                    }
                }
                &--bottom {
                    transform: rotate(45deg);
                    left: 291px;
                    transform-origin: 0px 0px;
                    .fish-bone__barb__content {
                        position: relative;
                        width: 80px;
                        height: 25px;
                        font-size: 12px;
                        line-height: 25px;
                        text-align: left;
                        padding-left: 5px;
                        color: #07c160;
                        border: 1px solid #07c160;
                        border-radius: 2px;
                        transition: all 0.3s;
                        transform: rotate(315deg) translateX(192px) translateY(84px);
                        .fish-bone__barb__circle-container_icon {
                            position: absolute;
                            top: -8px;
                            right: -75px;
                            background-color: #ffFFFF;
                            transition: all 0.3s;
                            line-height: 25px;
                            cursor: pointer;
                        }
                        .fish-bone__barb__content__guideLine--even { //偶数个
                            position: absolute;
                            display: inline-block;
                            width: 50px;
                            height: 1px;
                            left: -50px;
                            top: 12px;
                            background-color: #07c160;
                        }
                        .fish-bone__barb__content__guideLine--odd {
                            position: absolute;
                            display: inline-block;
                            width: 50px;
                            height: 1px;
                            left: 78px;
                            top: 12px;
                            background-color: #07c160;
                        }
                        &--active {
                            height: 120px;
                            overflow: auto;
                            transform: rotate(315deg) translateX(106px) translateY(138px);
                            border-bottom: none;
                            border-left: none;
                            border-top: none;
                        }
                        &--even { //偶数列
                            transform: rotate(315deg) translateX(10px) translateY(84px);
                            .fish-bone__barb__circle-container_icon {
                                right: 53px;
                            }
                        }
                        ul {
                            border: 1px solid #07c160;
                            position: absolute;
                            top: 30px;
                            z-index: 100;
                            background-color: #ffFFFF;
                            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
                        }
                    }
                }
            }

        }

    }
</style>
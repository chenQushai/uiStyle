<template>
    <div class="padding-10">
        <div class="container">
            <div class="content">
                <div ref="imgViewSlot" class="header-nav-divider">图片查看器</div>
                <p class="module-introduced">查看图片是都会有图片缩率图用于点击查看图片</p>
                <p class="module-introduced">1.在使用缩率图前需要给缩率图外层给出宽高，指定缩率图大小</p>
                <p class="module-introduced">2.传入imageList数据即可，默认会显示第一张图片</p>
                <div class="margin-top10">
                    <div style="width: 50px;height: 50px">
                        <imgView :imageList="imgData" @click.native="showImage"></imgView>
                    </div>
                </div>
                <codemirror class="margin-top20" v-model="imageSlotCode"/>

                <div ref="imgViewBig" class="header-nav-divider">图片放大查看器 一般可搭配imgView图片缩略图配合</div>
                <p class="module-introduced">1.需要传入coverNavData，是图片的list集合，其中包含title,src也可配置title,src</p>
                <p class="module-introduced">2.navName选中的title名</p>
                <p class="module-introduced">3.dataKey用于配置的title和src
                    例如：{
                        title: 'label',
                        src: 'url'
                    }
                </p>

                <p class="module-introduced">4.coverDialogShow布尔值显示查看弹窗，可配置sync异步关闭弹窗</p>

                <codemirror class="margin-top20" v-model="viewPhotoCode"/>

                <viewPhoto :coverDialogShow.sync="imageShow" :coverNavData="data"></viewPhoto>

                <el-button class="margin-top10" type="primary" size="mini" @click="showImage">查看图片</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import imgView from './component/image-view'
    import imageCode from './imageCode'
    import viewPhoto from './component/viewPhoto'
    export default {
        name: "image-view-demo",
        data() {
            return {
                imgData: ['https://img1.baidu.com/it/u=1361135963,570304265&fm=26&fmt=auto&gp=0.jpg'],
                imageShow: false,
                data: [
                    {
                        title: '示例一',
                        src: 'https://img2.baidu.com/it/u=1539068888,918756408&fm=26&fmt=auto&gp=0.jpg'
                    }
                ],
                imageSlotCode: imageCode.imageSlotCode,
                viewPhotoCode: imageCode.viewPhotoCode
            }
        },
        components: {
            imgView,
            viewPhoto
        },
        mounted() {
            this.$store.commit("changeNavList", [
                {
                    el: 'imgViewSlot',
                    title: '图片缩略图'
                },
                {
                    el: 'imgViewBig',
                    title: '图片放大查看器'
                }
            ]);
        },
        methods: {
            showImage() {
                this.imageShow = true;
            }
        }
    }
</script>

<style scoped>

</style>
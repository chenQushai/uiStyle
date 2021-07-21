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
                        <imgView :imageList="imgData"></imgView>
                    </div>
                </div>
                <codemirror class="margin-top20" v-model="imageSlotCode"/>

                <div ref="imgViewBig" class="header-nav-divider">图片放大查看器</div>
                <p class="module-introduced">1.需要传入coverNavData，图片的list集合，其中包含title,src</p>

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
                imageSlotCode: imageCode.imageSlotCode,
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
        }
    }
</script>

<style scoped>

</style>
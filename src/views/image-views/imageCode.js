export default  {
    imageSlotCode: `
     <div style="width: 50px;height: 50px">
         <image-view :imageList="imgData" @click.native="showImage"></image-view>
     </div>
     
     data() {
        return {
            imgData:['https://img1.baidu.com/it/u=1361135963,570304265&fm=26&fmt=auto&gp=0.jpg']
        }
     },
      methods: {
            showImage() {
                this.imageShow = true;
            }
      }
    `,

    viewPhotoCode: `
      <viewPhoto :coverDialogShow.sync="imageShow" :coverNavData="data"></viewPhoto>
      
      data() {
        imageShow: false,
        data: [
            {
                title: '示例一',
                src: 'https://img2.baidu.com/it/u=1539068888,918756408&fm=26&fmt=auto&gp=0.jpg'
            }
        
        ]
      
      },
      methods: {
          showImage() {
                this.imageShow = true;
          }
      }
      
      
      
      
      
    `
}
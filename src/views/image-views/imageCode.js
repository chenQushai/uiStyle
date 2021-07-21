export default  {
    imageSlotCode: `
     <div style="width: 50px;height: 50px">
         <image-view :imageList="imgData"></image-view>
     </div>
     
     data() {
        return {
            imgData:['https://img1.baidu.com/it/u=1361135963,570304265&fm=26&fmt=auto&gp=0.jpg']
        }
     }
    `,
}
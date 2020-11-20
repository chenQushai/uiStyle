export default {
    generalCss: `
    /* 左浮动 */
    .right { 
        float: right;
    }
    
    /* 右浮动 */
    .left {
        float: left;
    }
    
    /* 鼠标手形样式 */
    .pointer {
        cursor: pointer;
    }
    
    /* 文本左对齐 */
    .text-left {
        text-align: left !important;
    }
    
    /* 文本右对齐 */
    .text-right {
      text-align: right;
    }

    /* 文本居中对齐 */
    .text-center {
      text-align: center;
    }

    /* 强制内容换行*/
    .break {
      word-break: break-all;
      word-wrap: break-word;
    }

    /*强制内容不换行 */
    .not-break {
      word-break: keep-all;
      word-wrap: normal;
    }
    
   /* 超出部分隐藏 */
    .hidden {
      overflow: hidden;
    }

    .auto {
      overflow: auto;
    }
    
    textarea {
      resize: none !important;
      font-family: inherit;
    }

    /*隐藏元素 */
    .invisible {
      visibility: hidden;
    }

    /*隐藏元素 */
    .none {
      display: none !important;
    }

   
    `,

    borderCode: `
     /* 边框 */
    .border {
      border: 1px solid rgb(214, 214, 214);
    }
    
    /* 内边距 */
    .padding {
      padding: 10px 15px;
    }
    
    .padding-top-bottom-5 {
      padding: 5px 0;
    }
    
    .padding-5 {
      padding: 5px;
    }
    
    .padding-10 {
      padding: 10px;
    }
    
    .padding-20 {
      padding: 20px;
    }
    
    * 外边距 */
    .margin {
      margin: 10px 15px;
    }
    
    margin-bottom10 {
      margin-bottom: 10px;
    }

    .margin-top10 {
      margin-top: 10px;
    }
    
    .margin-top20 {
      margin-top: 20px;
    }

    .margin-top30 {
      margin-top: 30px;
    }
    
    .margin-top40 {
      margin-top: 40px;
    }

    .margin-top50 {
      margin-top: 50px;
    }
    
    .margin-top5 {
      margin-top: 5px;
    }

    .margin-top8 {
      margin-top: 8px;
    }
    
    .margin-bottom5 {
      margin-bottom: 5px;
    }

    .margin-bottom10 {
      margin-bottom: 10px;
    }

    .margin-bottom20 {
      margin-bottom: 20px;
    }

    .margin-bottom30 {
      margin-bottom: 30px;
    }

    .margin-bottom50 {
      margin-bottom: 50px;
    }

    .margin-top15 {
      margin-top: 15px;
    }

    .margin-left10 {
      margin-left: 10px;
    }

    .margin-left15 {
      margin-left: 15px;
    }

    .margin-left20 {
      margin-left: 20px;
    }
    
    .margin15 {
      margin-left: 15px;
      margin-right: 15px;
    }

    .margin-right10 {
      margin-right: 10px;
    }

    .margin-right20 {
      margin-right: 20px;
    }

    .margin-right5 {
      margin-right: 5px;
    }

    .margin-right5-per {
      margin-right: 5%;
    }

    .margin-right100 {
      margin-right: 100px;
    }

    .padding-top20 {
      padding-top: 20px
    }
    
    `,
    backgroundCode: `
    /*白色背景*/
    .white-bg {
      background-color: #fff;
    }
    /*灰色背景*/
    .gray-bg {
      background-color: #606266;
    }
    /*蓝色背景*/    
    .blue-bg {
      background-color: rgb(56, 155, 255);
    }
    /*绿色背景*/ 
    .green-bg {
      background-color: rgb(68, 180, 73);
    }
    /*橙色背景*/
    .orange-bg {
      background-color: rgb(245, 108, 108);
    }
    /*浅白背景*/
    .light-blue-bg {
      background: #F2F7FF
    }
    
     /*灰色边框*/
    .border-gray {
      border: 1px solid rgb(227, 232, 241);
    }
     /*蓝色边框*/
    .border-blue {
      border: 1px solid rgb(56, 155, 255);
    }
    /*绿色边框*/
    .border-green {
      border: 1px solid rgb(68, 180, 73);
    }
    
     /*绿色字体*/
    .green-main {
        color: #44b449;
    }
    /*蓝色字体*/
    .blue-main {
      color: rgb(56, 155, 255);
    }
    /*红色字体*/
    .red-main {
      color: red;
    }
    /*灰色字体*/
    .gray-main {
      color: #606266;
    }
    `
}
export default {
    lazy: `
         <div class="loading-content" v-lazyModules="load">
             <div style="height: 200px;background-color: #9a6e3a"></div>
             <div style="height: 200px;background-color: #44b449"></div>
             <div style="height: 200px;background-color: red"></div>
             <div  style="height: 200px;background-color: #795da3"></div>
         </div>    
       methods: {
            load(index,node,hasInView) {
                console.log(node,index,hasInView)
            }
       } 
    `
}
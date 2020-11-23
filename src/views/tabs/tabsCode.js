export default {
    basicTabs: `
    <div class="home-tabs">
          <el-tabs v-model="ItemTabsValue" type="card"
                @tab-click="tabClick"
                    closable @tab-remove="removeTab">
                <el-tab-pane
                     v-for="(item, index) in itemTabs"
                     :key="item.name"
                     :label="item.label"
                     :name="item.name"
                >
                </el-tab-pane>
         </el-tabs>
    </div>
    
    <!--data-->
    
      ItemTabsValue: '1',
      itemTabs: [
           {
                label: '用户管理',
                name: '1'
           },
           {
                 label: '配置管理',
                 name: '2'
           },
           {
                 label: '角色管理',
                 name: '3'
          }
      ],
    <!--methods-->
    tabClick(tab) {
         this.ItemTabsValue = tab.name;
     },
    removeTab(targetName) {
         let tabs = this.itemTabs;
         let activeName = this.ItemTabsValue;
         if (activeName === targetName) {
              tabs.forEach((tab, index) => {
                  if (tab.name === targetName) {
                      let nextTab = tabs[index + 1] || tabs[index - 1];
                      if (nextTab) {
                          activeName = nextTab.name;
                      }
                  }
              });
         }

         this.ItemTabsValue = activeName;
         this.itemTabs = tabs.filter(tab => tab.name !== targetName);
    }
    `,

    trapezoidTabs:`
    <div class="trapezoid-tabs">
         <el-tabs v-model="ItemTabsValue" type="card" @tab-click="tabClick">
             <el-tab-pane
                 v-for="(item, index) in itemTabs"
                     :key="item.name"
                     :label="item.label"
                     :name="item.name"
                 >
             </el-tab-pane>
         </el-tabs>
    </div>
    `




}
export default  {
    state: {
        navList: []
    },
    mutations: {
        changeNavList(state,vlaue) {
            state.navList = vlaue;
            console.log(state.navList)
        }
    },
    actions: {

    },
    getters: {

    }
}
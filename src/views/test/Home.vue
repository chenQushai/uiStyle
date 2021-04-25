<template>
    <div>
        hello,进入页面成功
        <el-button type="primary" @click="getData">调用接口</el-button>
        <p>{{responseData}}</p>
    </div>
</template>

<script>
    import {test} from "../../api/test/test";

    export default {
        name: "Home",
        data() {
            return {
                responseData: ''
            }
        },
        mounted() {
            window.showMessage = (msg) => {
                this.showMessage(msg)
            };
            window.getData = () => {
                this.getData()
            }
        },
        methods: {
            showMessage(msg) {
                alert(`获取到${msg}消息`)
            },
            async getData() {
                const {data} = await test();
                this.responseData = data
            }
        }
    }
</script>

<style scoped>

</style>
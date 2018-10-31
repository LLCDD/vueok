<template>
    <div>
        <!-- {{ this.$store.state.yue1 }} -->
        <h1>绑定页面</h1>
        <input type="text" v-model="msg" placeholder="请输入卡号">
        <input type="password" placeholder="请输入密码">
        <input type="text" placeholder="请输入银行姓名">
        <input type="button" value="提交" @click="top()">
        {{msg}}
    </div>
</template>

<script>
    import axios from 'axios'
    //  绑定银行卡的页面
    export default {
        data(){
            return {
                msg:""
            }
        },
        methods: {
            top(){
                var _this = this;
                console.log(_this.msg)
                axios({
                    method:"post",
                    url:"http://127.0.0.1:3000/ka",
                    params:{name:_this.$store.state.msg,ka:_this.msg,money:0}
                }).then(function(data){
                    var data = data.data;
                    // console.log(data)
                    if(data == 1){
                        alert("添加成功");
                    }
                })
            }
        }
    }
</script>

<style scoped>
div{
    width: 100%
}
h1{
    background: red;
    text-align: center;
}
input{
    margin-top: 1rem;
    height: 2rem;
    width: 94%;
    border: 0;
    margin-left: 3%;
    background: pink;
    border-radius: 10px;
}

</style>

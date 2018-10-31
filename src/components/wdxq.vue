<template>
    <div class="div1">
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="item in msg1">
                用户名：{{ item.username }}<br>
                银行卡：{{ item.ka }}<br>
                身份证：{{ "未绑定" }}<br>
                phone：{{ "****" }}<br>
                地址：{{ "*****" }}
            </li>

        </ul>
    </div>
</template>

<script>
import axios from 'axios';
// 我的详情
    export default {
        data(){
            // msg:"详情"
            return {
                msg:"个人资料",
                msg1:""
            }
        },
        mounted () {
            var _this = this;
            axios({
                method:"post",
                url:"http://127.0.0.1:3000/wdxq",
                params:{name:this.$store.state.msg}

            }).then(function(data){
                
                var data = data.data
                // console.log(data);
                _this.msg1 = data;
        })
       
    }
}   
</script>

<style scoped="">
div{
    width: 100%;
}
h1{
    background: red;
    text-align: center
}
li{
    height: 10rem;
    font-size: 1.4rem;
    line-height: 2rem
}
</style>

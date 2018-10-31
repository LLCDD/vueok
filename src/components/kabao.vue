<template>
    <div>
        <h1>{{ msg }}</h1>
        <li @click="ka()">
            <span >{{ msg1 }}</span>
        </li>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            msg:"我的卡包",
            // bool:true
            msg1:"暂无绑定银行卡 点我绑定"
        }
    },
    methods: {
        ka(){
            this.$router.push('/ka')
        }
    },
    // 先判断一下是否登陆
    mounted () {
        var _this =this;
        axios({
            method:"post",
            url:"http://127.0.0.1:3000/kabao",
            params:{name:_this.$store.state.msg},
        }).then(function(data){

             var data = data.data;
            if(data.ka == undefined){

            }else{
                _this.msg1 = "卡号：" +data.ka ;
            }
        })
    } 
}
</script>

<style scoped>
div{
    width:100%;
}
h1{
    background: red;
    text-align: center;
}
li{
    list-style: none;
    height: 4rem;
    background: pink;
    border-radius: 10px;
    width: 95%;
    margin-left: 2.5%;
    margin-top: 0.4rem;
    text-align: center;
    font-size: 1.4rem;
    line-height: 4rem
}
</style>

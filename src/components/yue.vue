<template>
    <div>
        <!-- {{ msg }} -->
        {{ this.$store.state.yue1 }}
        <h1>欢迎{{ this.$store.state.msg }}</h1>

        你的可用余额为：<span>{{ this.$store.state.yue1 }}</span>
        <br>
        <input type="button" value="点我立即充值" @click="top()">

        <div class="box" v-if="bool">
            <input type="text" v-model="msg1" placeholder="请输入你的卡号">
            <input type="text" v-model="msg2" placeholder="请输入你的金额">
            <input type="button" value="点击确定完成充值" @click="top1()">
        </div>
        <!-- {{ msg1 }} -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            msg:"余额",
            msg1:"",
            msg2:"",
            bool:false
        }
    },
    methods:{
        top(){
            this.bool = true;
        },
        top1(){
            // this.bool= false
            var _this = this;
            // if(this.msg2 !=""){
                axios({
                    method:"post",
                    url:"http://127.0.0.1:3000/yue",
                    params:{ka:_this.msg1,money:_this.$store.state.yue1,username:_this.$store.state.msg}
                }).then(function(data){
                    var data = data.data;
                if(data){
                    alert("充值成功")
                        // console.log(data.money);
                        _this.$nextTick(function(){
                            var a = _this.$store.state.yue1;
                            a = Number(a)
                            // console.log(a)
                            var b = Number(_this.msg2);
                            // console.log(b)
                            var c = a + b;
                             _this.$store.commit('yue',c)
                            _this.bool = false;
                            _this.msg1 = _this.msg2 = ""
                        })
                       
                        
                        // console.log(a)
                       
                        // setTimeout(function(){
                          
                        // },2000)
                        
                }
                })
            
        // }else{
        //     alert("请输入完整")
        // }
    }
},
// mounted() {
//     var _this = this;
//     axios({
//         url:"http://127.0.0.1:3000/yue",
//     }).then(function(data){
//         console.log(data)
//     })
// },

}
</script>

<style scoped>
div{
    width: 100%;
}
h1{
    background: red;
}
span{
    color: red;
    font-size: 2rem;
    font-style: italic
}
input{
    width: 80%;
    height: 3rem;
    font-size: 1.5rem;
    border: 0;
    margin-left: 10%;
    border-radius: 10px;
    background: antiquewhite;
    margin-top: 1rem;
}
.box{
    background: pink;
    height: 15rem;
    opacity: .7;
}
</style>


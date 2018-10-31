<template>
    <div>
        <!-- {{ this.$store.state.id1 }} -->
        <h1>欢迎开看此股</h1>    
        <div class="div">
            <h2>gu名称：{{ msg.name }}</h2>
            <h2>利率：<span>{{ msg.lilu}}</span></h2>

            <h2>每股：{{ msg.money }}rem</h2>
            <input class="input" type="button" value="立即购买" @click="top()">
        </div>
        <!-- <button >立即购买<button> -->
            <div class="box" v-if="bool">
               <h2>{{ msg.name }}</h2>
               <input class="shu" type="text" placeholder="请输入你要买的个数" v-model="msg1">
               <p>总金额： {{ sun }} </p>
                <input class="button" type="button" value="点我购买" @click="mai()">
            </div>
        
    </div>    
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            msg:"",
            msg1:"1",  // 股票的运算
            qian:0,
            bool:false,
        }
    },
    methods:{
        top(){
            this.bool = true
        },
        mai(){
            var flag = false ;
           var a = this.sun;  // 买此股的价格
           var b = this.$store.state.yue1  // 账户的余额
           if(b > a){
               flag = true;
            //    修改钱数
               var _this = this;
                var c = b - a;
                console.log(c)
               axios({
                   method:"post",
                   url:"http://127.0.0.1:3000/gup",
                    params:{username:_this.$store.state.msg,money:c}
               }).then(function(data){
                   console.log(data)
                   alert("购买成功")
               })
           }else{
               alert("余额不足 快去充值吧");
               this.$router.push('/yue')
           }
 
           if(flag){
               var data = new Date();
            //     获取的毫秒数
               var timer = data.getTime()
            //    正常日期
                var year = data.getFullYear()+"/";
                var mouth = data.getMonth()+1 +"/";
                var ri = data.getDate()+"/"
                var hour = data.getHours()+"/"
                var minutes = data.getMinutes()+"/";
                var send = data.getSeconds()
                var b = ""+year + mouth + ri+hour+minutes+send;

             console.log(b);
                // console.log(data.getTime())
                
            var _this = this;
            console.log(this.msg.lilu)
               axios({
                   method:"post",
                   url:"http://127.0.0.1:3000/cha",
                   params:{name:_this.msg.name,count:_this.msg1,time:timer,money:_this.sun,timer:b,lilu:_this.msg.lilu}
               }).then(function(data){
                   console.log(data.data);
                   
               })
           }
        }
    },
    computed: {
          sun(){
              return this.msg1 * this.qian
          }
    },
    mounted () {
        // console.log(this.$store.state.id1)
        var _this = this;
        axios({
            method:"post",
            url:"http://127.0.0.1:3000/gpxq",
            params:{"id":_this.$store.state.id1}
        }).then(function(data){
            console.log(data.data)
            _this.msg = data.data[0];
            _this.$store.commit('gup',data.data[0].money)
            _this.qian = _this.$store.state.gu;
        })
    }
}
</script>

<style scoped>
div{
    width: 100%;
}
h1{
    background: red;
    text-align: center
}
.div{
    min-height: 5rem;
    background: pink;
    text-align: center;
}
h2{
    margin-top: 1rem;
}
span{
    font-style: italic;
    color: red;
}
.input{
    width: 80%;
    height: 2.4rem;
    font-size: 1.5rem;
    border: 0;
    border-radius:10px;
    background: red; 
    margin-top: 1rem;
}
.box{
    width: 80%;
    height: 10rem
    ;margin-top:1rem;
    background: red;
    margin-left: 10%;
    border-radius: 10px;
    text-align: center
}
.shu{
    height: 2rem;
    font-size: 1.4rem;
}
p{
    font-size: 1.2rem;
}
.button{
    width: 5rem;
    height: 2rem;
}
</style>

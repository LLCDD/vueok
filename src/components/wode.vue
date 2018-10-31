<template>
    <div>
        <!-- 等路的用户名 -->
       <div class="div1">
           <div class="ys"></div>
           <h2 @click="top()">{{ msg1 }}</h2>
       </div>
       <div class="div2">
         <span class="span" @click="top1()">
            &#xe657;
            <p class="span1">我的详情</p>
         </span>
         <span class="span" @click="top2()">
            &#xe696;
              <p class="span1">卡包</p>
         </span>
          <span class="span" @click="top3()">
             &#xe662;
              <p class="span1">金额</p>
         </span>
          <span class="span">
             &#xe651;
              <p class="span1">其他</p>
         </span>
       </div>
       <hr>
       <div class="div3">
           <h3>我的资产</h3>
           <div class="div4">
                <span class="span2">
                    &#xe666;
                </span>
                资产报告
           </div>
            <div class="div4">
                <span class="span2">
                    &#xe696;
                </span>
                交易详情
           </div>
           <div class="div4">
                <span class="span2">
                    &#xe64c;
                </span>
                银行卡
           </div>
           <div class="div4">
                <span class="span2">
                    &#xe662;
                </span>
                账户余额
           </div>
       </div>
       <hr>
    </div>    
</template>

<script>
// index  我的组件
    export default {
        name:"wode",
        data(){
            return {
                msg:"我的组件",
                msg1:"登陆/注册",
            }
        },
        methods:{
            top(){
                if(this.msg1 == "登陆/注册"){
                    this.$router.push("/login")
                }
            },
            top1(){
                if(this.$store.state.msg.length>0){
                    this.$router.push('/wdxq')
                }else{
                    alert("你还没有登陆那")
                }
            },
            // 查询绑定的银行卡
            top2(){
                if(this.$store.state.msg>0){
                    this.$router.push('/kabao')
                }else{
                    alert("你还没有登陆那")
                }
            },
            // 自己的余额
            top3(){
                if(this.$store.state.msg > 0){
                    this.$router.push("/yue")
                }else{
                    alert("需要登陆才能看")
                }
            }
        },
        mounted () {
            if(this.$store.state.msg.length > 0){
                this.msg1 = "欢迎"+this.$store.state.msg
            }
        }
    }
</script>

<style scoped="a">
.div1{
    height: 4rem;
    width: 94%;
    margin-left: 3%;
    background: #ccc;
    border-radius: 5px;
    margin-top: 0.5rem;
}
h2{
    line-height: 4rem;
    margin-left: 2rem;
    width: 90%;
    /* display: inline-block; */
}
.div2{
    height: 6rem;
    /* background: red; */
    margin-top: 1rem;
}
@font-face {
  font-family: iconfont;
  src: url('../font_0m7ougx2yeh/iconfont.ttf');

}
.span{
    font-family: iconfont;
    font-size: 2rem;
    width: 24%;
    display: inline-block;
    text-align: center;
    margin-top: 1rem
}
.span1{
    font-size: 1rem
}
hr{
    height: 1rem;
    background: #f0eff4;
    border: 0;
}
.div3{
    height: 8rem;
    background: white;
    padding: 1rem;
    width: 90%;
}
.ys{
    height: 3rem;
    width: 3rem;
    border-radius: 50%; 
    background: palegoldenrod;
    margin: 0 1rem;
    float:left;
    margin-top: 0.5rem;  
}
.span2{
    font-family: iconfont ;
    font-size: 1.4rem
}
.div4{
   float: left;
   width: 49%;
   margin-top: 1rem
}
</style>
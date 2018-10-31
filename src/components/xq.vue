<template>
    <div>
        <h3>欢迎来到红颜科技</h3>
       <img src="../assets/大鱼海棠桌面壁纸 - 1.jpg" alt="">
       <hr>
       <div class="div1">
           <h1>天弘优选债卷</h1>
           聚焦利率摘  稳健号策略
           <h1>+5.5%</h1>
           <button @click="top()">立即购买</button>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:"3243",
                msg1:'',
            }
        },
        methods: {
            top(){
                this.msg1 = this.$store.state.msg;
                console.log(this.msg1)
                var a = this.msg1
                if(a.length <= 0){
                    alert("只有登陆了才能购买呀");
                    this.$router.push('/login')
                }else{
                    alert("购买成功")
                }
            }
        }
    }
</script>

<style scoped="">
h3{
    height: 2rem;
    line-height: 2rem;
    text-align: center
}
img{
    width: 100%;
    display: block;
}
hr{
    height: 1rem;
    background: #f0eff4;
    border: 0;
}
.div1{
    padding-top: 1rem;
    width: 100%;
    height: 22rem;
    background: red;
    text-align: center
}
button{
    height: 3rem;
    width: 60%;
    border: 0;
    font-size: 2rem;
    border-radius: 10px;
    background: palegoldenrod
}
</style>

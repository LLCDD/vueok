<template>
    <div>
       <div class="div" v-if="bool">
           <p>{{ msg1 }}</p>
           <span class="span" @click="guan()" @got="one()">×</span>
       </div>
       <img class="img1" src="../assets/thVGHNPC9U.jpg">
       <div class="div1">
            <img class="img2" src="../assets/5.jpg">
            <img class="img2" src="../assets/6.jpg">
            <img class="img2" src="../assets/5.jpg">
            <img class="img2" src="../assets/6.jpg">
            <img class="img2" src="../assets/6.jpg">
            <img class="img2" src="../assets/5.jpg">
            <img class="img2" src="../assets/6.jpg">
            <img class="img2" src="../assets/5.jpg">
        </div>
        <hr>
        <div class="div2">
            <h4>热门推荐</h4>
            <mt-swipe :auto="0" style="background:#fff;height:78%">
                <mt-swipe-item>
                    <div class="a" @click="top()">
                        <h1>+1.78%</h1>
                        <p style="margin-bottom:0.4rem">进半年涨</p>
                        <p style="margin-bottom:0.4rem">天宏欲例</p>
                        <br>
                        新股上市 涨涨涨
                    </div>
                    <div class="a" @click="top()">
                         <h1>+5.78%</h1>
                        <p style="margin-bottom:0.4rem">进半年涨</p>
                        <p style="margin-bottom:0.4rem">天宏欲例</p>
                        <br>
                        新股上市 涨涨涨
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                     <div class="a" @click="top()">
                        <h1>+1.78%</h1>
                        <p style="margin-bottom:0.4rem">进半年涨</p>
                        <p style="margin-bottom:0.4rem">天宏欲例</p>
                        <br>
                        新股上市 涨涨涨
                    </div>
                    <div class="a" @click="top()">
                         <h1>+5.78%</h1>
                        <p style="margin-bottom:0.4rem">进半年涨</p>
                        <p style="margin-bottom:0.4rem">天宏欲例</p>
                        <br>
                        新股上市 涨涨涨
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                     <div class="a" @click="top()">
                        <h1>+1.78%</h1>
                        <p style="margin-bottom:0.4rem">进半年涨</p>
                        <p style="margin-bottom:0.4rem">天宏欲例</p>
                        <br>
                        新股上市 涨涨涨
                    </div>
                    <div class="a" @click="top()">
                         <h1>+5.78%</h1>
                        <p style="margin-bottom:0.4rem">进半年涨</p>
                        <p style="margin-bottom:0.4rem">天宏欲例</p>
                        <br>
                        新股上市 涨涨涨
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>

<script>
    // 基金的主页
    export default {
        data(){
            return {
                msg:"基金",
                msg1:"是合法的你疯啦看到了副刊上了的看法那都可能法律卡尼拉克是的",
                bool:true
            }
        },
        methods: {
            guan(){
                this.bool = false;
            },
            one(){
                // console.log(this.msg1);
                var timer = setInterval(()=>{
                    var start = this.msg1.substring(0,1)
                    var end = this.msg1.substring(1)
                    this.msg1 = end+start;
                },500)
            },
            // 进股票的详情页
            top(){
                this.$router.push('/xq')
            }
        },
        mounted () {
           this.one()
        }
    }
</script>


<style scoped="">
.div{
    width: 91.3%;
    height: 3rem;
    background: #fff6e7;
    line-height: 3rem;
    padding: 0 1rem
}
.img1{
    width: 95%;
    border-radius: 10px;
    margin-left: 2%;
    margin-top: 0.4rem;
}
p{
    display: inline-block;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
}
.span{
    float:right;
    color: fff6e7;
}

.img2{
    height: 5rem;
    margin: 0.5rem 0.4rem
}
hr{
    height: 1rem;
    background: #f0eff4;
    border: 0;
}
.div2{
    height: 16rem;
    width: 91%;
    background: pink;
    padding: 0 1rem;
}
h4{
    font-size: 1.3rem;
    font-family: 'Courier New', Courier, monospace;
    padding: 1rem 0
 }
 .a{
     float:left;
     width: 47%;
     background: #fff;
     ;height:100%;
     margin: 0 1%;
     text-align: center;
     border: 1px solid #ccc;
     border-radius: 10px;
 }
 h1{
     font-family: "楷体";
     color:red;
     margin-top:3rem;
 }
</style>
<template>
    <div>
        <!-- {{ this.$store.state.yue1 }} -->
        <!-- <button @click="top1()">测试</button> -->
       <!-- {{ shuju }} -->
       <!-- {{ this.$store.state.msg }} -->
       <!-- 没有登陆的页面 -->
        <div v-if="bool" class="div">
            <img class="img1" src="../assets/1.png">
            <div class="div1">
                <img class="img2" src="../assets/2.jpg">
                <img class="img2" src="../assets/3.jpg">
                <img class="img2" src="../assets/2.jpg">
                <button @click="login()">立即登陆体验</button>
            </div>   
        </div>
        <!-- 登陆的页面 -->
        <div class="div4" v-if="bool1">
            <span class="span4" @click="xq()">&#xe696; 交易记录</span> <br>
            <span>总资产(rem)</span>
            <h2 class="h2"><i>{{ msgm }} 元</i></h2>
             <span>最新收益(rem){{ shouyi }}</span>
        </div>
        <div class="div5" v-if="bool1">
            <div class="div6">
                <img class="img4" src="../assets/8.jpg">
                <span class="span5">余额宝</span><br>
                <span class="span6">美丽的资产</span>
            </div>
            <div class="div6">
                <img class="img4" src="../assets/9.jpg">
                <span class="span5">余额宝  {{ money }}万</span><br>
                
                <span class="span6">{{ money }}万</span>
            </div>
             <div class="div6">
                <img class="img4" src="../assets/10.jpg">
                <span class="span5">基金   {{ money }}万</span><br>
                
                <span class="span6">{{ money }}万</span>
            </div>
             <div class="div6">
                <img class="img4" src="../assets/11.jpg">
                <span class="span5">智投宝   {{ money }}万</span><br>
               
                <span class="span6">{{ money }}万</span>
            </div>
        </div>

        <hr>
        <!-- 登陆的页面 -->
        <img class="img7" src="../assets/12.jpg" v-if="bool1">
        <!-- 没有登陆的页面 -->
        <div class="div2" v-if="bool" @click="top()">
            <h1>天弘观点 <span class="span">关注市场动态 , 探寻投资机会</span></h1>
            <div class="div3">
                <h1 class="h1">+5.69%</h1>
                <span class="span">天弘优选</span>
            </div>
            <img class="img3" src="../assets/7.jpg">
            
        </div>
    <hr>
    <div class="box" v-if="bool1">
        <div class="box1" v-for="(item,i) in list" :key="i" @click="top2(i)">
            <!-- {{ item }} -->
            <h3>股名：{{ item.name}}</h3>
            <!-- <h4>股价：{{ item.money }} </h4> -->
            <h4>股率：{{ item.lilu }}%</h4>
        </div>
    </div>
    <!-- 没有登陆的页面 -->
    <div class="div3" v-if="bool">
                <h1 class="h1">+5.69%</h1>
                <span class="span">天弘优选</span>
    </div>
    <div class="div3" v-if="bool">
                <h1 class="h1">+5.69%</h1>
                <span class="span">天弘优选</span>
    </div>

    <ul v-if="bool1"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="3"
        >
        <li class="li" v-for="(item,i) in list" :key="i"></li>
    </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    // 今日的主页
    export default {
        name:'jinri',
        data(){
            return {
                msg:"今日",
                // 判断是登陆了 还是未登录
                msg1:this.$store.state.msg,
                bool:false,  // 未登录
                bool1:true ,  // 登陆时的状态
                //  等路成功的数据
                msgm:this.$store.state.yue1,
                shouyi:"0.00",
                // 弘钱包的数据
                money:"",
                // 基金的数据
                jj:"0.00",
                // 智投包的数据
                zt:"0.00",
                // 保存后台传来数据
                loading:false,
                list:[],
                id:"",
            }
        },
        methods:{
            a(){
                var a = this.msg1
                if(a.length > 1){
                    this.bool = false
                }
            },
            // 点击去登陆
            login(){
                this.$router.push('/login')
            },
            // 是否登陆
            top(){
                 var a = this.msg1
                if(a.length > 0){
                    alert("先登陆才能查看1")
                }else{
                    alert("先登陆才能查看")
                }
            },
            loadMore() {
                var _this = this;
                this.loading = true;
                setTimeout(() => {
                    axios({
                        url:"http://127.0.0.1:3000/jinri"
                    }).then(function(data){
                        var data = data.data;
                            for(var i = 4 ; i < data.length ; i++){
                                _this.list.push(data[i])
                            }
                            //   console.log(_this.list)
                            _this.loading = false;
                    })
                   
                }, 200);
            },
            top2(i){
                var a = this.list;
                this.id = a[i].id
                console.log(a[i]._id);
                // console.log(this.id)
                this.$store.commit('id',a[i]._id);
                this.$router.push('/gpxq')
            },
            //   交易记录
            xq(){
                this.$router.push('/jilu')
            }
        },
        mounted () {
            if(this.$store.state.msg.length >0){
                this.bool1 = true;
                this.bool = false;
            }else{
                this.bool1 = false;
                this.bool = true
            }
                var _this = this;
                if(this.bool1 == true){
                    axios({
                        url:"http://127.0.0.1:3000/jinri"
                    }).then(function(data){
                        // console.log(data.data);
                        _this.list = data.data;
                    })
                }
                var a = this.$store.state.yue1;
                a = parseInt(a/10000);
                // console.log(a)
                this.money = a;
           
        },
        created () {
             if(this.$store.state.msg.length >0){
                var _this = this;
                axios({
                    method:"post",
                    url:"http://127.0.0.1:3000/shuju",
                    params:{username:_this.$store.state.msg}
                }).then(function(data){
                    console.log(data.data)
                    var data = data.data;
                    // console.log(data.money)
                    _this.$store.commit('yue',data.money)

                })
            }

        }
    }
</script>


<style scoped>
.div{
    height: 100%;
    width: 94%;
    background:white;
    margin-left: 3%;
}
.div .div1{
    height: 30%;
    width: 100%;
    background: #ffffff;
}
.img1{
    display: block;
    height:30%;
    width: 100%; 
}
.img2{
    display: inline-block;
    width: 20%;
    height: 100%;
    margin: 0 6%;
}
button{
    height: 2.5rem;
    width: 80%;
    margin: 1rem 0;
    margin-left: 10%;
    border-radius: 18px;
    border: 0;
    background: #2f78eb;
    color: white;
    font-size: 1rem;
    box-shadow: 2px 2px 1px #5a87cf;
}
hr{
    height: 1rem;
    border: 0;
    background: #ccc;
}
.div2{
    min-height: 1rem;
    background: white;
    padding: 1rem;
    overflow: hidden;
}
h1{
    font-size: 1.4rem;
    font-weight: 400;
    float: left;
    height: 2rem;
    width: 100%;
    margin: 1rem 0;
    color: #d11a1a;
}
.span{
    font-size: 1rem;
}
.div3{
    height: 5rem;
    background: white;
    float: left;
    width: 100%;
    border-radius: 10px;
    line-height: 3rem;
    text-align: center;
    border: 1px solid #cccccc;
}
.h1{
    margin: 0;
    float: left
}
.img3{
    width: 100%;
}

/* 登陆之后的样式  */
@font-face {
  font-family: iconfont;
  src: url('../font_0m7ougx2yeh/iconfont.ttf');
}
.div4{
    height: 11rem;
    background: url(../assets/thVGHNPC9U.jpg) no-repeat left;
    background-size:cover; 
    font-family: iconfont;
    padding: 1rem;
}
.span4{
    font-size: 1.5rem;
}
.h2{
    margin: 2rem 0;
}
.div5{
    height: 8rem;
    background: white;
    padding: 1rem;
}
.div6{
    width: 45%;
    height: 48%;
    background: white;
    float: left;
    margin-left: 2%
}
.img4{
    width: 25%;
    margin-top: 8%;
    margin-right: 3%;
    float: left;
}
.span5{
    float: left;
    margin-top: 8%;
    /* margin-left: 4%; */
    font-weight: 600;
}
.span6{
    float: left;
    margin-left: 4%;
}
.img7{
    width: 100%;
}

.box{
    min-height: 10rem;
    background: #fff;

}
.box1{
    width: 100%;
    height: 4rem;
    margin-top: 2%;
    border: 1px solid #ccc;
    text-align: center;
    border-radius: 10px;
    width: 94%;
    margin-left: 3%;
}
.li{
    height: 0;
}
</style>
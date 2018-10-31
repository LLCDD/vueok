<template>
    <div>
        {{ this.$store.state.yue1 }}
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="(item,i) in list" :key="i">
                <div class="div">
                    <h2>名字：{{ item.name }} </h2> 
                        <h2>数量:{{ item.count }} </h2>
                        <h2> money:{{item.money}}</h2> 
                   购买事件 {{ item.timer }}
                   <span class="span" v-if="bool">现在的盈利金额为{{ msg1 }}</span>
                   <input type="button" value="点我查看 你的盈利" @click="cha(i)">
                   <input type="button" value="点我出售" @click="mai(i)">
                </div>
            </li>
        </ul>
    </div>
</template> 

<script>
import axios from 'axios'
export default {
    data(){
        return {
            msg:"交易记录",
            list:[],
            msg1:'',
            bool:false,
        }
    },
    mounted () {
        var _this = this;
        axios({
            url:"http://127.0.0.1:3000/jilu"
        }).then(function(data){
            console.log(data.data)
            _this.list = data.data;
            
        })
    },
    methods:{
        cha(i){
            this.bool = true;
           var data = new Date();
           var ms = data.getTime()
            // console.log(ms)
            var id = this.list[i]._id;
            var _this = this;
            axios({
                method:"post",
                url:"http://127.0.0.1:3000/yingli",
                params:{id:id}
            }).then(function(data){
                // console.log(data.data);
                var ms1 = data.data[0].time;
                var count = data.data[0].count
                console.log(ms1)
                var ms2 = ms - ms1;
                console.log(ms2)
                var hour = ms2/1000/60/60;
                hour = (hour).toFixed(2)
                //  存的本金  
                var money = data.data[0].money
                // 利率
                var lilu = data.data[0].lilu
                var lilu = lilu.substr(1);
                lilu = Number(lilu)/100
                // console.log(lilu)
                _this.msg1 = money*lilu*hour/100*count/10
                 _this.msg1 = (_this.msg1).toFixed(3)
            })
        },
        // 出售此股
        mai(i){
            var id = this.list[i]._id
            console.log(id)
            console.log(this.$store.state.yue1)
            var add = this.list[i].money
            console.log(add);
            var add1 = this.$store.state.yue1;
            console.log(add1)
            
            //  两个值相加  该变数据库 
            add = Number(add);
            add1 = Number(add1)
            var add2 = add +add1;
            // console.log(add2)
            var name = this.$store.state.msg
            // this.$store.commit('yue',add2)
            var arr = this.list[i]._id
            var money = this.list[i].money;
            console.log(arr,money)
            axios({
                method:"post",
                url:"http://127.0.0.1:3000/chushou",
                params:{name:name,money:add2}
            }).then(function(data){
                console.log(data.data)
            })

            axios({
                method:"post",
                url:"http://127.0.0.1:3000/shanchu",
                params:{id:id}
            }).then(function(data){
                console.log(data.data);
                if(data.data == "1"){
                    alert("删除成功");
                }
            })

        }


    }
}
</script>

<style scoped>
div{
    width: 100%;
}
h1{
    background: red;
    text-align: center;
}
.div{
    background: pink;
    margin-top: 0.3rem;
    position: relative;
}
.span{
    position: absolute;
    top: 1rem;
    /* width: 13rem; */
    right: 1rem
}
</style>

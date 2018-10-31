import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

// 声明 一个公用的属性
var state = {
    count:0,
    msg:"",  // 保存的用户名
    username:"今日",
    id1:"" , //  用来存详情的id
    yue1: 0 , // 账户余额
     gu:0
 }
// 数据的分发  是辅助state的  里面都是方法函数
var getters = {
    u1:function(state){
        return state.username
    },
   
}


// 声明 一个修改操作的方法
var mutations = {
    add(a,b){
        a.username = b
    },
    msg(a,b){
       a.msg = b
    },
    id(a,b){
        a.id1 = b   // 用来使用保存的id
    },
    yue(a,b){    // 修改账户的余额
        a.yue1 = b
    },
    gup(a,b){
        a.gu = b;
    }
}

// 是辅助 mutations的修改操作的
// 里面 也是一些方法
var actions = {
    add:function({commit},b){
        commit('add',b)
    }
} 

var modules = {
    a:{
        state:{
            username1:""
        },
        getters:{
            u3:function(state){
                return state.username1
            }
        },
        mutations:{
            aa:function(a,b){
                a.username1 = b
            }
        },
        actions:{
            aa:function({commit},b){
                commit('aa',b)
            }
        }
    }
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
})
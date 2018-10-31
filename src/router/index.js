import Vue from 'vue'
import Router from 'vue-router'
// 登陆
import login from '@/components/login'
// 注册
import regiset from '@/components/regiset'
// 主页
import index from '@/components/index'
// 引导页
import start from '@/components/start'
// 主页的我的组件
import wode from '@/components/wode'
// 主页今日的组件
import jinri from '@/components/jinri'
// 主页发现的组件
import faxian from '@/components/faxian'
// 主页 基金的组件
import jijin from '@/components/jijin'
// 股票的详情
import xq from '@/components/xq'
// 登陆后我的详情
import wdxq from '@/components/wdxq'
// 登陆后我的卡包
import kabao from '@/components/kabao'
// 登陆后的绑定银行卡的页面
import ka from '@/components/ka'
// 登陆后股派的购买
import gpxq from '@/components/gpxq'
//  余额  
import yue from "@/components/yue"
// 交易记录
import jilu from '@/components/jilu'


Vue.use(Router)

export default new Router({
  routes: [
    {
      // 注册页面
      path: '/regiset',
      name: 'Regiset',
      component: regiset
    },{
      // 登陆页面
    	path:"/login",
    	name:'Login',
    	component: login
    },{
      // 如果是根路径就去 login
      path:"/",
      redirect:"/index"
    },{
      // 所有错误的路径都去login 登陆页面
      path:"*",
      redirect:"/index"
    },
    {
      // shouye的  路由
      path:"/index",
      name:"Index",
      component:index,
      children:[
        // 开始index的子路由
        {
          path:'/',
          redirect:'/jinri'
        },
        {  // 今日
           path: '/jinri',
          component:jinri },
          {  // 发现
            path:'/faxian',
            component:faxian
          },
          {
            // 基金的组件
            path:'/jijin',
            component:jijin
          },
          {
            // wode组件
            path:'/wode',
            component:wode,
          }

      ]
    },{
      // 开始的引导界面
      path:"/start",
      name:"Start",
      component:start
    },
    {
      // 详情
      path:"/xq",
      component:xq
    },
    {
      // 登陆后我的详情
      path:"/wdxq",
      component:wdxq
    },
    {
      // 登陆后我的卡包
      path:"/kabao",
      component:kabao
    },
    {
      // 银行卡的绑定页面
      path:"/ka",
      component:ka
    },
    {
      // 股票详情
      path:"/gpxq",
      component:gpxq
    },{
      // 账号余额
      path:"/yue",
      component:yue
    },
    {
      path:"/jilu",
      component:jilu
    }
  ]
})

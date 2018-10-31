// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
// 动画的css
import './stylesheet/animate.css'
// UI 框架
import MintUI from 'mint-ui'
import './font_0m7ougx2yeh/iconfont.css'
import 'mint-ui/lib/style.css'

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
// 字体的css


Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

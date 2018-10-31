<template>
	<div class="login">
		<h1>登陆</h1>
		
		<!-- 调用公共的数据 -->
		<!-- <p>{{ this.$store.state.count }}</p> -->
		<!-- 调用的公共数据{{ msg }} -->
		<!-- {{ msg1 }} -->
		<!-- <button @click="top()">事件</button> -->

		<!-- 开始登陆页面的操作 -->

		<mt-field label="账号" placeholder="请输入账号" v-model="username"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<input type="checkbox" @click='db()'> 我已阅读 <br>
		<mt-button type="primary" style="width:45%;margin-left:3%" @click="check()">登陆</mt-button>
		<mt-button type="default" style="width:45%;margin-left:3%" @click="a()">注册</mt-button>
		<!-- <p>{{ this.$store.state.username }}</p>
		<button @click="add()"> 测试</button> -->
		<!-- <router-link to="/regiset" tag="p">去注册</router-link> -->

	</div>
</template>

<script>
	import axios from 'axios'
	//  如果要用完整版的  store 的话要导入两个对象
	import {mapGetters,mapActions} from 'vuex'
	// 在完整版的里面要在 computed 计算属性中调用

	export default {
		name:"Login",
		data(){
			return {
				mag:"",
				username:"",  // 用户名
				password:"",  // 密码
				bool:false,  //
			}
		},
		computed:{
			...mapGetters(['u1','u2','u3'])
		},


		methods: {
			//  同步公共的数据和现在的数据
			top(){
					this.$store.commit('add');
					 this.msg1 =this.$store.state.count ;
			},
			// 判断 复选框是否是勾选的
			db(){
				this.bool=!this.bool;
				console.log(this.bool)
			},
			// 登陆信息
			check(){
				if(this.bool){
					if(this.username.length > 0 && this.password.length >0){
						var _this = this;
						axios({
							method:"post",
							url:"http://127.0.0.1:3000/login",
							params:{username:_this.username,
							password:_this.password}
						}).then(function(data){
							console.log(data.data);
							// 对 axios 的数据进行处理
							if(data.data == "ok"){
								_this.$router.push('/index');
								
								_this.$store.commit('msg',_this.username)
							}else{
								alert("账号或密码错误")
							}
						})
					}else{
						alert("账号密码不能为空")
					}
						// this.$router.push("/index")
					}else{
						alert("请勾选阅读")
					}

					
					
				
			},
			// 去注册见面
			a(){
				this.$router.push('/regiset')
			},



			// 测试完整版的 store 
			// ...mapActions(['add'])  <=  数组里是方法名
			add(){
				this.$store.commit('add',this.bool)
			}

		}
	}
	
	// this.$store.commit('add)   <= 调用公共数据的方法
</script>

<style scoped>
	div{
		width: 100%
	}
	h1{
		background: red;
		right: 0;
		width: 100%;
		text-align: center
	}
	input{
		margin-left: 1rem
	}

</style>
<!--  开始的界面  -->

<template>
    <div>
        
        <mt-swipe :auto="0" :continuous="false">
        <mt-swipe-item >
            <transition
            enter-active-class="animated fadeOutRight"
            leave-active-class="animated fadeOutRight"
            >
                <img src="../assets/logo.png">
                世界奥迪部分
            </transition>
           
        </mt-swipe-item>
        <mt-swipe-item>two  第二张</mt-swipe-item>
        <mt-swipe-item>three 第三张</mt-swipe-item>
        <mt-swipe-item>
            <div @click="jin()">
                点我进入
            </div>
        </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name:"Start",
        data(){
            return {
                
            }
        },
        methods:{
            // 引导页进主页
            jin(){
                this.$router.push('/index')
            }
        }
    }
</script>

<style scoped="">
div{
    width: 100%;
    height: 100%;
    background: red
}
</style>

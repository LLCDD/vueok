<template>
    <div>
        <mt-swipe :auto="3000" style="height:10rem;width:94%;margin-left:3%;border-radius:10px;margin-top:0.3rem">
            <mt-swipe-item style="background:red"> 
               <img class="img1" src="../assets/大鱼海棠桌面壁纸 - 1.jpg" >
            </mt-swipe-item>
            <mt-swipe-item style="background:pink">
                <img class="img1" src="../assets/thVGHNPC9U.jpg">
            </mt-swipe-item>
            <mt-swipe-item style="background:yellow">
                <img class="img1" src="../assets/140619114S5-2.jpg">
            </mt-swipe-item>
        </mt-swipe>
        <div class="div">
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
            <h1>今天</h1>
            <li>10.25收评：录制尾盘的二恶热儿大苏23432 打的是送达后</li>
            <li>10.25收评：录制尾盘的二恶热儿大苏打的是送达后</li>
            <li>10.25收评：录制尾盘的使劲儿大苏打的是</li>
        </div>
        <hr>
    </div>    
</template>

<script>
// index  我的组件
    export default {
        name:"faxian",
        data(){
            return {
                msg:"发现组件"
            }
        }
    }
</script>

<style scoped>
.img1{
    height: 100%;
    width: 100%;
}
.img2{
    height: 5rem;
    margin: 0.5rem 0.4rem
}
hr{
    height: 1rem;
    background: #f0eff4;
    border: 0;
    width: 100%;
}
.div2{
    margin: 0 1rem;
}
h1{
    font-size: 1.5rem;
    height: 3rem;
    line-height: 3rem;
    font-weight: 400;
}
li{
    height: 3rem;
    line-height: 3rem;
    overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
</style>
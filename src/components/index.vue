<template>
    <div>
        <header>{{ this.$store.state.username }}</header>
       <div class="div">
           <transition
            enter-active-class="animated fadeIn"
			leave-active-class="animated fadeOut"
           >
               <router-view style="position:absolute;margin-bottom:2.5rem"></router-view>
           </transition>
           
        </div> 
        <footer>
            <span @click="gai()">{{ msg }}</span>
            <span @click="gai1()">{{ msg1 }}</span>
            <span @click="gai2()">{{ msg2 }}</span>
            <span @click="gai3()">{{ msg3 }}</span>
        </footer>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name:'Index',
        data(){
            return {
                msg:"今日",
                msg1:"发现",
                msg2:"基金",
                msg3:"我的"
            }
        },
        methods:{
            // 修改头部信息
            gai(){
                this.$store.commit('add',this.msg);
                this.$router.push('/jinri')
            }
            ,gai1(){
                this.$store.commit('add',this.msg1);
                this.$router.push('/faxian')
            }
             ,gai2(){
                this.$store.commit('add',this.msg2);
                this.$router.push('/jijin')
            }
             ,gai3(){
                this.$store.commit('add',this.msg3);
                this.$router.push('/wode') 
            }
        }
        

    }
</script>

<style scoped>
div{
    width: 100%;
}
.div{
    margin-top: 2.5rem;
    /* padding-bottom: 2.5rem */
    margin-bottom: 2.5rem;
}
header{
    background: white;
    text-align: center;
    width: 100%;
    height: 2.5rem;
    position: fixed;
    line-height: 2.5rem
    ;
    border-bottom: 1px solid #cccccc;
}
footer{
    background: red;
    width: 100%;
    position: fixed;
    height: 2.5rem;
    bottom: 0;
    text-align: center;
    line-height: 2.5rem;

}
h1{
    width: 100%;
    font-size: 1rem;
    text-align: center;
    background: red
}
footer>span{
    display: inline-block;
    width: 24%;
}
header{
    z-index: 9;
}

</style>

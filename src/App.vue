<template>
  <div id="app">
    <transition 
      enter-active-class="animated fadeIn"
			leave-active-class="animated fadeOut"
    >
      <router-view style="position: absolute"></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}




</style>

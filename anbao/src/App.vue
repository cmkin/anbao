<template>
  <div id="app">
	  
    <router-view></router-view>
	
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
 @import url("./assets/css/reset.css");
 #app{
	 max-width: 1024px;
	 margin: auto;
 }
</style>

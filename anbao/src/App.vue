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
 @media (max-width:414px) {
 	html{
 		font-size: 20px;
 	}
 }
 @media (max-width:375px) {
 	html{
 		font-size: 18px;
 	}
 }
 @media (max-width:320px) {
 	html{
		font-size: 15px;
	}
 }
</style>

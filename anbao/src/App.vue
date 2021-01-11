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

<style lang="less">
	
  .clicked{
    position: relative;
	animation: sc linear 0.3s 1;
	transition: all 0.3s;
    &::after{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: inherit;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      opacity: 0.2;
      content: ' ';
    }
  }
  .clicked-img{
	display: inline-block;
    opacity: 0.7;
	transform: scale(1.05);
	transition: all 0.3s;
  }
  
  @keyframes sc{
  	 0%{
  		transform: scale(1); 
  	 }
  	 50%{
  		 transform: scale(1.1);
  	 }
  	 100%{
  	 		 transform: scale(1);
  	 }
  }




  .sc-enter-active{
    transition: all .3s;
  } 
  .sc-leave-active {
    transition: all .3s;
   
  }
  .sc-enter{
    transform:scale(.7);
    opacity: 0
  }
  .sc-leave-to {
    transform: scale(.9);
    opacity: 0
  }

  




</style>
<style>
 @import url("./assets/css/reset.css");
 #app{
	 max-width: 1024px;
	 margin: auto;
 }
</style>

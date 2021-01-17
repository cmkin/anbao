<template>
  <div>
    <div id="scroll-container" 
      @touchstart.stop="handlerTouchStart"
      @touchmove.stop="handlerTouchMove"
      @touchend.stop="handlerTouchEnd"
      ref="scrollContainer"
      :class="{'transition': isTransition}"
    >
      <slot></slot>
    </div>
  </div>
</template>
  
<script>
export default {
  name:"scrolltop",
  data () {
    return {
      isTransition: false, // 是否启动transition
      startLocation: '', // 记录鼠标点击的位置
      moveDistance: 0,  // 记录移动的位置
      distance: '' // 记录移动的距离
    }
  },
  methods: {
    // 获取手指触屏时的屏幕Y轴位置
    handlerTouchStart (e) {
      this.startLocation = e.touches[0].pageY
      this.isTransition = false
    },
    // 获取手指移动的距离
    handlerTouchMove (e) {
      this.moveDistance = Math.floor(e.touches[0].pageY - this.startLocation)
      this.$refs.scrollContainer.style.transform = `translateY(${this.moveDistance}px)`
    },
    // 获取手指松开的Y轴位置
    handlerTouchEnd (e) {
      // 清除已移动的距离
      this.moveDistance = 0
      // 恢复原位
      this.$refs.scrollContainer.style.transform = 'translateY(0px)'
      this.isTransition = true // 开启transition
    }
  }
}
</script>
<style scoped>
  #scroll-container {
    
  }
  .transition {
    transition: all .5s; 
  }
</style>
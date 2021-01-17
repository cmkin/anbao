import Vue from 'vue'

import upLoadDownRefresh from '_c/upLoadDownRefresh'
import dialogx from '_c/dialogx'
import radio from '_c/radio'
import keyborder from '_c/keyborder'
import fdb from '_c/alert/fdb'

const components = [upLoadDownRefresh,dialogx,radio,fdb,keyborder]
components.forEach(item=>{
    Vue.component(item.name,item)
})


import $ from 'jquery'
window.$=$
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import Clipboard from 'clipboard';  

Vue.prototype.$copy=Clipboard


import '_a/less/class.less';



//Canvas清除扩展
CanvasRenderingContext2D.prototype.clear = function() {
    this.save();
    this.globalCompositeOperation = 'destination-out';
    this.fillStyle = 'black';
	this.strokeStyle="black";
    this.fill();
	this.stroke();
    this.restore();
};

CanvasRenderingContext2D.prototype.clearArc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
    this.beginPath();
    this.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    this.clear();
};

CanvasRenderingContext2D.prototype.clearShape = function(paths,w,x, y, radius, startAngle, endAngle, anticlockwise) {
    this.beginPath();
    // 定义各种不规则图形，如三角形、五角星...
	
	paths.forEach((tt,ti)=>{
		this.lineTo(tt[0]/290*w,tt[1]/290*w);
	}) 
    this.clear();
};


function addClass(obj, cls){
    var obj_class = obj.className,//获取 class 内容.
    blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
    
    var added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
    obj.className = added;//替换原来的 class.
  }
    
  function removeClass(obj, cls){
    var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
    var obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
    removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
    removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
    obj.className = removed;//替换原来的 class.
  }
    
  function hasClass(obj, cls){
    var obj_class = obj.className,//获取 class 内容.
    obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
    var x = 0;
    for(x in obj_class_lst) {
      if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
        return true;
      }
    }
    return false;
  }

// 注册一个全局自定义指令 `v-focus`
Vue.directive('clicked', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 聚焦元素
      
      el.addEventListener("click",()=>{
          let className = 'clicked'
          if(el.nodeName=="IMG"){
            className = 'clicked-img'
          }
          if(!hasClass(el,className)){
             addClass(el,className)
          }
          
          setTimeout(() => {
            removeClass(el,className)
          }, 200);
      })
    }
})

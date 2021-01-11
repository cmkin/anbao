<template>
    <div class="g_diglog" >
        <div class="d_wrap" v-if="value"></div>
            <transition name="sc" mode="out-in">

                 <div class="main" v-if="value">
                    <div class="tops">
                        <div>
                            <img src="../assets/img/index/13.png" alt="">
                            <img src="../assets/img/index/5.png" alt="">
                        </div>
                        <div>
                            <img src="../assets/img/index/1.png" alt="">
                        </div>
                        <img @click="$emit('input',false)" v-clicked src="../assets/img/index/6.png" alt="">
                    </div>
                    
                    <div class="content">

                        <slot name="content"></slot>

                    </div>

                </div>

            </transition>
        
    </div>
</template>
<script>
export default {
    name:"diglogx",
    data() {
        return {
            
        }
    },
    props:{
        value:{
            default:false,
            type:Boolean
        }
    }
}
</script>
<style lang="less">
    .g_diglog{
       
        .d_wrap{
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
        }
            .main{
                position: absolute;
                top: 20%;
                left: 5%;
                width: 90%;
                background: url(../assets/img/index/4.png) 0 0 no-repeat;
                background-size: 100% auto;
               
                .tops{
                    position: relative;
                    text-align: center;
                    img{
                        display: inline-block;
                        height: 25px;
                    }
                    div:first-child{
                        transform:translateY(-20%);
                        img:last-child{
                            height: 20px;
                            margin-left: 5px;
                        }
                    }
                    div:last-child{
                         transform:translateY(-20%);
                    }
                    &>img{
                        position: absolute;
                        right: 10px;
                        top: 15px;
                    }
                }
            }
        
       
    }
</style>
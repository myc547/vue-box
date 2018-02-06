<template>
  <div>
    <router-view></router-view>
    <Back-top></Back-top>
    <transition name="fade">
      <div class="loading" v-show="loading">
        <Icon type="load-c" size="18" class="icon-loading"></Icon>
      </div>
    </transition>
  </div>
</template>

<script>
import bus from './components/bus';
export default {
  computed: {
    loading () {
      return bus.loading;
    }
  }
};
</script>

<style scoped="scoped">
  @import "./assets/style/common.css";
  .icon-loading{
    position: fixed;
    top: 10px;
    right: 10px;
    color: #0099e5;
    animation: ani-app-loading 1s linear infinite;
  }
  @keyframes ani-app-loading {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
</style>

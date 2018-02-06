<template>
  <Menu mode="horizontal" active-name="1">
    <div class="wrapper-header-nav">
      <router-link to="/" class="wrapper-header-nav-logo">
        <img src="../assets/images/logo.png">
      </router-link>
      <div class="wrapper-header-nav-search">
        <Input v-model="value" placeholder="请输入"></Input>
      </div>
      <div class="wrapper-header-nav-list">
        <MenuItem name="1">
          <Icon type="ios-navigate"></Icon>
          Item 1
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-keypad"></Icon>
          Item 2
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-analytics"></Icon>
          Item 3
        </MenuItem>
        <MenuItem name="4">
          <Icon type="ios-paper"></Icon>
          Item 4
        </MenuItem>
        <Submenu name="5">
          <template slot="title"> <Icon type="ios-infinite"></Icon>系统</template>
          <MenuItem name="6">
            个人中心
          </MenuItem>
          <MenuItem name="7">
            退出
          </MenuItem>
        </Submenu>
      </div>
    </div>
  </Menu>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    };
  }
};
</script>
<style>
  .wrapper-header-nav .ivu-menu-item i{
    margin-right: 6px;
  }
  .wrapper-header .ivu-menu{
    z-index: 901;
    box-shadow: 0 1px 1px rgba(0,0,0,.08);
  }
</style>

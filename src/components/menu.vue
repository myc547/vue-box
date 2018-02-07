<template>
  <Menu mode="horizontal" :active-name="$route.name" @on-select="changeMenu">
    <div class="wrapper-header-nav">
      <router-link to="/" class="wrapper-header-nav-logo">
        <img src="../assets/images/logo.png">
      </router-link>
      <div class="wrapper-header-nav-search">
        <Input v-model="search" placeholder="请输入"></Input>
      </div>
      <div class="wrapper-header-nav-list">
        <template v-for="item in menuList">
          <MenuItem v-if="item.length >= 1" :name="item.name" :key="'menuitem' + item.name">
            <Icon :type="item.icon " :size="iconSize" :key="'menuicon' + item.name"></Icon>
            {{ itemTitle(item) }}
          </MenuItem>
        </template>
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
  props: {
    menuList: {
      type: Array,
      required: true
    },
    iconSize: Number
  },
  data () {
    return {
      search: ''
    };
  },
  methods: {
    changeMenu (active) {
      this.$emit('on-change', active);
    },
    itemTitle (item) {
      if (typeof item.title === 'object') {
        return this.$t(item.title.i18n);
      } else {
        return item.title;
      }
    }
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

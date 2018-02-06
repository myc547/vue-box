<template>
  <div>
    <div class="wrapper">
      <div class="wrapper-header">
        <nav-menu></nav-menu>
      </div>
      <div class="wrapper-container">
        <Row>
          <Col span="4" class="wrapper-navigate" >
            <navigate></navigate>
          </Col>
          <Col span="20">
            <div class="wrapper-content ivu-article">
              <div class="breadcrumb">
                <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
              </div>
              <div class="wrapper-content-info">dd</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
import navMenu from './menu.vue';
import navigate from './navigate.vue';
import breadcrumbNav from './breadcrumb-nav.vue';
export default {
  components: {
    navMenu,
    navigate,
    breadcrumbNav
  },
  data () {
    return {
      currentPath: [{
        title: '首页',
        path: '/',
        name: 'home'
      },
      {
        title: '文章管理',
        path: '',
        name: 'manage'
      }]
    };
  }
};
</script>

<style lang="less">
  @import "../assets/style/less/article.less";
</style>

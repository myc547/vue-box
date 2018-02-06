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
            <div class="wrapper-content ivu-article"></div>
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
  }
};
</script>

<style lang="less">
  @import "../assets/style/less/article.less";
</style>

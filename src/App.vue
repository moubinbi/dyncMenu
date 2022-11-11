<template>
  <div class="home">
    <!--  引用头部 -->
    <Header />
    <el-container class="content">
      <!--  引用菜单 -->
      <Menu />
      <el-container>
        <el-main>
          <!-- 父组件一定要添加 router-view 路由跳转信息才能看见-->
          <router-view/>
        </el-main>
        <el-footer>
          <!--  引用底部 -->
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from '@/comm/head.vue';
import Footer from '@/comm/footer.vue';
import Menu from '@/comm/menu.vue';
export default {
  components: {
    Header,
    Footer,
    Menu
  }
}
</script>

<style>
.home {
  width: 100%;
  height: 100%;
}

.content {
  position: absolute;
  width: 100%;
  top: 60px;
  bottom: 0;
}
</style>

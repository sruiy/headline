<template>
  <el-container>
    <el-aside style="width:200px">
      <home-aside></home-aside>
    </el-aside>
    <!--头部-->
    <el-container>
      <el-header style="height:50px">
        <home-header></home-header>
      </el-header>

      <el-main>主页</el-main>
    </el-container>
  </el-container>
</template>

<script>
import homeAside from '../../components/home/aside'
import homeHeadr from '../../components/home/header'
export default {

  components: {
    'home-aside': homeAside,
    'home-header': homeHeadr
  }
}
</script>

<style lang="less" scoped>
</style>

<template>
  <el-container>
    <el-aside style="width:200px; background-color:#323745">
      <home-aside></home-aside>
    </el-aside>
    <!--头部-->
    <el-container>
      <el-header style="height:50px">
        <home-header></home-header>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.el-header {
  padding-right: 0;
}
</style>

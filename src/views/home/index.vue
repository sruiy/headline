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
export default {

}
</script>

<style lang="less" scoped>
.el-header {
  padding-right: 0;
}
</style>

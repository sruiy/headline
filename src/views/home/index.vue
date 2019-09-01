<template>
  <el-container>
    <el-aside>
      <home-aside></home-aside>
    </el-aside>
  <el-container>
    <el-header>顶部</el-header>
    <el-main>主页</el-main>
  </el-container>

  </el-container>
</template>

<script>
import homeAside from '../../components/home/aside'
export default {

  components: {
    'home-aside': homeAside
  }
}
</script>

<style>

</style>

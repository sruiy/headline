<template>
  <el-container>
    <el-aside :style="{width:status?'60px':'200px'}" style="width:200px; background-color:#323745; transition:0.3s">
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
import eventBus from '../../eventBus/events'
export default {
  data () {
    return {
      status: false
    }
  },
  created () {
    eventBus.$on('closeOrOpen', status => {
      this.status = status
    })
  }
}
</script>

<style lang="less" scoped>
.el-header {
  padding-right: 0;
}
</style>

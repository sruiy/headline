<template>
  <div id="aside">
    <!--侧边栏logo-->
    <div class="aside-logo">
      <img :src="!collapse ? BigImg :smallImg" :style="{width:!collapse?'100px':'30px'}" alt />
    </div>
    <el-menu
      class="el-menu-vertical-demo aside"
      background-color="#323745"
      text-color="#adafb5"
      active-text-color="#ffd04b"
      router
      :collapse="collapse"

    >
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item index="/home/publish">发布文章</el-menu-item>
        <el-menu-item index="/home/articles">内容列表</el-menu-item>
        <el-menu-item index="/home/comment">评论列表</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item index="/home/fansdata">图文数据</el-menu-item>
        <el-menu-item index="/home/fansinfo">粉丝概况</el-menu-item>
        <el-menu-item index="/home/fansimg">粉丝画像</el-menu-item>
        <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
      </el-submenu>

      <el-menu-item index="/home/account">
        <i class="el-icon-s-tools"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import eventBus from '../../eventBus/events'
export default {
  data () {
    return {
      collapse: false,
      BigImg: require('../../assets/img/logo_admin.png'),
      smallImg: require('../../assets/img/toutiao.png')
    }
  },
  created () {
    eventBus.$on('closeOrOpen', status => {
      this.collapse = status
    })
  }
}
</script>

<style lang="less" scoped>
#aside {
  .aside-logo {
     background-color: #2e2f32;
    text-align: center;
    padding: 15px 0;

    img {
      width: 100px;
    }
  }
  .aside {
    border-right: 0;
    height: 100vh;
  }
}
</style>

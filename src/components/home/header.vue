<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="8">
      <div class="grid-content bg-purple header-left">
        <span :class="!collapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="closeOrOpen"></span>
        江苏传智播客教育科技股份有限公司
      </div>
    </el-col>
    <el-col :span="4" class="header-right">
      <div class="grid-content bg-purple">
        <img :src="userData.photo ? userData.photo : defaultImg" alt />
        <el-dropdown trigger="click" @command="handleCommandUser">
          <span class="el-dropdown-link">
            {{userData.name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="account">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import eventBus from '../../eventBus/events'
export default {
  data () {
    return {
      collapse: false,
      userData: {
        name: '',
        photo: ''
      },
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    closeOrOpen () {
      this.collapse = !this.collapse
      eventBus.$emit('closeOrOpen', this.collapse)
    },
    getUser () {
      // let token = window.localStorage.getItem('token')
      //   console.log(token)
      this.$axios({
        url: '/user/profile'
      })
        .then(res => {
          this.userData = res.data
        })
    },
    handleCommandUser (command) {
      if (command === 'account') {
        this.$router.push('/home/account')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/sruiy'
      } else {
        window.localStorage.clear('token')
        this.$router.push('/login')
      }
    }

  },
  created () {
    this.getUser()
    eventBus.$on('updataUserInfo', () => {
      this.getUser()
    })
  }
}
</script>

<style lang="less" scoped>
.header-left {
  margin-top: 15px;
  span {
    font-size: 20px;
    vertical-align: bottom;
    margin-right: 3px;
  }
}
.header-right {
  margin-top: 5px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
  }
}
</style>

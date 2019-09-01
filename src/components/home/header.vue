<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="8">
      <div class="grid-content bg-purple header-left">
        <span class="el-icon-s-fold"></span>
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
export default {
  data () {
    return {
      userData: {
        name: '',
        photo: ''
      },
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    getUser () {
      let token = window.localStorage.getItem('token')
      //   console.log(token)
      this.$axios({
        url: '/user/profile',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          this.userData = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleCommandUser (command) {
      if (command === 'account') {
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

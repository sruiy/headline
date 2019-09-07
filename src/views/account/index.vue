<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">账户信息</template>
    </bread-crumb>
    <div class="userImg">
      <el-upload
        class="upload-demo"
        action=""
        :http-request="uploadImg"
        :show-file-list="false"
        v-loading="loading"
      >
        <img :src="formData.photo ? formData.photo : defaultImg" alt />
      </el-upload>
    </div>
    <el-form
      style="width: 400px"
      label-width="80px"
      :model="formData"
      :rules="userRules"
      ref="userInfo"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="intro">
        <el-input v-model="formData.intro"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input disabled v-model="formData.mobile"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" style="margin-left:80px" @click="editUserInfo">保存</el-button>
  </el-card>
</template>

<script>
import eventBus from '../../eventBus/events'
export default {
  data () {
    return {
      loading: false,
      defaultImg: require('../../assets/img/pic_bg.png'),
      formData: {
        name: '',
        intro: '',
        email: '',
        mobile: '',
        photo: ''
      },
      userRules: {
        name: [
          {
            required: true,
            message: '用户名不能为空'
          },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符' }
        ],
        email: [
          {
            required: true,
            message: '邮箱不能为空'
          },
          {
            pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
            message: '请输入正确的邮箱'
          }
        ]
      }
    }
  },
  methods: {
    async uploadImg (params) {
      this.loading = true
      let data = new FormData()
      data.append('photo', params.file)
      await this.$axios({
        url: '/user/photo',
        method: 'patch',
        data
      })
      this.loading = false
      this.getUserInfo()
    },
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(res => {
        this.formData = res.data
      })
    },
    editUserInfo () {
      this.$refs.userInfo.validate(isOk => {
        if (isOk) {
          this.$axios({
            url: '/user/profile',
            method: 'patch',
            data: this.formData
          }).then(res => {
            this.$message({ type: 'success', message: '修改成功' })
            eventBus.$emit('updataUserInfo')
          })
        }
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.userImg {
  position: absolute;
  margin-left: 500px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #ccc;
  }
}
</style>

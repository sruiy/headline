<template>
  <div class="login">
    <el-card class="login-card">
      <div class="login-title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form style="padding: 20px 20px 0" :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width: 200px" v-model="loginForm.code"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox class="rules" v-model="loginForm.checked">
            我已阅读并同意
            <span>用户协议</span>和
            <span>隐私条款</span>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    let validator = (rule, value, callback) => {
      if (value) {
        callback()
      } else {
        callback(new Error('必须同意规约才能登陆'))
      }
    }
    return {
      loginForm: {
        mobile: '',
        code: '',
        checked: false
      },
      loginRules: {
        mobile: [
          { required: true, message: '请填入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请填入正确的手机号' }
        ],
        code: [
          { required: true, message: '请填入验证码' },
          { pattern: /^\d{6}$/, message: '请填入6位验证码' }
        ],
        checked: [{ validator }]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 410px;
    height: 350px;
    .login-title {
      text-align: center;
      img {
        width: 160px;
        padding-top: 10px;
      }
    }
    .rules {
      span {
        color: skyblue;
      }
    }
  }
}
</style>

<template>
  <div class="login">
    <el-card class="login-card">
      <div class="login-title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form style="padding: 20px 20px 0">
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 200px"></el-input><el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox class="rules" v-model="checked">我已阅读并同意<span>用户协议</span>和<span>隐私条款</span></el-checkbox>
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
    return {
      checked: false
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

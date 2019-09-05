<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">发表文章</template>
    </bread-crumb>
    <el-form class="articleForm" :model="formData" :rules="articleRules" label-width="100px" ref="articleRules">
      <el-form-item label="标题" prop="title">
        <el-input style="width:400px" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input v-model="formData.content" style="width:600px" type="textarea" :rows="10"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group v-model="formData.cover.type">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道" prop="channel_id">
        <el-select v-model="formData.channel_id" placeholder="请选择">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-row style="margin-left: 100px">
      <el-button type="primary" @click="submitArticle()">发表</el-button>
      <el-button>存入草稿</el-button>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      textarea: '',
      channels: [],
      formData: {
        title: '',
        content: '',
        channel_id: null,
        cover: {
          type: 1,
          images: []
        }
      },
      articleRules: {
        title: [{
          required: true,
          message: '标题不能为空'
        }],
        content: [{
          required: true,
          message: '内容不能为空'
        }],
        channel_id: [{
          required: true,
          message: '频道不能为空'
        }]
      }
    }
  },
  methods: {
    submitArticle () {
      this.$refs.articleRules.validate(isOk => {
        if (isOk) {
          this.$axios({
            url: '/articles',
            method: 'post',
            params: { draft: false },
            data: this.formData
          }).then(res => {
            // console.log(res)
            this.$router.push('/home/articles')
          })
        }
      })
    },
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        this.channels = res.data.channels
      })
    }
  },
  created () {
    this.getChannels()
  }
}
</script>

<style lang="less" scoped>

</style>

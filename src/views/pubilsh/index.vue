<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">发表文章</template>
    </bread-crumb>
    <el-form
      class="articleForm"
      :model="formData"
      :rules="articleRules"
      label-width="100px"
      ref="articleRules"
    >
      <el-form-item label="标题" prop="title">
        <el-input style="width:400px" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content" class="quill-editor-example">
        <quill-editor v-model="formData.content" style="width:800px ; height: 300px"></quill-editor>
      </el-form-item>
      <el-form-item label="封面" style="margin-top:120px">
        <el-radio-group v-model="formData.cover.type" @change="selectImg">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-model="formData.cover.images">
        <cover-img :coverImg="formData.cover.images" @coverImg="coverImg"></cover-img>
      </el-form-item>
      <el-form-item label="频道" prop="channel_id">
        <el-select v-model="formData.channel_id" placeholder="请选择">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-row style="margin-left: 100px">
      <el-button type="primary" @click="submitArticle(false)">发表</el-button>
      <el-button @click="submitArticle(true)">存入草稿</el-button>
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
          type: 0,
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
    coverImg (url, index) {
      this.formData.cover.images = this.formData.cover.images.length > 0 ? this.formData.cover.images.map((item, i) => {
        return i === index ? url : item
      }) : []
    },
    selectImg () {
      if (this.formData.cover.type === 1) {
        this.formData.cover.images = ['']
      } else if (this.formData.cover.type === 3) {
        this.formData.cover.images = ['', '', '']
      } else {
        this.formData.cover.images = []
      }
    },
    // 获取修改文章
    getAArticle (articleId) {
      // console.log(this.$route.params.articleId)
      this.$axios({
        url: `/articles/${articleId}`
      }).then(res => {
        console.log(res)
        this.formData = res.data
      })
    },
    // 发表或修改文章
    submitArticle (draft) {
      let { articleId } = this.$route.params
      this.$refs.articleRules.validate(isOk => {
        if (isOk) {
          this.$axios({
            url: articleId ? `/articles/${articleId}` : '/articles',
            method: articleId ? 'put' : 'post',
            params: { draft },
            data: this.formData
          }).then(res => {
            // console.log(res)
            this.$router.push('/home/articles')
          })
        }
      })
    },
    // 获取频道
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
    // 页面一加载就获取文章id
    let { articleId } = this.$route.params
    if (articleId) {
      this.getAArticle(articleId)
    }
  }
}
</script>

<style lang="less" scoped>
</style>

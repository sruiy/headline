<template>
  <el-card style="padding: 10px 30px">
    <bread-crumb slot="header">
      <template slot="title">发表文章</template>
    </bread-crumb>
    <el-form class="articleForm" :model="formData">
      <el-form-item label="标题">
        <el-input style="width:400px" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="textarea" style="width:600px" type="textarea" :rows="10"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group v-model="formData.cover.type">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道">
        <el-select v-model="formData.channel_id" placeholder="请选择">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-row style="margin-left: 40px">
      <el-button type="primary">发表</el-button>
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
      }
    }
  },
  methods: {
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

<style>
</style>

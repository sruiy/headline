<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>
    <el-form ref="form" :model="formData" label-width="80px">
      {{formData}}
      <el-form-item label="文章状态">
        <el-radio v-model="formData.radio" label="5">全部</el-radio>
        <el-radio v-model="formData.radio" label="5">草稿</el-radio>
        <el-radio v-model="formData.radio" label="5">待审核</el-radio>
        <el-radio v-model="formData.radio" label="5">审核通过</el-radio>
        <el-radio v-model="formData.radio" label="5">审核失败</el-radio>
      </el-form-item>
      <el-form-item label="频道列表">
        <el-select v-model="formData.value" placeholder="请选择"></el-select>
      </el-form-item>
      <el-form-item label="时间选择">
        <el-date-picker
          v-model="formData.datePicker"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <div class="title">共找到54225条符合条件的内容</div>
    <div v-for="item in list" :key="item.id.toString()" class="allArticles">
      <div class="left">
        <img :src="item.cover.images[0]?item.cover.images[0]:imgSrc" alt />
        <div class="img-right">
          <span>{{item.title}}</span>
          <el-tag size="small" :type="item.status | tagColor" style="width:60px;text-align:center;font-size:12px">{{ item.status | articleStatus}}</el-tag>
          <span class="date">{{item.pubdate}}</span>
        </div>
      </div>
      <div class="right">
        <span>
          <i class="el-icon-edit"></i>修改
        </span>
        <span>
          <i class="el-icon-delete"></i>删除
        </span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      imgSrc: require('../../assets/img/404.png'),
      list: [],
      formData: {
        radio: '5',
        datePicker: [],
        value: null
      }
    }
  },
  methods: {
    getArticles (params) {
      this.$axios({
        url: '/articles',
        params
      }).then(res => {
        console.log(res)
        this.list = res.data.results
      })
    }
  },
  created () {
    this.getArticles()
  },
  filters: {
    articleStatus (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
      }
    },
    tagColor (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return 'success'
        case 3:
          return 'danger'
      }
    }

  }
}

/* params = {
        channel_id: this.formData.value,
        status: this.formData.radio === 5 ? '' : this.formData.radio,
        begin_pubdate:
          this.formData.datePicker.length > 0
            ? this.formData.datePicker[0]
            : '',
        end_pubdate:
          this.formData.datePicker.length > 1
            ? this.formData.datePicker[1]
            : ''
      } */
</script>

<style lang="less" scoped>
.title {
  font-size: 14px;
  padding: 20px 0;
  border-bottom: 1px dashed #ccc;
}
.allArticles {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #f2f3f5;
  .left {
    display: flex;

    img {
      width: 150px;
      height: 100px;
      border-radius: 4px;
    }
    .img-right {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      justify-content: space-around;
      span {
        font-size: 14px;
      }
      .date {
        font-size: 12px;
        color: #999;
      }
    }
  }
  .right {
    font-size: 12px;
    color: #2c3e50;
    span {
      margin-left: 16px;
      cursor: pointer;
    }
  }
}
</style>

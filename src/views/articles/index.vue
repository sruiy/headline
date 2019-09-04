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
    <div v-for="(item,index) in list" :key="index" class="allArticles">
      <div class="left">
        <img src="../../assets/img/404.png" alt />
        <div class="img-right">
          <span>黑马头条pc第五天</span>
          <el-tag size="small" style="width:60px;text-align:center;font-size:12px">已发表</el-tag>
          <span class="date">2019-09-04 17:33:38</span>
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
      list: [1, 2, 3, 4, 5, 6, 7],
      formData: {
        radio: '5',
        datePicker: ''
      }
    }
  }
}
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
      span{
          font-size: 14px;
      }
      .date{
          font-size: 12px;
          color: #999;
      }
    }
  }
  .right {
      font-size: 12px;
      color: #2c3e50;
      span{
          margin-left: 16px;
          cursor: pointer;
      }
  }
}
</style>

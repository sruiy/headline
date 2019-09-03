<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">评论管理</template>
    </bread-crumb>
    <el-table :data="commentData" style="width: 100%">
      <el-table-column prop="title" label="标题" width="400"></el-table-column>
      <el-table-column :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="obj">
          <el-button size="mini" type="text">修改</el-button>
          <el-button size="mini" type="text">{{obj.row.comment_status?'关闭评论':'打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      commentData: []
    }
  },
  methods: {
    formatter (row) {
      //   console.log(row.comment_status)
      return row.comment_status ? '正常' : '关闭'
    },
    getComment () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(res => {
        console.log(res)
        this.commentData = res.data.results
      })
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>
</style>

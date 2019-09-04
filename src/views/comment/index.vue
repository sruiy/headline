<template>
  <el-card v-loading="loading">
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <el-table :data="commentData" style="width: 100%">
      <el-table-column prop="title" label="标题" width="400"></el-table-column>
      <el-table-column :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="obj">
          <el-button size="mini" type="text">修改</el-button>
          <el-button
            size="mini"
            type="text"
            @click="changeStatus(obj.row)"
          :style="{color:obj.row.comment_status? '#E6A23C': ''}">{{obj.row.comment_status?'关闭评论':'打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center" style="margin:30px">
      <el-pagination
        @current-change="currentChange"
        :current-page="this.page.page"
        :page-size="this.page.pageSize"
        :total="this.page.total"
        background
        layout="prev, pager, next"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      commentData: [],
      page: {
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    currentChange (newPage) {
      this.page.page = newPage
      this.getComment()
    },
    changeStatus (row) {
      //   console.log(row)
      let msg = row.comment_status ? '关闭' : '打开'
      this.$confirm(`此操作将${msg}评论, 是否继续?`, '提示', {
        type: 'warning'
      }).then(() => {
        this.$axios({
          url: '/comments/status',
          method: 'put',
          params: { article_id: row.id.toString() },
          data: { allow_comment: !row.comment_status }
        }).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
          this.getComment()
        })
      })
    },
    formatter (row) {
      //   console.log(row.comment_status)
      return row.comment_status ? '正常' : '关闭'
    },
    getComment () {
      this.loading = true
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.page, per_page: this.page.pageSize }
      }).then(res => {
        this.loading = false
        console.log(res)
        this.page.total = res.data.total_count
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

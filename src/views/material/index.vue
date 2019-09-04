<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <el-upload class="upload-demo" action :http-request="uploadImg" :show-file-list="false">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <el-tabs v-model="activeName" @tab-click="tabChange">
      <el-tab-pane label="全部素材" name="all">
        <el-row class="el-row">
          <el-col v-for="item in list" :key="item.id" class="el-col">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.url" class="image" />
              <div style="padding: 5px;" class="collect">
                <!--收藏-->
                <span
                  class="el-icon-star-on"
                  @click="collectChange(item)"
                  :style="{color : item.is_collected ? 'red': '' }"
                ></span>
                <!--删除-->
                <span @click="delImg(item)" class="el-icon-delete-solid"></span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="图片收藏" name="collect">
        <el-row class="el-row">
          <el-col v-for="item in list" :key="item.id" class="el-col">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.url" class="image" />
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
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
      activeName: 'all',
      list: [],
      page: {
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    uploadImg (params) {
      let obj = new FormData()
      obj.append('image', params.file)
      this.$axios({
        url: '/user/images',
        method: 'post',
        data: obj
      }).then(res => {
        // console.log(res)
        this.getImg()
      })
    },
    delImg (item) {
      this.$confirm('您确定要删除这张图片吗?', '警告').then(() => {
        this.$axios({
          url: `/user/images/${item.id}`,
          method: 'delete'
        }).then(res => {
          // console.log(123)
          this.getImg()
        })
      })
    },
    collectChange (item) {
      let mess = item.is_collected ? '取消' : ''
      this.$confirm(`您确定要${mess}收藏这张图片吗?`, '提示').then(() => {
        this.$axios({
          url: `/user/images/${item.id}`,
          method: 'put',
          data: {
            collect: !item.is_collected
          }
        }).then(res => {
          // console.log(res)
          this.getImg()
        })
      })
    },
    currentChange (newPage) {
      this.page.page = newPage
      this.getImg()
    },
    tabChange () {
      //   debugger
      this.page.page = 1
      this.getImg()
    },

    getImg () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect',
          page: this.page.page,
          per_page: this.page.pageSize
        }
      }).then(res => {
        console.log(res)
        this.page.total = res.data.total_count
        this.list = res.data.results
      })
    }
  },
  created () {
    this.getImg()
  }
}
</script>

<style lang="less" scoped>
.upload-demo {
  position: absolute;
  right: 40px;
  margin-top: -5px;
  z-index: 1;
}
.el-row {
  display: flex;
  flex-wrap: wrap;
  .el-col {
    width: 150px;
    height: 150px;
    margin: 30px;
    img {
      width: 150px;
      height: 120px;
    }
    .collect {
      height: 30px;
      display: flex;
      justify-content: space-around;
      span {
        font-size: 20px;
      }
    }
  }
}
</style>

<template>
  <el-tabs v-model="activeName" style="padding-top:-10px">
    <el-tab-pane label="全部素材" name="all">
      <el-row type="flex" justify="space-around" class="img-list">
        <div v-for="item in list" :key="item.id" class="img-card" @click="selectImg(item.url)">
          <img :src="item.url" alt />
        </div>
      </el-row>
      <el-row type="flex" justify="center">
        <el-pagination
          @current-change="pageChange"
          :current-page="page.page"
          :page-size="page.pageSize"
          background
          layout="prev, pager, next"
          :total="page.total"
        ></el-pagination>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="图片上传" name="upload">
      <el-upload :http-request="imgFile" class="avatar-uploader" action :show-file-list="false">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      activeName: 'all',
      page: {
        page: 1,
        pageSize: 8,
        total: 0
      }
    }
  },
  methods: {
    imgFile (params) {
      let imgData = new FormData()
      imgData.append('image', params.file)
      this.$axios({
        url: '/user/images',
        method: 'post',
        data: imgData
      }).then(res => {
        // console.log(res)
        this.$emit('selectImg', res.data.url)
      })
    },
    selectImg (url) {
      this.$emit('selectImg', url)
    },
    pageChange (newPage) {
      this.page.page = newPage
      this.getImg()
    },
    getImg () {
      this.$axios({
        url: '/user/images',
        params: {
          page: this.page.page,
          per_page: this.page.pageSize
        }
      }).then(res => {
        // console.log(res)
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
.img-list {
  flex-wrap: wrap;
  .img-card {
    width: 120px;
    height: 100px;
    margin: 20px 10px;
    img {
      border-radius: 6px;
      width: 100%;
      height: 100%;
    }
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

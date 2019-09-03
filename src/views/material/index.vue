<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <el-tabs v-model="activeName" @tab-click="tabChange">
      <el-tab-pane label="全部素材" name="all">
        <el-row class="el-row">
          <el-col v-for="item in list" :key="item.id" class="el-col">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.url" class="image" />
              <div style="padding: 5px;" class="collect">
                <span class="el-icon-star-on" :style="{color : item.is_collected ? 'red': '' }"></span>
                <span class="el-icon-delete-solid"></span>
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

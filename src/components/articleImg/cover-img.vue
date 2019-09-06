<template>
  <div class="cover-img">
    <div @click="dialogVisible(index)" v-for="(item,index) in coverImg" :key="index" class="select-img">
      <img :src="item ? item : defaulImg" alt />
    </div>
    <el-dialog :visible="visible" @close="dialogClose">
      <select-img @selectImg="getImgUrl"></select-img>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaulImg: require('../../assets/img/pic_bg.png'),
      visible: false,
      typeIndex: -1
    }
  },
  props: ['coverImg'],
  methods: {
    getImgUrl (url) {
      this.$emit('coverImg', url, this.typeIndex)
      this.dialogClose()
    },
    dialogVisible (index) {
      this.visible = true
      this.typeIndex = index
    },
    dialogClose () {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.cover-img {
  display: flex;
  padding: 20px 0;
  .select-img {
    height: 140px;
    width: 160px;
    border: 1px solid #ccc;
    margin-left: -1px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

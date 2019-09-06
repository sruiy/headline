<template>
<div></div>
</template>

<script>
import homeAside from './home/aside'
import homeHeadr from './home/header'
import breadCrumb from './common/breadcrumb'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import coverImg from './articleImg/cover-img'
import selectImg from './articleImg/select-img'

export default {
  install (Vue) {
    Vue.component('home-aside', homeAside) // 主页侧边
    Vue.component('home-header', homeHeadr) // 主页头部
    Vue.component('bread-crumb', breadCrumb) // 面包屑
    Vue.component('quill-editor', quillEditor) // 富文本
    Vue.component('cover-img', coverImg) // 封面结构显示组件
    Vue.component('select-img', selectImg) // 封面弹框组件
  }
}
</script>

<style>

</style>

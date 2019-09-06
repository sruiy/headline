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

export default {
  install (Vue) {
    Vue.component('home-aside', homeAside) // 主页侧边
    Vue.component('home-header', homeHeadr) // 主页头部
    Vue.component('bread-crumb', breadCrumb) // 面包屑
    Vue.component('quill-editor', quillEditor) // 富文本
  }
}
</script>

<style>

</style>

<template>
<div></div>
</template>

<script>
import homeAside from './home/aside'
import homeHeadr from './home/header'
import breadCrumb from './common/breadcrumb'

export default {
  install (Vue) {
    Vue.component('home-aside', homeAside)
    Vue.component('home-header', homeHeadr)
    Vue.component('bread-crumb', breadCrumb)
  }
}
</script>

<style>

</style>

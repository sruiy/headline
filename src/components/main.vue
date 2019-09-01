<template>
<div></div>
</template>

<script>
import homeAside from './home/aside'
import homeHeadr from './home/header'

export default {
  install (Vue) {
    Vue.component('home-aside', homeAside)
    Vue.component('home-header', homeHeadr)
  }
}
</script>

<style>

</style>

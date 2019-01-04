<template>
  <div class="m-geo">
    <i class="el-icon-location"/>北京市
    <nuxt-link
      class="changeCity"
      to="/changeCity">切换城市</nuxt-link>
    [苏州 重庆 天津]
  </div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="css">

</style>

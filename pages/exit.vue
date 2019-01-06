<template>
  <div class="" />
</template>

<script>
export default {
  layout: 'blank',
  /**
   * 用中间件做退出是因为：
   * 到达退出页面时自动执行下一步
   */
  middleware: async (ctx) => {
    let {
      status,
      data
    } = await ctx.$axios.get('/users/exit')
    if (status === 200 && data && data.code === 0) {
      window.location.href = '/'
    }
  }
}
</script>

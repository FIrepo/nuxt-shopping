<template>
  <el-row>
    <el-col :span="5">1</el-col>
    <el-col :span="10">2</el-col>
    <el-col :span="5">3</el-col>
    <el-col :span="4">4</el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    cur: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  mounted () {
    console.log(this.cur)
  }
}
</script>

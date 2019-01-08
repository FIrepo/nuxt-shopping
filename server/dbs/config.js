export default {
  // mongodb配置
  dbs: 'mongodb://47.107.148.235:27017/nuxt-shopping',
  // redis配置
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  // 邮箱发送验证码
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '1424912435@qq.com'
    },
    get pass() {
      return 'vtmgoyfximibgjha'
    },
    // 生成验证码
    get code() {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    // 验证码过期时间
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }
}

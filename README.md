# 一个 Webpack + Nuxt + MongoDB + redis 的 nuxt-shopping app

## 想到什么写什么
node本身不支持import，解决这个问题<br/>
在此之前首先确保全局安装了babel-cli<br/>
1、在npm run dev的时候，要同时加入babel的编译，才能使用import，在package.json中的dev脚本中加入--exec babel-node<br/>
2、同时创建.babelrc文件<br/>
3、安装babel-preset-es2015<br/>

接口签名：<br/>
接口签名获取网址：http://cp-tools.cn/sign<br/>
c6a3d36c8d43371e21550e1420f0d19e<br/>

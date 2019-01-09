import Router from 'koa-router'
import axios from './utils/axios'
import Categroy from '../dbs/models/categroy'

let router = new Router({
  prefix: '/categroy'
})

const sign = 'c6a3d36c8d43371e21550e1420f0d19e';

// 商品列表页的面包屑
router.get('/crumbs', async (ctx) => {
  // 本地数据
  // let result = await Categroy.findOne({city: ctx.query.city.replace('市', '') || '北京'})
  // if (result) {
  //   ctx.body = {
  //     areas: result.areas,
  //     types: result.types
  //   }
  // } else {
  //   ctx.body = {
  //     areas: [],
  //     types: []
  //   }
  // }

  // 线上数据
  let {
    status,
    data: {
      areas,
      types
    }
  } = await axios.get('http://cp-tools.cn/categroy/crumbs', {
    params: {
      city: ctx.query.city.replace('市', '') || "北京",
      sign
    }
  })
  ctx.body = {
    areas: status === 200 ? areas : [],
    types: status === 200 ? types : []
  }
})

export default router;

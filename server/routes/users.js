const router = require('koa-router')()
const db = require('../config/db.js')

router.prefix('/users')

router.get('/', async (ctx, next) => {
  const user_name = ctx.query.user_name;
  const user_pass = ctx.query.user_pass;
  ctx.body = await db.query(`select * from userinfo where user_name='${user_name}' and user_pass='${user_pass}'`);
  //ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router

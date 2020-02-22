const router = require('koa-router')()
const db = require('../config/db.js')

router.prefix('/notes')

router.get('/add', async (ctx, next) => {
  const note_id = ctx.query.note_id;
  const note_text = ctx.query.note_text;
  const note_imgurl = ctx.query.note_imgurl;
  const user_id = ctx.query.user_id;
  console.log(`insert into note(note_id,note_text,note_imgurl,user_id) values('${note_id}','${note_text}','${note_imgurl}','${user_id}'`);
  ctx.body = await db.query(`insert into note(note_id,note_text,note_imgurl,user_id) values('${note_id}','${note_text}','${note_imgurl}','${user_id}')`);
  //ctx.body = 'this is a users response!'
})

router.get('/view', async (ctx, next) => {
	ctx.body = await db.query(`select * from note`);
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a notes/bar response'
})

module.exports = router

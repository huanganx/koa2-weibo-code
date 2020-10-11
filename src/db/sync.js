/**
 * @description sequelize 同步数据库
 * @author huanganx
 */

const seq = require('./seq')

seq.authenticate().then(() => {
  console.log('ok')
}).catch(() => {
  console.log('error')
})

// 执行同步
seq.sync({
  force: true
}).then(()=>{
  console.log('sync ok')
  process.exit()
})
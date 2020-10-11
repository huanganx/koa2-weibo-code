const { TestScheduler } = require('jest');
/**
 * @description test json
 * @author huanganx
 */

 const server = require('./server');

test('json 接口返回数据格式正确',async()=>{
  const res = await server.post('/json')
  expect(res.body).toEqual({
    title: 'koa2 json'
  })
})
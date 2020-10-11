/**
 * @description 存储配置
 * @author huanganx
 */

const {
  isProd
} = require('../utils/env')

let REDIS_CONF = {
  port: 6379,
  host: 'localhost'
}

let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: '12345678',
  port: 3306,
  database: 'koa2-weibo-db'
}

if (isProd) {
  REDIS_CONF = {
    port: 6379,
    host: 'localhost'
  }
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    port: 3306,
    database: 'koa2-weibo-db'
  }
}

module.exports = {
  REDIS_CONF,
  MYSQL_CONF
}
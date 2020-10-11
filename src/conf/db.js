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

if (isProd)
  REDIS_CONF = {
    port: 6379,
    host: 'localhost'
  }

module.exports = {
  REDIS_CONF
}
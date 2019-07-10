'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  URL_PRE: '"http://mycanvas.oss-cn-shanghai.aliyuncs.com"',
})

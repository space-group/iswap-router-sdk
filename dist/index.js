
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./up-router-sdk.cjs.production.min.js')
} else {
  module.exports = require('./up-router-sdk.cjs.development.js')
}

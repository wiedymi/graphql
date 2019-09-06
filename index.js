/* eslint-disable */
require = require('esm')(module /*, options*/)
require('module-alias/register')
require('graphql-import-node/register')
module.exports = require('./app.js')

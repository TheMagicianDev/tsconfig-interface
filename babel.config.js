const n = require.resolve('node-fetch')
const path = require('path')

module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript'
  ]
};
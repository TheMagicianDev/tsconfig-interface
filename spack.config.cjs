const { config } = require('@swc/core/spack');
const path = require('path')

const p = (relativePath) => path.resolve(__dirname, relativePath) 

module.exports = config({
  entry: {
    index: p('src/index.ts')
  },
  output: {
    path: p('dist/cjs')
  },
  target: 'node',
  options: {
    configFile: p('swcrc.cjs.json'),
    isModule: false,
    swcrc: true,
  },
  // externalModules: ['node_modules\/(?!node-fetch)'],
})

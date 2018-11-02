const { version } = require('./package')

const banner = `/**
 * vue-tabevents v${version}
 * https://github.com/almoullim/vue-tabevents
 * Released under the MIT License.
 */
`

module.exports = {
  banner,
  format: ['cjs', 'es', 'umd', 'umd-min'],
  compress: 'umd',
  plugins: ['vue'],
  vue: {
    css: true
  }
}

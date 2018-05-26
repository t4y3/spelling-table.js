import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/spellingTable.js',
  output: {
    file: 'dist/spellingTable.js',
    format: 'umd',
    name: 'SpellingTable'
  },
  plugins: [
    buble(),
    uglify()
  ]
}

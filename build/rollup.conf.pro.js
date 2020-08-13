import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/copy-list.js',
    format: 'umd',
    name: 'CopyList',
  },
  plugins: [
    babel({ babelrc: true, babelHelpers: 'bundled', exclude: 'node_modules/**', }),
    typescript(),
  ]
}

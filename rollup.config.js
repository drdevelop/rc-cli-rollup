import nodeResolvePlugin from '@rollup/plugin-node-resolve';
import commonjsPlugin from '@rollup/plugin-commonjs';
import jsonPlugin from '@rollup/plugin-json';
import tsPlugin from 'rollup-plugin-typescript2';
import babelPlugin from '@rollup/plugin-babel';
// you can replace not exist variable of browser some variable,
// for example global can replaced as window
import replacePlugin from '@rollup/plugin-replace';

export default {
  input: './src/entry.ts',
  output: {
    file: './dist/entry.js',
    format: 'umd',
    name: 'Abtest',
    globals: {
      react: 'React',
    },
  },
  external: ['react'],
  plugins: [
    commonjsPlugin(),
    nodeResolvePlugin(),
    jsonPlugin(),
    tsPlugin(),
    babelPlugin({
      babelHelpers: 'bundled',
      exclude: '**/node_modules/**',
    }),
    replacePlugin({
      global: 'window',
    }),
  ],
}

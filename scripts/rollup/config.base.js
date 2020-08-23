import nodeResolvePlugin from '@rollup/plugin-node-resolve';
import commonjsPlugin from '@rollup/plugin-commonjs';
import jsonPlugin from '@rollup/plugin-json';
import tsPlugin from 'rollup-plugin-typescript2';
import babelPlugin from '@rollup/plugin-babel';
// you can replace not exist variable of browser some variable,
// for example global can replaced as window
import replacePlugin from '@rollup/plugin-replace';
// import htmlPlugin from '@rollup/plugin-html';
// import eslintPlugin from 'rollup-plugin-eslint';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'release/index.js',
    format: 'umd',
    name: 'Abtest',
    globals: {
      react: 'React',
    },
  },
  external: ['react'],
  plugins: [
    // eslintPlugin(),
    commonjsPlugin(),
    nodeResolvePlugin(),
    jsonPlugin(),
    tsPlugin(),
    babelPlugin({
      babelHelpers: 'bundled',
      exclude: '**/node_modules/**',
      runtimeHelpers: true,
    }),
    replacePlugin({
      global: 'window',
      'process.env.NODE_ENV': 'window',
    }),
  ],
}

import nodeResolvePlugin from '@rollup/plugin-node-resolve';
import commonjsPlugin from '@rollup/plugin-commonjs';
import jsonPlugin from '@rollup/plugin-json';
import tsPlugin from 'rollup-plugin-typescript2';
import babelPlugin from '@rollup/plugin-babel';
// you can replace not exist variable of browser some variable,
// for example global can replaced as window
import replacePlugin from '@rollup/plugin-replace';
// import htmlPlugin from '@rollup/plugin-html';
import livereloadPlugin from 'rollup-plugin-livereload';
// import eslintPlugin from 'rollup-plugin-eslint';
import servePlugin from 'rollup-plugin-serve';
import rollupBaseConfig from './config.base';

export default {
  input: 'test/index.tsx',
  sourceMap: true,
  external: ['react'],
  ...rollupBaseConfig,
  plugins: [
    ...rollupBaseConfig.plugins,
    // htmlPlugin({
    //   template: './template.html',
    // }),
    servePlugin({
      open: true,
      openPage: '/test/template.html',
      contentBase: './',
      port: 9080,
    }),
    livereloadPlugin(),
  ],
}

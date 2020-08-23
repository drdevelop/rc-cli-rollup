import rollupBaseConfig from './config.base';

export default {
  ...rollupBaseConfig,
  input: {
    index: 'src/index.tsx',
  },
  output: {
    dir: 'release/es',
    format: 'es',
    globals: {
      react: 'React',
    },
    // entryFileNames: '[name]/index.js',
    exports: 'named',
  },
  sourceMap: true,
  external: ['react'],
}

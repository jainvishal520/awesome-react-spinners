export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
    {
      name: 'ReactCSSSpinner',
      file: 'dist/bundle.umd.js',
      format: 'umd',
    },
  ],
};

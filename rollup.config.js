import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'dist/index.js',
  plugins: [sourcemaps()],
  output: {
    file: 'dist/index.cjs',
    format: 'cjs',
    sourcemap: true,
    sourcemapExcludeSources: true,
  },
};

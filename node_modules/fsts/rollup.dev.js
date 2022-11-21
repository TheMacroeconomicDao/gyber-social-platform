import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/fsts.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    resolve(),
    babel({
      externalHelpers: true,
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';

export const plugins = [
  scss({
    output: 'dist/styles.css',
  }),
  resolve({
    browser: true,
    preferBuiltins: true,
  }),
  commonjs({
    include: 'node_modules/**',
  }),
  babel({
    exclude: 'node_modules/**',
    plugins: ['external-helpers'],
  }),
];

export default {
  input: 'src/index.js',
  external: [
    'react',
    'react-dom',
    'react-is',
    'styled-components',
    'styled-components-theme-connector',
  ],
};

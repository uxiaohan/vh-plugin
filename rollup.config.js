import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'vh/index.js',
    output: {
        file: 'dist/vh-plugin.min.js',
        format: 'iife',
        name: 'vh',
    },
    plugins: [resolve(), commonjs(), terser()]
};

import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'src/index.js',
    output: {
        file: 'lib/my-npm-package.min.js',
        format: 'cjs',
        name: 'vh-plugin'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ]
};

// 打包命令
// npx rollup -c
// 发布命令
// npm publish
module.exports = {
    extends: ['src/usecase/lib/common',
        'src/usecase/lib/es2015', 'src/usecase/lib/es2017',
        'src/usecase/lib/vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    env: {
        browser: true,
        commonjs: false
    },
};

module.exports = {
    extends: ['core/usecase/lib/common',
        'core/usecase/lib/es2015', 'core/usecase/lib/es2017',
        'core/usecase/lib/vue'],
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

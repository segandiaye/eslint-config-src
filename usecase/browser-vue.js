module.exports = {
    extends: ['snd/usecase/lib/common',
        'snd/usecase/lib/es2015', 'snd/usecase/lib/es2017',
        'snd/usecase/lib/vue'],
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

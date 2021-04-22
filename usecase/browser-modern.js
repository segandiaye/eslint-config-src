module.exports = {
    extends: ['snd/usecase/lib/common','snd/usecase/lib/es2015'],
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module'
    },
    env: {
        browser: true,
        commonjs: false
    }
};

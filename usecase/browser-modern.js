module.exports = {
    extends: ['core/usecase/lib/common','core/usecase/lib/es2015'],
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module'
    },
    env: {
        browser: true,
        commonjs: false
    }
};

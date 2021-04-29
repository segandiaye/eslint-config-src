module.exports = {
    extends: ['src/usecase/lib/common','src/usecase/lib/es2015'],
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module'
    },
    env: {
        browser: true,
        commonjs: false
    }
};

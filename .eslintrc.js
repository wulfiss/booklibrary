module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended",  "prettier"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        'indent': ['error', 4],
        'eqeqeq': 'error',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'always'],
        'arrow-spacing': ['error', {'before': true, 'after': true}],
        'no-console': 'off',
        'no-unused-vars': 'off',
    }
}
module.exports = {
    env: {
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { project: ["./tsconfig.json"] },
    plugins: ["@typescript-eslint"],
    root: true,
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
    }
};

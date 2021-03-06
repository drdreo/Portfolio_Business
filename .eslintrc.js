module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: [
        "@nuxtjs",
        "plugin:nuxt/recommended"
    ],
    // add your custom rules here
    rules: {
        "vue/html-indent": "off",
        "vue/max-attributes-per-line": "off",
        "vue/html-closing-bracket-newline": "off",
        "vue/html-closing-bracket-spacing": "off",
        "indent": "off",
        "semi": "off",
        "quotes": "off",
        "object-curly-spacing": "off",
        "space-before-function-paren": "off"
    }
};

module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/vue3-strongly-recommended"], // "@vue/prettier"
    parserOptions: {
        parser: "@babel/eslint-parser",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/html-indent": ["error", 4, {"attribute": 1}],
        "vue/max-attributes-per-line": ["error", { "singleline": 3 }],
    },
};

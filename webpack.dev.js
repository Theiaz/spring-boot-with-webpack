const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        proxy: {
            "/": "http://localhost:8080",
        },
        port: 8081,
    },
});

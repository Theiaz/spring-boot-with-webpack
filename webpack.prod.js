const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [
            `...`, // extend existing plugins shipped with webpack 5 like terser
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: ["default", { discardComments: { removeAll: true } }],
                },
            }),
        ],
    },
});

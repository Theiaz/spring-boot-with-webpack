const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: {
        main: path.resolve(__dirname + "/src/main/js/pages/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "./src/main/resources/static"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            /* Get styles defined inside .vue SFC <style> tag and
             * Load them as inline style
             */
            {
                test: /\.vue\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            /* Get styles which are NOT defined inside .vue SFC, for example from .css files
             * Extract them into separate file
             */
            {
                test: /(?<!\.vue)\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                type: "asset/inline",
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/main/resources/img",
                    to: "",
                },
            ],
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
    ],
};


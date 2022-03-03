const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.extractCSS = ({ options = {}, loaders = [] } = {}) => {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        { loader: MiniCssExtractPlugin.loader, options },
                        "css-loader",
                    ].concat(loaders),
                    // enables tree-shaking
                    sideEffects: true,
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
            }),
        ],
    };
};

exports.tailwind = () => ({
    loader: "postcss-loader",
    options: {
        postcssOptions: { plugins: [require("tailwindcss")()] },
    },
});

exports.autoprefix = () => ({
    loader: "postcss-loader",
    options: {
        postcssOptions: { plugins: [] },
    },
});

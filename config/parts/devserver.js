const { WebpackPluginServe } = require("webpack-plugin-serve");

exports.devServer = () => ({
    watch: true,
    plugins: [
        new WebpackPluginServe({
            port: process.env.PORT || 8080,
            static: "./dist", // Expose if output.path changes
            liveReload: true,
            waitForBuild: true,
        }),
    ],
});

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackconfig = {
    target: 'node',
    mode: 'development',
    entry: {
        server: `${process.cwd()}/src/index.js`,
    },

    output: {
        filename: '[name].bundle.js',
        path: `${process.cwd()}/dist`,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: [`${process.cwd()}/node_modules`],
            },
        ],
    },

    externals: [nodeExternals()],

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV:
                    process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod'
                        ? "'production'"
                        : "'development'",
            },
        }),
    ],

    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true,
        path: true,
    },
};

module.exports = webpackconfig;

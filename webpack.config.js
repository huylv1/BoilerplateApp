var webpack = require('webpack');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
        alias: {
            'Layout': "app/components/Layout",
            'applicationStyles': 'app/styles/app.scss'
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            },
            exclude: ['node_modules']
        }]
    },
    devtool: 'cheap-module-source-map'
}
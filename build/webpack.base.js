const path = require('path');
const root = path.resolve(__dirname, '../');

module.exports = {
    entry: {
        app: ['./src/app.scss', './src/app.js']
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    resolve: {
        extensions: ['', '.js', '.css', '.scss']
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /(node_module|bower_components|libs|venders)/
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_module|bower_components|libs|venders)/,
                include: root
            },
            {
                test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name]-[hash:7].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    plugins: [],

    eslint: {
        configFile: path.resolve(root, './.eslintrc'),
        formatter: require('eslint-friendly-formatter')
    }
};


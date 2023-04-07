const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

const path = require('path');

module.exports = {
    entry:['babel-polyfill','./src/index.js'],
    output: {
        path: path.resolve(__dirname,'public/scripts'),
        filename: 'bundle.js'  
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude:/node_modules/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins:['transform-object-rest-spread']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname,'public'),
        publicPath:'/scripts/'
    },
    devtool: 'source-map'
}
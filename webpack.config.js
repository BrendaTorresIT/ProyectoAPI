module.exports = {
    mode: 'development',
    module: {
        rules: [
        {
        test: /\.vue$/,
        loader: 'vue-loader'
        }
    ]
    },
    resolve: {
        extensions: ['.js', '.vue']
    }
};
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ['css-loader?-url']               
            },
        ]
    }
}


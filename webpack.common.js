module.exports = {
    entry: './client/js/index.js',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    }
};

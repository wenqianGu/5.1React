module.exports = {
    mode:'development',
    entry:'./index.js',
    module:{
        rules:[
            {
                test:/\.m?js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react']
                    }
                }
            }
        ]
    }
}
//引用path模組
const path = require('path');
module.exports = {
    //這個webpack打包的對象，這裡面加上剛剛建立的index.js
    entry: {
        index: ['./src/index.js','./src/app.jsx']
    },
    output: {
        //這裡是打包後的檔案名稱
        filename: 'bundle.js',
        //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
        path: path.resolve('./dist'),
    },
    module: {
        rules: [
            {
                //第一個loader編譯JSX
                test: /\.jsx$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    }
                }
            },
            {
                //第二個loader編譯ES6
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                // css相關的loader (loader執行順序為最後一個到第一個)
                test: /\.(sa|sc|c)ss$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    //增加一個給devserver的設定
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        //指定開啟port為9000
        port: 9000
    }
};
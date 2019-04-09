### nodejs+react+webpack+sass服务器部署

#### 准备工作提前预知：
1.nodejs（最好是最新，可以自带npm）下载地址：https://npm.taobao.org/mirrors/node/v8.9.0/node-v8.9.0-x64.msi<br/>
2.node模块包：babel-core，babel-loader，babel-preset-es2015，babel-preset-react，css-loader，extract-text-webpack-plugin，jquery，node-sass，react，react-dom，sass-loader，style-loader，webpack，webpack-dev-server<br/>
3.创建一个项目newReact文件夹<br/>

#### 开始搭建
1.在newReact项目下呼出dos窗口编辑。
2.可使用淘宝镜像去安装对应模块npm install -g cnpm --registry=https://registry.npm.taobao.org
3.输入npm init 将生成package.json文件，可以一直回车默认，不过需要name与当前项目名不一致。
4.安装webpack，cnpm install --save-dev webpack@3.8.1 webpack-dev-server@2.9.5
![](http://www.xyji.top/img/project1.png)
5.安装react对应依赖的模块，输入cnpm install --save-dev babel-core babel-loader@7.1.2 babel-preset-es2015 babel-preset-react css-loader style-loader node-sass sass-loader extract-text-webpack-plugin jquery react react-dom
![](http://www.xyji.top/img/project2.png)
那么安装完之后package.json文件下有这些信息
![](http://www.xyji.top/img/project3.png)
6.在项目跟目录下新建webpack.config.js，配置如下：
```javascript
/*
	作者:night
	时间:2017-04-28
*/
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',path.resolve(__dirname, './src/index.js')
    ],
    output: {    	
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
		hotUpdateChunkFilename: 'hot/hot-update.js',
		hotUpdateMainFilename: 'hot/hot-update.json'
    },
	devServer: {
        disableHostCheck: true,
        port: 8989,
        //解决跨域
        proxy: {
          '/api': {
            target: 'http://xxx.xxx.xxx/xxx.json',
            pathRewrite: {'^/api':''},
            changeOrigin: true,
            secure: false // 接受 运行在 https 上的服务
          }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx|\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
```
6.在项目根目录下新建.babelrc文件（jsx转码配置文件），配置如下：
```javascript
{
    "presets": [
        "es2015",
        "react"
    ]
}
```
7.在项目根目录下新建以下目录和文件：
src,src/index.js,src/index.scss;
component,component/test/index.js,component/test/index.scss;
views,views/index.html;
src/index.js，src/index.scss-页面入口编译前的文件。
component/test/index.js，component/test/index.scss-组件文件。
views/index.html-服务器访问页面文件。
src/index.js代码如下：
```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Test from '../component/test/index.js';
import './index.scss';

ReactDOM.render(
    <div className="page">
        <Test />
    </div>,
    document.getElementById('page')
);
```
src/index.scss代码如下：
```sass
.page {
    font-size:1.2rem;
}
```
component/test/index.js代码如下：
```javascript
import React, { Component } from 'react';
import './index.scss';

class Test extends Component {
	constructor(props){
		super(props);
		this.state = {
			msg:"Hello World"
		}
	}
	render(){
		return (
			<div className="test">{this.state.msg}</div>
		)
	}
}

export default Test;
```
component/test/index.scss代码如下：
```sass
.test{
	font-size: 20px;
	color:#ff0;
	text-align: center;
}
```
views/index.html代码如下：
```html
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="description" content="night">
    <meta name="keywords" content="night">
    <title>React-Night</title>    
    <link rel="stylesheet" href="/dist/index.css">
</head>
<body>    
    <div id="page"></div>
    <script src="/dist/index.js"></script>
</body>
</html>
```
8.在package.json的scripts添加：
```javascript
"build": "webpack --watch",
"dev": "webpack && webpack-dev-server --devtool eval --progress --colors --content-base --host 0.0.0.0"
```
然后可以启动程序了。输入npm run dev
如果看到这样的展示说明已成功部署。访问地址：
http://localhost:8989/views/index.html
![](http://www.xyji.top/img/project4.png)
![](http://www.xyji.top/img/project5.png)
![](http://www.xyji.top/img/project6.png)
9.如果需要监听文件修改并实时刷新浏览器则需另外启动cmd窗口输入npm run build，关闭进程用tskill node
![](http://www.xyji.top/img/project7.png)
![](http://www.xyji.top/img/project8.png)
![](http://www.xyji.top/img/project.gif)
10.至此所有搭建已完成，欢迎吐槽，联系[Q526153861](http://wpa.qq.com/msgrd?v=3&uin=526153861&site=qq&menu=yes "Q526153861")

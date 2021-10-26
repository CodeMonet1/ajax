// 1.引入express
const { request, response } = require('express');
const express = require('express');

// 2.创建应用对象
const app = express();


// 3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server', (request, response) => {
	//设置响应头 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*');

	//设置响应体
	response.send('HELLO AJAX 你离成功又进了一步 有志者事竟成');

});
//可以接受任何类型的响应
app.all('/server', (request, response) => {
	//设置响应头 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');

	//设置响应体
	response.send('HELLO AJAX POST');

});
// JSON响应
app.all('/json-server', (request, response) => {
	//设置响应头 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
	const data = {
		name: 'lbj'
	}
	let str = JSON.stringify(data);
	//设置响应体
	response.send(str);

});
// 针对IE缓存
app.get('/ie', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.send('hello ie4');
})
//延时响应
app.get('/delay', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');

	setTimeout(() => {
	response.send('不好意思久等了');
	}, 3000);
})
//jQuery 服务
app.all('/jquery-server', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');

	const data = { name: '尚硅谷' };
	response.send(JSON.stringify(data));
})
//axios 服务
app.all('/axios-server', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');

	const data = { name: '尚硅谷' };
	response.send(JSON.stringify(data));
})
//4.监听端口启动服务
app.listen(8080, () => {
	console.log("服务端已启动，8080端口监听中....");
});


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// 定义GET请求的路由
app.get('/', (req, res) => {
    res.send(`I'm Xu Xiao`);
});

// 定义POST请求的路由
app.post('/api', (req, res) => {
    console.log(req.body);
    res.send('Received POST request');
});

// 启动服务器
app.listen(9136, () => {
    console.log('Server started on port 9136');
});

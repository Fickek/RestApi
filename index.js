const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user_routes');

const {
    json
} = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/', userRouter);

app.post('/', (req, res) => { // req - метод для получения данных от клиента , body - данные полученные от клиента
    console.log(req.body);
});

app.get('/', (req, res) => { // res - метод для отправки данных клиенту
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Connected to port: ${port}`);
});
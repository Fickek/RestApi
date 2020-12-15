const express = require('express');
const userRouter = require('./routes/user_routes');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/', userRouter);


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    console.log(req.body);
});


app.listen(port, () => {
    console.log(`Connected to port: ${port}`);
});
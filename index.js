const express = require('express');
const userRouter = require('./routes/user_routes');

const app = express();
const port = 3000;


app.use(express.json());
app.use('/', userRouter);


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Connected to port: ${port}`);
});
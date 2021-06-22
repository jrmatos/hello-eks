const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('My first app running on eks!!!!!\n My name is ' + process.env.NAME);
});

app.listen(4000, () => {
    console.log("listening at 4000");
});

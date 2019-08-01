const express = require("express");
const router = require('./router/router');
const  bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = express();


mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true}).then(console.log("database connected"));
server.use(bodyParser.json());
server.use("/student", router);



server.listen(5000, ()=>{
    console.log("server started")
})
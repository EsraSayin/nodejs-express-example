const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');

const teacherRouter = require('./api/routes/teacherRouter');
const studentRouter = require('./api/routes/studentRouter');
const commentRouter = require('./api/routes/commentRouter');

const environment = process.env.ENVIRONMENT;

const mongoEnvironment = environment === "production" ? "mongo" : "localhost";


const URI = "mongodb://admin:admin@" + mongoEnvironment + ":27017/school?authSource=admin&authMechanism=SCRAM-SHA-1";

const client = new MongoClient(URI);

const port = 8090;

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
run();

async function run() {
    await client.connect();
    await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});

    app.listen(port, function() {
        console.log(`listening on port: ${port}!`);
    });

    app.use('/teachers', teacherRouter);
    app.use('/students', studentRouter); 
    app.use('/comments', commentRouter);
}

module.exports = app;


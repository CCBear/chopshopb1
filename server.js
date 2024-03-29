const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axd = 5;

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
 mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true} 
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb database open successfully");  
})

 
 const exercisesRouter = require('./routes/exercises');
 const  usersRouter = require('./routes/users');


 app.use('/exercises', exercisesRouter);
 app.use('/users', usersRouter);

// comment 321

app.listen(port, () => {
    console.log("Mongodb database connection established successfully");
})

// eslint-disable-next-line no-template-curly-in-string

// comments23

// console.log({port});
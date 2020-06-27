const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (res, req) => {
    res.send('We are on home');
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true },
    () => console.log('connected to the database')
);

//How do we start listening to the server
app.listen(3000);
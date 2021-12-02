const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000 ;
// require ('dotenv').config()


mongoose.connect("mongodb+srv://areeb:123@cluster0.4qeu4.mongodb.net/Blogger?retryWrites=true&w=majority",()=> {
    console.log('connected to db 😁')
});

app.use(express.json());
require('./models/mentor.js')
require('./models/organization.js')

app.use(require('./router/mentor.js'))
app.use(require('./router/organization.js'))

app.listen(PORT,() =>{
    console.log("server is listen to port ")
});

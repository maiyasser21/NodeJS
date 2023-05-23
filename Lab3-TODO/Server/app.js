const express=require('express');
const mongoose=require('mongoose');
const parser=require("body-parser");
const dotenv=require('dotenv').config();
const todoRoutes=require('./routes/items');

const app = express(); 
app.use(parser.urlencoded({extended:false}));

app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION)
.then(()=>console.log("Database connection established"))
.catch(err => console.log(err));

app.use(todoRoutes);

app.listen(3000,()=>console.log("Server is listening on port 3000"));
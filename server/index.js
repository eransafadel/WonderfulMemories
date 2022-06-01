import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit:"30mb" ,extended: true }));
app.use(bodyParser.urlencoded({limit:"30mb" ,extended: true }));
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://eransafadel:eransafadel@cluste1.7jgzs.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000; // for heroku

mongoose.connect(CONNECTION_URL).then(()=>{console.log(`server running on port: ${PORT}`)});






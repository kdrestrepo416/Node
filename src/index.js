import app from './app.js';
import {PORT}from'./config.js'


app.listen (PORT,()=>{
    console.log('tu app esta lista por',PORT);
})

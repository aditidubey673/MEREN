const express = require('express');
const app =express();

let port =8080;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

// app.use((req,res)=>{
//     console.log('request received');
//     res.send('Hello from express server');
// })

app.get('/',(req,res)=>{
    res.send("hello,this is root route");
})

app.get('/apple',(req,res)=>{
    res.send("get request received for apple");
})

app.post('/apple',(req,res)=>{
    res.send("post request received for apple");
})

app.get('/ig/:username',(req,res)=>{
    let {username}=req.params;
    res.send(`hello ${username}, welcome to instagram`);
})

app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`search results for ${q}`);
})

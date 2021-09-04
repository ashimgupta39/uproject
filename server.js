const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/u.json',(req,res)=>{
    res.sendFile(__dirname + '/u.json')
})
app.listen(3000,()=>{
    console.log("Server started at- http://localhost:3000")
})

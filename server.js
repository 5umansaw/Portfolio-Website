const express = require('express')
const sentMail = require('./emailService/email')
const path = require('path')
const port = process.env.PORT || 4000
const app = express()

app.use(express.json())

app.get('/check' , (req , res)=>{
    res.send("hello suman")
})

app.post('/contact' , (req , res)=>{
    const data = req.body
    console.log(data)
    sentMail(data)
    res.status(200).json({msg: "email sent"})
})


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname , "./ClientPort/build")))
    console.log("production")
    
    app.get("*" , (req , res)=>{
        res.sendFile(path.join(__dirname , "./ClientPort/build/index.html"))
    })
}

app.listen(port , ()=>{
    console.log("server is up on port 4000")
})

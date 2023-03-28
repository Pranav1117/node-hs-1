


const express=require('express');
const app=express();

app.get("/",(req,res)=>{
res.send('this is home page')
console.log("aaa")
})
app.get("/express",(req,res)=>{
const data={
    massage:"Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes."
}

    res.send(data)
    
})

app.get("/main",(req,res)=>{
res.send("this is main page")
})

app.get("/about",(req,res)=>{
    res.send("this is about us page")
})


app.listen(8000,()=>{
console.log("aa")
})
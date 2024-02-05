import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app= express();
const port=3000;
const api_url=" https://v2.jokeapi.dev/joke/";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/submit",async(req,res)=>{
    try{
    const result=await axios.get(api_url+"any?type=single");
    console.log("used");
    res.render("index.ejs", { content: result.data});
    }
    catch(error){
        console.log(error.response.data);
        res.status(404);


    }
});

app.get("/dark",async(req,res)=>{
    try{
    const result=await axios.get(api_url+"dark?type=single");
    console.log("used");
    res.render("index.ejs", { content: result.data});
    }
    catch(error){
        console.log(error.response.data);
        res.status(404);


    }
});



app.listen(port,()=>{
    console.log(`hey working on port ${port}`);
})
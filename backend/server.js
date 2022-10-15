const express = require('express');
const notes = require("./data/notes.js");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get("/",(req,res) =>{
    res.send("API is running");
})

app.get("/api/notes",(req,res)=>{
    res.json({ "code" : 200, "data" : notes });    
});

app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find( el => el._id == req.params.id );
    const data = { "code" : note ? 200 : 404, "data" : note ? note : null };
    res.send( data );
});

const port = process.env.PORT || 5000;
app.listen(port,console.log(`Server started on port ${port}`));
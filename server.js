const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Movie = require("./Schema/movies.schema")
const DB_URL = "mongodb://127.0.0.1:27017/test"
const PORT = 8000;
const app = express();

mongoose.connect(DB_URL);
var db = mongoose.connection

app.use(express.json());
app.use(cors());

app.get("/movies", async (req, res)=>{
    let movies = await Movie.find({});
    res.status(200);
    res.json(movies);
})

app.get("/movies/:id", async (req, res)=>{
    const {id} = req.params
    let movies = await Movie.find({_id: id});
    res.status(200);
    res.json(movies);
})



app.post("/movies", async(req, res)=>{
    let movies = await Movie.create(req.body);
    res.status(200);
    res.json(movies);
})

app.patch("/movies/:id", async(req, res) => {
    let movies = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(movies);
})

app.delete("/movies/:id", async(req, res) => {
    try{
        let movies = await Movie.findByIdAndDelete(req.params.id)
        res.status(200).json(movies);
    }
    catch(e){
        res.status(400).send(e.message);
    }
})


app.listen(PORT, () => {
    console.log("Running On PORT:", PORT);
})



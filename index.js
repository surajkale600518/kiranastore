var express = require("express");
var cors = require("cors");

var mongoClient = require("mongodb").MongoClient;
require('dotenv').config();
var conString = process.env.DB_URL;
const PORT = process.env.PORT || 7000;

var app = express();
app.use(cors());
app.use(express.urlencoded({extended:true})); 
app.use(express.json());

app.get("/rice", (req, res)=>{
    mongoClient.connect(conString).then(clientObject=>{
        var database  = clientObject.db("e-com");
        database.collection("Riec").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        });
    });
});

app.get("/masala", (req, res)=>{
    mongoClient.connect(conString).then(clientObject=>{
        var database  = clientObject.db("e-com");
        database.collection("Masala").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        });
    });
});

app.listen(7000);
console.log(`Server Started : http://127.0.0.1:7000`);
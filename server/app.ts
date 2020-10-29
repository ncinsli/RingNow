import { debug } from 'console';
import express, { request, response } from 'express';
const fs = require("fs");

const app = express();
const port = 6969; 

app.get('/', (request, response) => {
    response.send("Hi motherfucker");
})

app.get("/class/:id", (req, res) => {
    try{
        const file : File = fs.readFileSync(`${req.params.id}.json`, () => {console.log("shit happens")}); 
        const data = JSON.parse(file.toString());
        data['code'] = "success";
        res.json(data);
    }
    catch{         
        const data = {"code" : "fail"};
        res.json(data); return;
    }
});

app.listen(port);
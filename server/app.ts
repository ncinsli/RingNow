import { debug } from 'console';
import express, { request, response } from 'express';
import cors from "cors";
import bodyParser from 'body-parser';

const fs = require("fs");

const app = express();
const port = 6969; 

app.use(cors())
app.get('/', (request, response) => {
    response.send("Hi motherfucker");
})

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
const PASSWORD = 1359;

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

app.post("/class/add", (req, res) => {
    try{
        if (req.body.password != PASSWORD){
            res.json({ "code" : "bad password" }); 
            return;
        }
        console.log(req.body);
        console.log(req.body.newTimeTable);
        const fileToEdit = fs.writeFileSync(`${req.body["class"]}.json`, JSON.stringify(req.body.newTimeTable, null, 2));
        res.json(req.body["class"]);
    }
    catch (e){
        res.send(e.toString());
        console.log(e);
    }
});

app.listen(port);
const express = require('express');
const app = express();
let { MongoClient,ObjectId } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT;

const client = new MongoClient('mongodb://localhost:27017');
const db = client.db('umsq');
const collection = db.collection('users');

//test route
app.get('/test',(req , res, next)=>{
    res.status(200).send("success");
    next();

},(req, res, next) => {
    console.log("success1");
    res.status(200).send("success1");
    next();


},(req, res, next) => {
    console.log("success2");
    res.status(200).send("success2");
    next();
});
console.log("__dirname:",__dirname);
app.use('/',express.static(__dirname + "/../client"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.text());

app.post('/submit',async (req, res)=>{
    let data = req.body;
    console.log("data:",data);
    await collection.insertOne(data)
    .then((message)=>{
        console.log("Document inserted successfully");
        res.status(201).send("success");
    })
    .catch((error)=>{
        console.log("Document insertion failed");
        res.status(400).send("failed");
    })
   

})
app.get('/getData',async (req,res)=>{
    let data =await collection.find().toArray();
    console.log("data :",data);
    
    let json_data = JSON.stringify(data);
    console.log("json_data :",json_data);

    res.status(200).send(json_data);
});

app.put('/editData',async (req , res)=>{
    let data = req.body;
    console.log("data :",data);
    
    let id = data.id;
    console.log("id :",id);
    console.log("typeof(id) :",typeof(id));
    let _id = new ObjectId(id);
    console.log("_id :",_id);
    console.log("typeof(_id) :",typeof(_id));

    let updateDatas = {
        name : data.name,
        email : data.email,
        password :data.password,
    }
    await collection.updateOne({_id},{$set : updateDatas})
    .then((message)=>{
        console.log("Document updated successfully :",message);
        res.status(200).send("success")
    })
    .catch((error)=>{
        console.log("Document not updated :",error);
        res.status(400).send("failed")
    })
})

app.delete('/deleteData',async (req , res)=>{
    let data = req.body;
    console.log("data :",data);

    let id = data;
    console.log("id :",id);

    let _id =new ObjectId(id);
    console.log("_id :",_id);

    await collection.deleteOne({_id})
    .then((message)=>{
        console.log("Deletion successfull");
        res.status(200).send("success");

    })
    .catch((error)=>{
        console.log("Deletion failed");
        res.status(400).send("failed");
    })

})

async function connect (){
    await client .connect()
    .then((message)=>{
        console.log("Database connection establsihed");
    })
    .catch((error)=>{
        console.log("Database connection error :",error);
    })
    .finally(()=>{
        app.listen(port, () => {
            console.log(`server running at http://192.168.150.88:${port}`)
        });
    })
}
connect()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT;

//middleware

app.use(express.static(__dirname + "/client"));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//schema

let schema = new mongoose.schema({
    name : {
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
    },
    password :{
        type : String,
        required : true,
    },
});

//comipling schema model 
const model = mongoose.model("users",schema);

//test api
app.get('/test',(req , res)=>{
    res.status(200).send("test success")
});
app.post('/submit',async (req , res)=>{
    let datas = req.body;
    console.log("datas :", datas);

    //save to database
    await model.create(data)
    .then((message)=>{
        console.log("document inserted successfully");
        res.status(201).send("success")
    })
})


async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/umse');
        console.log("database connection established");
    }catch (error) {
        console.log("database not connected :",error);
    }finally {
        app.listen(port, ()=>{
            console.log(`server runnning at http://localhost:${port}`);
        });
    }
}


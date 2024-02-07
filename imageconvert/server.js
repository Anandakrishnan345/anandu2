const express =require('express');
const app= express();
const mongoose=require('mongoose');
const dotenv =require('dotenv');
const fs = require('fs');
const path = require('path');

const error=require('mongoose/lib/error');
dotenv.config();
port=process.env.PORT;


app.use(express.static(__dirname+"/client"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.text());



//schema
let schema =new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  genre:{
    type:String,
    required:true,
    unique:true
  },
  director:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true,
  }
})





const model=mongoose.model("users",schema);


app.post('/submit', async (req, res) => {
  let { title, genre, director, base64Image } = req.body;

  // Check if all required fields are present
  if (!title || !genre || !director || !base64Image) {
      return res.status(400).send("All fields are required");
  }

  // Check if the user already exists
  const isUserExist = await model.findOne({ title: title });
  if (isUserExist) {
      return res.status(400).send(" already exists");
  }

  // Save the image to the server's file system
  const uploadDir = path.join(__dirname, 'uploads');
  if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
  }

  // Convert base64 string to buffer
  const imageBuffer = Buffer.from(base64Image, 'base64');

  // Generate a unique filename (you may use a different approach)
  const fileName = `${Date.now()}.png`;

  // Write buffer to file
  const filePath = path.join(uploadDir, fileName);
  fs.writeFileSync(filePath, imageBuffer);

  // Save user data (including image path) to MongoDB
  try {
      await model.create({
          title: title,
          genre: genre,
          director: director,
          image: filePath // Save the file path to the image in the database
      });
      console.log("Document inserted successfully");
      res.status(201).send("Success");
  } catch (error) {
      console.error("Document insertion failed:", error);
      res.status(400).send("Failed to insert document");
  }
});
async function connection() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ums");
        console.log("Database connection established");
    } catch (error) {
        console.log("Database Not Connected");
    }finally{
        app.listen(port,()=>{
            console.log(`server running at http://localhost:${port}`)
        })
    }
}
connection();
const users = require('../db/models/users');
const success_function = require('../utils/response-handlers').success_function
const error_function = require('../utils/response-handlers').error_function;


exports.createUser=async function (req,res){
    try{
        const datas=req.body;

        //validate

        const isUserExist =await users.findOne({email:datas.email});
        console.log("isUserExist : ",isUserExist);

        if(isUserExist){
            let response=error_function({
                statusCode:400,
                message:"user already exist",
            })
            res.status(response.statusCode).send(response);
           
        }

        const new_user = await users.create(datas);
        if (new_user) {
            let response = success_function({
                statusCode: 201,
                data: new_user,
                message: "success",
            })
            res.status(response.statusCode).send(response.message);
            return;
        } else {
            res.status(400).send("failed");
            return;
        } 
        
       
    }catch(error){
        let response=error_function({
            statusCode:400,
            message:"user creation failed",
        })
        res.status(response.statusCode).send(response)
    }
}

exports.getUserData=async function (req,res){
    
    
        try {
            
            const usersList = await users.find();
    
            if (usersList.length > 0) {
                res.status(200).send(usersList);
            } else {
                res.status(404).send("No users found");
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).send("Data not Found");
        }
    }
    

exports.getUserData=async function (req,res){

}

async function deleteUser() {

}

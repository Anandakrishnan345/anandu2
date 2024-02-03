let success_function = require('./response-handlers').success_function;
let error_function = require('./response-handlers').error_function;
let users = require('../db/models/users');
let jwt = require('jsonwebtoken');

exports.checkLogin =async function (req,res,next){
    try {
        
    } catch (error) {
        console.log("error :",error);
        let response  = error_function({
            statusCode :400,
            message :"something went wrong",
            
        });
        res.status(response.statusCode).send(response);
        return;
    }
}
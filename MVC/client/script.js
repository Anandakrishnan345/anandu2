
async function submitform(){
    let name = document.getElementById('name').value;
    console.log("name :",name);

    let email = document.getElementById('email').value;
    console.log("email :",email);

    let password =document.getElementById('password').value;
    console.log("password :",password);

    let data ={
        name,
        email,
        password,
    }
    let json_data = JSON.stringify(data);
    let response = await fetch('/users',{
        "method":"POST",
        "headers":{
            "Content-Type" :"application/json",
        },
        "body":json_data,
    });
    let parsed_response = await response.text();

    if(parsed_response==="success"){
        alert("submitted successfully");
    }else{
        alert("submition failed")
    }
}

async function getuserData() {
   
    let userData = await fetch('/getData');
    console.log("userData :",userData);
    
    let parsedUserData = await userData.json();
    console.log("parsedUserData :",parsedUserData);

     let tbody= document.getElementById('tbody');
     let content ='';
     for(let i=0;i<parsedUserData.length;i++){
        content=content +`
            <tr>
            <td>${parsedUserData[i]._id}</td>
            <td><input type="name" name="name" id="name-${parsedUserData[i]._id}" value="${parsedUserData[i].name}" disabled="true"></td> 
            <td><input type="email" name="email" id="email-${parsedUserData[i]._id}" value="${parsedUserData[i].email}" disabled="true"></td>
            <td><input type="password" name="password" id="password-${parsedUserData[i]._id}" value="${parsedUserData[i].password}" disabled="true"></td>
            <td><button onclick="handleEdit('${parsedUserData[i]._id}')">Edit</button></td>
            <td><button onclick="handleSave('${parsedUserData[i]._id}')">Save</button></td>
            <td><button onclick="handleDelete('${parsedUserData[i]._id}')">Delete</button></td>
            </tr>
        `
     }
     tbody.innerHTML=content;
}

function handleEdit(id){
    let _id = id;
    console.log("id :",_id)

    let name = document.getElementById(`name-${_id}`);
    console.log("name :",name);
    name.disabled=false;

    let email = document.getElementById(`email-${_id}`);
    console.log("email :",email);
    email.disabled=false;

    let password = document.getElementById(`password-${_id}`);
    console.log("password :",password);
    password.disabled=false;
}

async function handleSave(id){
    console.log("id :",id);
    let name = document.getElementById(`name-${id}`).value;
    console.log("name :",name);

    let email = document.getElementById(`email-${id}`).value;
    console.log("email :",email);

    let password = document.getElementById(`password-${id}`).value;
    console.log("password :",password);

    let data = {
        id,
        name,
        email,
        password,
    }
    let json_data = JSON.stringify(data);

    await fetch('/editData',{
        "method" : "PUT",
        "headers" : {
            "Content-Type" : "application/json"
        },
        "body":json_data,
    });
    getuserData();
}
async function handleDelete(id){
    console.log("id :",id);
    let response = await fetch("/deleteData",{
        "method" : "DELETE",
        "headers":{
            "Content-Type" : "application/plain",
        },
        "body":id,
    });
    console.log("response :",response);
    let parsed_response = await response.text();
    console.log("parsed_response :",parsed_response);

    if(parsed_response === "success"){
        alert("success");
    }else{
         alert("failed");
    }
}

async function validatename(){
    let name = document.getElementById('name').value;

    let name_error=document.getElementById('name-error');

    let name_regex=/^[A-Za-z]{2,30}([a-zA-Z]{2,30})?$/;

    let isnameinvaild=name_regex.test(name);
    console.log("isnamevaild:",isnameinvaild)

    if(!isnameinvaild){
        name_error.innerHTML="Invalid Name";
        return;
    }else{
        name_error.innerHTML="";
        return
    }
    
}

function validateemail(){
    let email=document.getElementById('email').value;
    let email_error=document.getElementById('email-error');
 
    let email_regex=/^[a-z0-9_-]*@([a-z0-9]+)*(\.[a-z]{2,3})$/i
 
    let isemailvalid=email_regex.test(email);
    console.log("isemailvalid : ",isemailvalid);
 
    if(!isemailvalid){
       email_error.innerHTML="invalid email";
    }else{
       email_error.innerHTML=""
    }
 }

 function validatepassword(){

    let password=document.getElementById('password').value;
    let password_error=document.getElementById('password-error');
 
    let password_regex =/^[a-z0-9,-=_@\.]{6,}$/;
    let ispasswordvalid=password_regex.test(password);
    console.log("ispasswordvalid : ",ispasswordvalid);
 
    if(!ispasswordvalid){
       password_error.innerHTML="invalid password";
    }else{
       password_error.innerHTML=""
    }
 }

 async function login(){
    let email = document.getElementById('login_email').value;
    console.log("email : ",email);
 
    let password = document.getElementById('login_password').value;
    console.log("password : ", password);
 
 
    let datas={
       email,
       password,
    }
 
    let json_data=JSON.stringify(datas);
    console.log("json_data",json_data);
 
    let response=await fetch('http://localhost:3001/login',{
       method: "POST",
       headers: {
          "Content-Type": "application/json",
       },
       body:json_data,
    });
  
    let parsed_response=await response.json();
    console.log("parsed_response : ",parsed_response);
 
 
    if(parsed_response.success){
       let token=parsed_response.data;
       console.log("token : ",token);
 
       localStorage.setItem('token',token);
       window.location.href="getuser.html";
       alert(parsed_response.message);
       return;
    }else{
       alert(parsed_response.message);
       return;
    }
 }
// async function testApi(){
//     let response = await fetch('http://192.168.150.134:3001/test');

//     let parsed_response = await response.json();
//     console.log("parsed response :",parsed_response);

//     if(parsed_response){
//         alert(parsed_response.message);
//         return;
//     }else{
//         alert('failed')
//     }
// }
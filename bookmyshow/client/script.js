async function submitform() {
    let title = document.getElementById('title').value;
    console.log("name : ", title);
 
    let genre = document.getElementById('genre').value;
    console.log("email : ", genre);
 
    let director = document.getElementById('director').value;
    console.log("password : ", director);
 
    let data = {
       title,
       genre,
       director,
    }
    let json_data = JSON.stringify(data);
    let response = await fetch('/submit', {
       "method": "POST",
       "headers": {
          "Content-Type": "application/json",
       },
       "body": json_data,
 
    });
 
    let parsed_response = await response.text();
 
    if (parsed_response === "success") {
       alert("submitted successfully");
    } else {
       alert("submition failed");
    }
 }
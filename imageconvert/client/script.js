async function submitform(){
    let name=document.getElementById('title').value;
    console.log("name : ",name);
 
    let email=document.getElementById('genre').value;
    console.log("email : ",email);
 
    let password=document.getElementById('director').value;
    console.log("password : ",password);
 
   let imageInput=document.getElementById('image');
 
   if(imageInput.files && imageInput.files[0]){
    const reader =new FileReader();
 
    reader.onload=async function(e){
       const base64Image=e.target.result;
       console.log("base64Image: ",base64Image);
 
       let data={
          name,
          email,
          password,
          base64Image,
       }
 
       let json_data=JSON.stringify(data);
       try {
          let response = await fetch('/submit', {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: json_data,
          });
 
          let parsed_response = await response.text();
 
          if (parsed_response === "success") {
              alert("Submitted successfully");
          } else {
              alert("Submission failed");
          }
      } catch (error) {
          console.error("Error:", error);
          alert("An error occurred while submitting the form");
      }
  }
 
  reader.readAsDataURL(imageInput.files[0]);
 }
 }
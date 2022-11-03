function validateForm(){
 
    var nameBox = document.getElementById('name').value;
    var emailBox = document.getElementById('email').value;
    var nameError=document.getElementById("nameWarning");
    var emailError=document.getElementById("emailWarning");
    var feildError=document.getElementById("feildWarning");
    var text1="";
    let text2="";
    var text3="";
    if(nameBox==""||emailBox==""){
        text3="Please fill all the required fields below";
        feildError.textContent = text3;
        feildError.style.color = "red";
        feildError.style.fontWeight="bold";
    }
    else{
        text3="";
        feildError.textContent = text3;
    }
    if(nameBox==""){
        text1="Name is required";
        nameError.textContent = text1;
        nameError.style.color = "red";
    }
    else {
        text1="";
        nameError.textContent = text1;
    }
    if (emailBox==""){
        text2="Email is required";
        emailError.textContent = text2; 
        emailError.style.color="red";  
    }
    else{
        text2="";
        emailError.textContent = text2; 
       
    }
}
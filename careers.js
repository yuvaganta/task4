function validateForm(){
 
    console.log("hello")
    var x = document.getElementById('name').value;
    var y = document.getElementById('email').value;
    var nameError=document.getElementById("nameWarning");
    var emailError=document.getElementById("emailWarning");
    var text1="";
    let text2="";
    console.log(y);
    if(x==""){
        text1="Name is required";
        nameError.textContent = text1;
        nameError.style.color = "red";
    }
    if (y==""){
        text2="Email is required";
        emailError.textContent = text2;   
    }
   
}
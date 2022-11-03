function maleButton(){
    alert("Hello Sir");
}
function femaleButton(){
    alert("Hello Lady");
}
function validateForm(){
 
    var nameBox = document.getElementById('name').value;
    var emailBox = document.getElementById('email').value;
    var oraganizationBox = document.getElementById('organizationName').value;
    var nameError=document.getElementById("nameWarning");
    var emailError=document.getElementById("emailWarning");
    var feildError=document.getElementById("feildWarning");
    var organizationNameError=document.getElementById("organizationNameWarning");
    var text1="";
    let text2="";
    var text3="";
    var text4="";
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
        var emalRef =/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)(.[a-z]+)?$/;
        if(emalRef.test(emailBox)){
            text2="";
            emailError.textContent = text2;
            console.log("ksjjak");
        }
       else{
        text2="Please enter a valid EmailID";
        emailError.textContent = text2; 
        emailError.style.color="red"; 
       }
    }
    if(oraganizationBox==""){
        text4="Organization Name is required";
        organizationNameError.textContent = text4;
        organizationNameError.style.color = "red";
    }
    else {
        text4="";
        organizationNameError.textContent = text4;
    }
}
function clearForm(){
    var nameError=document.getElementById("nameWarning");
    var emailError=document.getElementById("emailWarning");
    var feildError=document.getElementById("feildWarning");
    var organizationNameError=document.getElementById("organizationNameWarning");
    nameError.textContent = "";
    emailError.textContent = "";
    organizationNameError.textContent = "";
    feildError.textContent="";
    document.getElementById('contactform').reset();
}
function statePromo(){
    var stateValue=document.getElementById('state').value;
    var promoBox=document.getElementById('promoCode');
    var promoContent=stateValue;
    promoContent+="-PROMO"
    promoBox.value = promoContent;
    console.log(stateValue);
}
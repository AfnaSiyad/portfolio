function validate(e){
   e.preventDefault();
   // console.log("hhh");
   // validateName();
 if(validateName() == true || validateEmail() == true || validateMobile() == true || validateSubject() == true || validateMessage() == true){
    return true;
 }else{
    return false;
 }
 
}
function validateName(){
   let nameElement = document.getElementById("name");
   let nameError = document.getElementById("nameError");
   let name = nameElement.value;
   let namePattern = /^[a-zA-Z]+$/;
   console.log(name);
   if(name == null || name == ''){
    nameError.innerHTML="Please enter your name!";
    nameError.style.display = 'block';
    nameElement.style.borderBottom = 'solid 1px red';
    return false;
   }else if(name.length < 4){
      nameError.innerHTML="Name should have four characters!";
      nameError.style.display = 'block';
      nameElement.style.borderBottom = 'solid 1px red';
      return false;
   }else if(name.length >= 20){
      nameError.innerHTML="Name should be lessthan 20 characters!";
      nameError.style.display = 'block';
      nameElement.style.borderBottom = 'solid 1px red';
      return false;
   }else if(!name.match(namePattern)){
      nameError.innerHTML="Name should contain only letters!";
      nameError.style.display = 'block';
      nameElement.style.borderBottom = 'solid 1px red';
      return false;
   }
   else{
    nameElement.style.borderBottom = 'solid 1px green';
    nameError.style.display = 'none';
    return true;
   }
}
function validateEmail(){
   let emailElement = document.getElementById("email");
   let emailError = document.getElementById("emailError");
   let email = emailElement.value;
   let mailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
   console.log(email);
   if(email == null || email == ''){
    emailError.innerHTML="Please enter valid email!";
    emailError.style.display = 'block';
    emailElement.style.borderBottom = 'solid 1px red';
    return false;
   }else if(!email.match(mailPattern)){
      emailError.innerHTML="Please enter valid email!";
      emailError.style.display = 'block';
      emailElement.style.borderBottom = 'solid 1px red';
      return false;
   }
   else{
    emailElement.style.borderBottom = 'solid 1px green';
    emailError.style.display = 'none';
    return true;
   }
}
function validateMobile(){
   let mobileElement = document.getElementById("mobile");
   let mobileError = document.getElementById("mobileError");
   let mobile = mobileElement.value;
   let mobilePattern = /^([0-9]{10})$/;
  console.log(mobile);
  if(mobile == null || mobile == ''){
   mobileError.innerHTML="Please enter your mobile number!";
   mobileError.style.display = 'block';
   mobileElement.style.borderBottom = 'solid 1px red';
   return false;
  }else if(!mobile.match(mobilePattern)){
   mobileError.innerHTML="Please enter valid mobile number!";
   mobileError.style.display = 'block';
   mobileElement.style.borderBottom = 'solid 1px red';
   return false;
  }
  else{
   mobileElement.style.borderBottom = 'solid 1px green';
   mobileError.style.display = 'none';
   return true;
  }
}
function validateSubject(){
   let subElement = document.getElementById("subject");
   let subError = document.getElementById("subjectError");
   let subject = subElement.value;
  console.log(subject);
  if(subject == null || subject == ''){
   subError.innerHTML="Please enter subject!";
  subError.style.display = 'block';
   subElement.style.borderBottom = 'solid 1px red';
   return false;
  }else{
   subElement.style.borderBottom = 'solid 1px green';
  subError.style.display = 'none';
   return true;
  }
}
function validateMessage(){
   let messageElement = document.getElementById("message");
   let messageError = document.getElementById("messageError");
  let message = messageElement.value;
  console.log(message);
  if(message == null || message == ''){
   messageError.innerHTML="Please enter message!";
   messageError.style.display = 'block';
   messageElement.style.borderBottom = 'solid 1px red';
   return false;
  }else{
   messageElement.style.borderBottom = 'solid 1px green';
   messageError.style.display = 'none';
   return true;
  }
}
function validateForm() {
  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let dateOfbirth = document.getElementById("dob");
  let companyName = document.getElementById("compname");
  let companyAddress = document.getElementById("compaddress");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("cpassword");

  //   if((firstName.value.length===0 || lastName.value.length===0) || (dateOfbirth.value.length===0 || companyName.value.lenght===0)
  //   || (companyAddress.value.length===0 ||email.value.length===0)|| (password.value.length===0 || confirmPassword.value.length===0))
  //   {document.getElementById("empty").innerHTML = "all fields required";
  //     return false}

  if (firstName.value.length <= 4) {
    firstName.className = "wrong-input";
    // document.getElementById("error").innerHTML = "first name cant be blank";
    firstName.nextElementSibling.innerHTML =
      "first name can't be blank or less than 4 letters";
    return false;
  } else if (lastName.value.length <= 4) {
    lastName.className = "wrong-input";
    lastName.nextElementSibling.innerHTML =
      "last name can't be blank or less than 4 letters";
    return false;
  } else if (dateOfbirth.value.length < 10) {
    dateOfbirth.className = "wrong-input";
    dateOfbirth.nextElementSibling.innerHTML =
      "date of birth can't be blank or less than 10 digits";
    return false;
  } else if (companyName.value.length < 10) {
    companyName.className = "wrong-input";
    companyName.nextElementSibling.innerHTML =
      "Company name can't be blank or less than 10 letters";
    return false;
  } else if (companyAddress.value.length < 10) {
    companyAddress.className = "wrong-input";
    companyAddress.nextElementSibling.innerHTML =
      "company address can't be blank or less than 10 letters";
    return false;
  } else if (email.value.length < 10) {
    email.className = "wrong-input";
    email.nextElementSibling.innerHTML =
      "email address can't be blank or less than 10 letters";
    return false;
  } else if (password.value.length < 5) {
    password.className = "wrong-input";
    password.nextElementSibling.innerHTML =
      "password can't be blank or less than 5 letters";
    return false;
  }
  // else if(confirmPassword.value.length < 5){
  //     confirmPassword.className="wrong-input"
  //     confirmPassword.nextElementSibling.innerHTML="password can't be blank or less than 5 letters"
  //     return false;
  // }
  else if (password.value.length != confirmPassword.value.length) {
    confirmPassword.nextElementSibling.innerHTML =
      "your password does not match";
    return false;
  } else {
    return true;
  }
}

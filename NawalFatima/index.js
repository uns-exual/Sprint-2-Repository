function validateForm(event) {
  event.preventDefault();
  var name = document.forms["register"]["name"].value;
  var address = document.forms["register"]["Addresss"].value;
  var email = document.forms["register"]["email"].value;
  var password = document.forms["register"]["password"].value;
  var repeatPassword = document.forms["register"]["Repeat password"].value;
  var phone = document.forms["register"]["phone number"].value;
  var language = document.forms["register"]["Language"].value;

  if (name == "") {
    alert("Please enter your name");
    return false
  }

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Only alphabets are allowed in name");
    return false;
  }

  if (address == "") {
    alert("Please enter your address");
    return false;
  }


  address = address.trim();
  var addressRegex = /^[a-zA-Z0-9\s,.'-]+$/;
  if (!addressRegex.test(address)) {
    alert("Please enter a valide adress")
    return false;
  }

  if (email == "") {
    alert("Please enter your email")
    return false
  }

  var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (!(emailRegex.test(email))) {
    alert("Email Address is invalid")
    return false;
  }

  if (password == "") {
    alert("Please enter your password");
    return false;
  }


  if (password.length < 8) {
    alert("Your password must be at least 8 characters long");
    return false;
  }

  if (repeatPassword == "") {
    alert("Please repeat your password");
    return false;
  }

  if (password != repeatPassword) {
    alert("Your passwords do not match");
    return false;
  }

  if (phone == "") {
    alert("Please enter your telephone number");
    return false;
  }

  var phoneRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/; //This regex match code of phone no
  if (!phoneRegex.test(phone)) {
    alert("Please enter correct phone no");
    return false;
  }

  if (language == "") {
    alert("Please enter your preferred language");
    return false;
  }

  language = language.trim();
  var phoneRegex = /^[a-zA-Z\s\p{P}]+$/u; // This regex matches English letters, spaces, and punctuation
  if (!phoneRegex.test(language)) {
    alert("Please enter some valid language")
    return false;
  }

  alert("Form submitted successfully")
  window.location.href = "https://www.google.com/";

}
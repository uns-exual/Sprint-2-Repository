function formValidation() {
    var passid1 = document.registration.passid1
    var fname = document.registration.first_name;
    var lname = document.registration.last_name;
    var uadd = document.registration.address;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;{
        if (passid_validation(passid1, 7, 12)){
            if (allLetter(fname)) 
            if (allLetter1(lname)){
                if (allLetter2(uadd)) {
                    if (allnumeric(uzip)) {
                        if (ValidateEmail(uemail)) {
                        }
                    }

                }
            }
        }
    }
    return false;
} function passid_validation(passid1, mx, my) {
    var passid_len = passid1.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx){
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid1.focus();
        return false;
    }
    return true;
}

// function validatepassword(){
//     var passElement = document.getElementById("passid1")
//     var repassElement = document.getElementById("repass")
//     if (passElement.value!=repassElement.value){
//         var repass_msgEl=document.getElementById("repass_msg")
//         repass_msgEl.style.display="block"
//     }
//     return true;
// }

function allLetter(fname) {
    var letters = /^[A-Za-z]+$/;
    if (fname.value.match(letters)) {
        return true;
    }
    else {
        alert('First name must have alphabet characters only');
        fname.focus();
        return false;
    }
}

function allLetter1(lname) {
    var letters = /^[A-Za-z]+$/;
    if (lname.value.match(letters)) {
        return true;
    }
    else {
        alert('Last name must have alphabet characters only');
        lname.focus();
        return false;
    }
}

function allLetter2(lname) {
    var letters = /^[A-Za-z]+$/;
    if (lname.value.match(letters)) {
        return true;
    }
    else {
        alert('Suburb must be alphabet characters only');
        uadd.focus();
        return false;
    }
}


function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)) {
        return true;
    }
    else {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}


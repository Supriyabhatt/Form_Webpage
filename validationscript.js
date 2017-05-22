function namevalidate() {
    var name = document.getElementById("text_Name").value;
    for (i = 0; i < name.length; i++) {
        if (!((name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) || (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122) || name.charCodeAt(i) == 32)) {
            alert("Enter a valid Name");
            return false;
            break;
        }
    }
    return true;
}

function fathernamevalidate() {
    var fathername = document.getElementById("text_FatherName").value;
    for (i = 0; i < fathername.length; i++) {
        if (!((fathername.charCodeAt(i) >= 65 && fathername.charCodeAt(i) <= 90) || (fathername.charCodeAt(i) >= 97 && fathername.charCodeAt(i) <= 122) || fathername.charCodeAt(i) == 32)) {
            alert("Enter a valid Father Name");
            return false;
            break;
        }
    }
    return true;
}

function mothernamevalidate() {
    var mothername = document.getElementById("text_MotherName").value;
    for (i = 0; i < mothername.length; i++) {
        if (!((mothername.charCodeAt(i) >= 65 && mothername.charCodeAt(i) <= 90) || (mothername.charCodeAt(i) >= 97 && mothername.charCodeAt(i) <= 122) || mothername.charCodeAt(i) == 32)) {
            alert("Enter a valid Mother Name");
            return false;
            break;
        }
    }
    return true;
}


function aadharvalidate() {
    var aadhar = document.getElementById("text_AadharNumber").value;
    if (aadhar.length != 12 && aadhar.length != 0) {
        alert("Enter a valid Aadhaar Card Number");
    } else {
        for (i = 0; i < aadhar.length; i++) {
            if (!(aadhar.charCodeAt(i) <= 57 && aadhar.charCodeAt(i) >= 48)) {
                alert("Invalid aadhar card number");
                return false;
                break;
            }
        }
    }
    return true;
}


function emailvalidate() {
    var count = 0;
    var email = document.getElementById("text_Email").value;
    for (i = 0; i < email.length; i++) {
        if (!((email.charCodeAt(i) >= 65 && email.charCodeAt(i) <= 90) || (email.charCodeAt(i) >= 97 && email.charCodeAt(i) <= 122)) && email.charCodeAt(i) != 64 && count == 0) {
            if (email.charCodeAt(i) == 46) {
                if (count != 1)
                    alert("Enter a valid email address" + email.charCodeAt(i));
                return false;
                break;
            }
        }
        if (email.charCodeAt(i) == 64) {
            count = count + 1;
        }
        if (email.length - i < 3 && count != 1) {
            alert("Invalid email address");
            return false;
            break;
        }
    }
    return true;
}

function pinvalidate() {
    var pincode = document.getElementById("text_Pincode").value;
    for (i = 0; i < pincode.length; i++) {
        if (!(pincode.charCodeAt(i) <= 57 && pincode.charCodeAt(i) >= 48)) {
            alert("Invalid Pin Code");
            return false;
            break;
        }
    }
    return true;
}


function send() {
    var flag = 0;
    var i;
    var name = document.getElementById("text_Name").value;
    var fname = document.getElementById("text_FatherName").value;
    var mname = document.getElementById("text_MotherName").value;
    var mobile = document.getElementById("text_MobileNumber").value;
    var fmob = document.getElementById("text_FatherNumber").value;
    var mmob = document.getElementById("text_MotherNumber").value;
    var aadhar = document.getElementById("text_AadharNumber").value;
    var blood = document.getElementById("blood").options[document.getElementById("blood").selectedIndex].text;
    var dob = " ";
    var gen = document.getElementsByName("gender");
    var gender;
    var nat = document.getElementsByName("nationality");
    var nationality;
    var country;
    var cat = document.getElementsByName("Category");
    var category;
    var pc = document.getElementsByName("PhysicallyChallenged");
    var pchallenged;
    var ward = document.getElementsByName("wards");
    var wdp;
    var email = document.getElementById("text_Email").value;
    var caddress = document.getElementById("text_CAddress").value;
    var paddress = document.getElementById("text_PAddress").value;
    var pincode = document.getElementById("text_Pincode").value;
    var state = "";
    var city = "";

    if (namevalidate() && fathernamevalidate() && mothernamevalidate() && aadharvalidate() && emailvalidate() && pinvalidate()) {

        //Check for any unchecked check box
        if (blood == "-- select an option --") {
            alert("Please select your Blood Group");
        }
        for (i = 0, length = gen.length; i < length; i++) {
            if (gen[i].checked) {
                gender = gen[i].value;
                break;
            }
        }
        if (i == length) {
            alert("Please select Gender");
        }
        for (i = 0, length = nat.length; i < length; i++) {
            if (nat[i].checked) {
                if (i == 0) {
                    nationality = nat[i].value;
                    country = "India";
                } else {
                    //nationality as of drop down menu
                    country = document.getElementById("countries").options[document.getElementById("countries").selectedIndex].text;
                    nationality = country;
                }
                break;
            }
        }
        if (i == length) {
            alert("Please select Nationality");
        }
        for (i = 0, length = cat.length; i < length; i++) {
            if (cat[i].checked) {
                category = cat[i].value;
                break;
            }
        }
        if (i == length) {
            alert("Please select Category");
        }
        for (i = 0, length = pc.length; i < length; i++) {
            if (pc[i].checked) {
                pchallenged = pc[i].value;
                break;
            }
        }
        if (i == length) {
            alert("Please select if Physically Challenged");
        }

        for (i = 0, length = ward.length; i < length; i++) {
            if (ward[i].checked) {
                wdp = ward[i].value;
                break;
            }
        }
        if (i == length) {
            alert("Please select Ward of Defence Personnel");
        }

    }

    //Check for empty fields
    if (name == "") {
        alert("Please fill in your Name");
        flag = 1;
    } else if (fname == "") {
        alert("Please fill in Father's Name");
        flag = 1;
    } else if (mname == "") {
        alert("Please enter Mother's Name");
        flag = 1;
    } else if (mobile == "") {
        alert("Please enter your Mobile Number");
        flag = 1;
    } else if (fmob == "") {
        alert("Please enter your Father's Mobile Number");
        flag = 1;
    } else if (aadhar == "") {
        if (nationality == "Indian")
            alert("Please enter your Aadhar card number");
        flag = 1;
    } else if (email == "") {
        alert("Please enter your Email Address");
        flag = 1;
    } else if (caddress == "") {
        alert("Please enter Correspondance Address");
        flag = 1;
    } else if (paddress == "") {
        alert("Please enter your Permanent Address");
        flag = 1;
    } else if (pincode == "") {
        alert("Please enter you Pin Code");
        flag = 1;
    }

    //check pincode
    if (nationality == "Indian" && pincode.length != 6) {
        alert("Please Enter a valid Pin Code")
    }


    //If all Good then upload to Database
    if (flag == 0) {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari 
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5 
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);
            }
        };

        xmlhttp.open("GET", "adduser.php?name=" + name + "&fname=" + fname + "&mname=" + mname + "&mobile=" + mobile + "&fmob=" + fmob + "&mmob=" + mmob + "&aadhar=" + aadhar + "&blood=" + blood + "&dob=" + dob + "&gender=" + gender + "&nationality=" + nationality + "&country=" + country + "&category=" + category + "&pchallenged=" + pchallenged + "&wdp=" + wdp + "&email=" + email + "&caddress=" + caddress + "&paddress=" + paddress + "&pincode=" + pincode + "&state=" + state + "&city=" + city, true);
        xmlhttp.send();
    }

}




function bodyload() {
    document.getElementById("countries").style.visibility = "hidden";
}

function show() {
    document.getElementById("countries").style.visibility = "visible"
}
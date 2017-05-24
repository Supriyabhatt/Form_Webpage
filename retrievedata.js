function retrieve(mobile) {
    // if (window.XMLHttpRequest) {
    //     // code for IE7+, Firefox, Chrome, Opera, Safari 
    //     xmlhttp = new XMLHttpRequest();
    // } else {
    //     // code for IE6, IE5 
    //     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    // }

    // xmlhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         if (this.responseText == "Failed") {
    //             document.getElementById("alertMessage").innerHTML = "No Data found";
    //             return false;
    //         } else {
    //             assign(this.responseText);
    //             return true;
    //         }
    //     }
    // };

    // xmlhttp.open("GET", "retrieveuser.php?mobile=" + mobile, true);
    // xmlhttp.send();

    var reply = "Girish|Girish|Girish|007|007|007||A-| |male|Russian Federation|Russian Federation|GEN|NO|NO|hkj@gmail.com|asdhkj|kjhkj|132||";
    assign(reply);

}

function assign(reply) {
    var atr = ["name", "fname", "mname", "mob", "fmob", "mmob", "aadhar", "blood", "dob", "gender", "nationality", "country", "category", "pchallenged", "wdp", "email", "ca", "pa", "pin"];
    var val = "";
    var pos = 0;
    var loc = 0;
    for (i = 0; i < reply.length; i++) {
        if (reply.charAt(i) != '|') {
            val = val + reply.charAt(i);
        } else {
            setter(atr[pos], val);
            pos++;
            loc = 0;
            val = "";
        }
    }
    showEditForm();
}

function setter(id, val) {
    // alert("ID: " + id + " Val:" + val);
    if (id == "name") {
        document.getElementById("text_Name").value = val;
    } else if (id == "fname") {
        document.getElementById("text_FatherName").value = val;
    } else if (id == "mname") {
        document.getElementById("text_MotherName").value = val;
    } else if (id == "mob") {
        document.getElementById("text_MobileNumber").value = val;
    } else if (id == "fmob") {
        document.getElementById("text_FatherNumber").value = val;
    } else if (id == "mmob") {
        document.getElementById("text_MotherNumber").value = val;
    } else if (id == "aadhar") {
        document.getElementById("text_AadharNumber").value = val;
    } else if (id == "blood") {
        document.getElementById("bloodAlert").innerHTML = val;
    } else if (id == "dob") {
        document.getElementById("dobAlert").innerHTML = val;
    } else if (id == "gender") {
        if (val == "male") {
            document.getElementById("radio_GenderM").checked = true;
        } else if (val == "female") {
            document.getElementById("radio_GenderF").checked = true;
        } else if (val == "other") {
            document.getElementById("radio_GenderO").checked = true;
        }
    } else if (id == "nationality") {
        if (val != "Indian") {
            document.getElementById("radio_Foreigner").checked = true;
        } else {
            document.getElementById("radio_Indian").checked = true;
        }
    } else if (id == "country") {
        if (val != "Indian") {
            document.getElementById("countries").style.visibility = "visible";
            //show selected country based on val
        }
    } else if (id == "category") {
        if (val == "ST") {
            document.getElementById("radio_Catst").checked = true;
        } else if (val == "SC") {
            document.getElementById("radio_Catsc").checked = true;
        } else if (val == "OBC") {
            document.getElementById("radio_Catobc").checked = true;
        } else if (val == "GEN") {
            document.getElementById("radio_Catgen").checked = true;
        }
    } else if (id == "pchallenged") {
        if (val == "YES") {
            document.getElementById("radio_pYes").checked = true;
        } else if (val == "NO") {
            document.getElementById("radio_pNo").checked = true;
        }
    } else if (id == "wdp") {
        if (val == "YES") {
            document.getElementById("radio_wdpYes").checked = true;
        } else if (val == "NO") {
            document.getElementById("radio_wdpNo").checked = true;
        }
    } else if (id == "email") {
        document.getElementById("text_Email").value = val;
    } else if (id == "ca") {
        document.getElementById("text_CAddress").value = val;
    } else if (id == "pa") {
        document.getElementById("text_PAddress").value = val;
        if (document.getElementById("text_PAddress").value == document.getElementById("text_CAddress").value) {
            document.getElementById("checkbox_SameAddress").checked = true;
        }
    } else if (id == "pin") {
        document.getElementById("text_Pincode").value = val;
    }
}
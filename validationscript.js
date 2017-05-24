    function namevalidate() {
        var name = document.getElementById("text_Name").value;
        for (i = 0; i < name.length; i++) {
            if (!((name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) || (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122) || name.charCodeAt(i) == 32)) {
                document.getElementById("nameAlert").innerHTML = "Enter a valid Name";
                break;
            }
        }
        if (i == name.length) {
            document.getElementById("nameAlert").innerHTML = "";
            return true;
        } else {
            return false;
        }
    }

    function fathernamevalidate() {
        var fathername = document.getElementById("text_FatherName").value;
        for (i = 0; i < fathername.length; i++) {
            if (!((fathername.charCodeAt(i) >= 65 && fathername.charCodeAt(i) <= 90) || (fathername.charCodeAt(i) >= 97 && fathername.charCodeAt(i) <= 122) || fathername.charCodeAt(i) == 32)) {
                document.getElementById("fnameAlert").innerHTML = "Enter a valid Name";
                break;
            }
        }
        if (i == fathername.length) {
            document.getElementById("fnameAlert").innerHTML = "";
            return true;
        } else {
            return false;
        }
    }

    function mothernamevalidate() {
        var mothername = document.getElementById("text_MotherName").value;
        for (i = 0; i < mothername.length; i++) {
            if (!((mothername.charCodeAt(i) >= 65 && mothername.charCodeAt(i) <= 90) || (mothername.charCodeAt(i) >= 97 && mothername.charCodeAt(i) <= 122) || mothername.charCodeAt(i) == 32)) {
                document.getElementById("mnameAlert").innerHTML = "Enter a valid Name";
                break;
            }
        }
        if (i == mothername.length) {
            document.getElementById("mnameAlert").innerHTML = "";
            return true;
        } else {
            return false;
        }
    }


    function aadharvalidate() {
        var aadhar = document.getElementById("text_AadharNumber").value;
        if (aadhar.length != 12 && aadhar.length != 0) {
            document.getElementById("aadharAlert").innerHTML = "Enter a valid Aadhar Number";
        } else {
            for (i = 0; i < aadhar.length; i++) {
                if (!(aadhar.charCodeAt(i) <= 57 && aadhar.charCodeAt(i) >= 48)) {
                    document.getElementById("aadharAlert").innerHTML = "Enter a valid Aadhar Number";
                    break;
                }
            }
        }
        if (i == aadhar.length) {
            document.getElementById("aadharAlert").innerHTML = "";
            return true;
        } else {
            return false;
        }

    }

    function mobileValidate() {
        var mobile = document.getElementById("text_MobileNumber").value;
        for (i = 0; i < mobile.length; i++) {
            if (!(mobile.charCodeAt(i) <= 57 && mobile.charCodeAt(i) >= 48)) {
                document.getElementById("mobAlert").innerHTML = "Enter a valid Mobile Number";
                break;
            }
        }
        if (i == mobile.length) {
            document.getElementById("mobAlert").innerHTML = "";
            return true;
        } else {
            return false;
        }
    }

    function fathermobilevalidate() {
        var mobile = document.getElementById("text_FatherNumber").value;
        for (i = 0; i < mobile.length; i++) {
            if (!(mobile.charCodeAt(i) <= 57 && mobile.charCodeAt(i) >= 48)) {
                document.getElementById("fmobAlert").innerHTML = "Enter a valid Mobile Number";
                break;
            }
        }
        if (i == mobile.length) {
            document.getElementById("fmobAlert").innerHTML = "";
            return true;
        } else {
            return false;
        }
    }

    function mothermobilevalidate() {
        var mobile = document.getElementById("text_MotherNumber").value;
        for (i = 0; i < mobile.length; i++) {
            if (!(mobile.charCodeAt(i) <= 57 && mobile.charCodeAt(i) >= 48)) {
                document.getElementById("mmobAlert").innerHTML = "Enter a valid Mobile Number";
                break;
            }
        }
        if (i == mobile.length) {
            document.getElementById("mmobAlert").innerHTML = "";
            return true;
        } else {
            return false;
        }
    }

    function emailvalidate() {
        var count = 0;
        var email = document.getElementById("text_Email").value;
        for (i = 0; i < email.length; i++) {
            if (!((email.charCodeAt(i) >= 65 && email.charCodeAt(i) <= 90) || (email.charCodeAt(i) >= 97 && email.charCodeAt(i) <= 122)) && email.charCodeAt(i) != 64 && count == 0) {
                if (email.charCodeAt(i) == 46) {
                    if (count != 1)
                        document.getElementById("emailAlert").innerHTML = "Enter a valid email id";
                    break;
                }
            }
            if (email.charCodeAt(i) == 64) {
                count = count + 1;
            }
            if (email.length - i < 3 && count != 1) {
                document.getElementById("emailAlert").innerHTML = "Enter a valid email id";
                break;
            }
        }
        if (i == email.length) {
            document.getElementById("emailAlert").innerHTML = "";
            return true;
        } else {
            return false;
        }
    }

    function pinvalidate() {
        var pincode = document.getElementById("text_Pincode").value;
        for (i = 0; i < pincode.length; i++) {
            if (!(pincode.charCodeAt(i) <= 57 && pincode.charCodeAt(i) >= 48)) {
                document.getElementById("pinAlert").innerHTML = "Enter a valid pin code";
                break;
            }
        }
        if (i == pincode.length) {
            document.getElementById("pinAlert").innerHTML = "";
            return true;
        } else {
            return false;
        }
    }


    function sameaddressControl() {
        if (document.getElementById("text_PAddress").disabled == false) {
            document.getElementById("text_PAddress").value = document.getElementById("text_CAddress").value;
            document.getElementById("text_PAddress").disabled = true;
        } else {
            document.getElementById("text_PAddress").value = "";
            document.getElementById("text_PAddress").disabled = false;
        }
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
        var dob = document.getElementById("text_Dob");
        var gen = document.getElementsByName("gender");
        var gender;
        var nat = document.getElementsByName("nationality");
        var nationality;
        var country = document.getElementById("countries").options[document.getElementById("countries").selectedIndex].text;
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


        //Check for any unchecked check box
        if (blood == "-- select an option --") {
            document.getElementById("bloodAlert").innerHTML = "Kindly select blood group";
            flag = 1;
        } else {

            document.getElementById("bloodAlert").innerHTML = "";
        }
        for (i = 0, length = gen.length; i < length; i++) {
            if (gen[i].checked) {
                gender = gen[i].value;
                document.getElementById("genderAlert").innerHTML = "";
                break;
            }
        }
        if (i == length) {
            document.getElementById("genderAlert").innerHTML = "Please select Gender";
            flag = 1;
        }
        for (i = 0, length = nat.length; i < length; i++) {
            if (nat[i].checked) {
                if (i == 0) {
                    nationality = nat[i].value;
                    country = "India";
                    document.getElementById("nationalityAlert").innerHTML = "";
                } else {
                    //nationality as of drop down menu
                    if (country == "-- select an option --") {
                        document.getElementById("nationalityAlert").innerHTML = "Select Country";
                        flag = 1;
                    } else {
                        nationality = country;
                        document.getElementById("nationalityAlert").innerHTML = "";
                    }
                }
                break;
            }
        }
        if (i == length) {
            document.getElementById("nationalityAlert").innerHTML = "Please select Nationality";
            flag = 1;
        }
        for (i = 0, length = cat.length; i < length; i++) {
            if (cat[i].checked) {
                category = cat[i].value;
                document.getElementById("categoryAlert").innerHTML = "";
                break;
            }
        }
        if (i == length) {
            document.getElementById("categoryAlert").innerHTML = "Please select Category";
            flag = 1;


        }
        for (i = 0, length = pc.length; i < length; i++) {
            if (pc[i].checked) {
                pchallenged = pc[i].value;
                document.getElementById("pchallengeAlert").innerHTML = "";
                break;
            }
        }
        if (i == length) {
            document.getElementById("pchallengeAlert").innerHTML = "Please Select if Physically Challenged";
            flag = 1;
        }

        for (i = 0, length = ward.length; i < length; i++) {
            if (ward[i].checked) {
                wdp = ward[i].value;
                document.getElementById("wdpAlert").innerHTML = "";
                break;
            }
        }
        if (i == length) {
            document.getElementById("wdpAlert").innerHTML = "Please select an option";
            flag = 1;
        }


        //Check for empty fields
        if (name == "") {
            document.getElementById("nameAlert").innerHTML = "Please fill your name";
            flag = 1;
        } else {
            document.getElementById("nameAlert").innerHTML = "";
        }
        if (fname == "") {
            document.getElementById("fnameAlert").innerHTML = "Please fill the name";
            flag = 1;
        } else {
            document.getElementById("fnameAlert").innerHTML = "";
        }
        if (mname == "") {
            document.getElementById("mnameAlert").innerHTML = "Please fill the name";
            flag = 1;
        } else {
            document.getElementById("mnameAlert").innerHTML = "";
        }
        if (mobile == "") {
            document.getElementById("mobAlert").innerHTML = "PLease fill mobile number";
            flag = 1;

        } else {
            document.getElementById("mobAlert").innerHTML = "";
        }
        if (fmob == "") {
            document.getElementById("fmobAlert").innerHTML = "Please fill mobile number";
            flag = 1;
        } else {
            document.getElementById("fmobAlert").innerHTML = "";
        }
        if (aadhar == "") {
            if (nationality == "Indian") {
                document.getElementById("aadharAlert").innerHTML = "Please fill in aadhar number";
                flag = 1;
            } else {
                document.getElementById("aadharAlert").innerHTML = "";
            }
        } else if (aadhar != "") {
            if (nationality != "Indian") {
                document.getElementById("aadharAlert").innerHTML = "Please remove aadhar number";
                flag = 1;
            } else {
                document.getElementById("aadharAlert").innerHTML = "";
            }
        }

        if (dob == "") {
            document.getElementById("dobAlert").innerHTML = "Please fill DOB";
            flag = 1;
        } else {
            document.getElementById("dobAlert").innerHTML = "";
        }
        if (email == "") {
            document.getElementById("emailAlert").innerHTML = "Please fill email";
            flag = 1;
        } else {
            document.getElementById("emailAlert").innerHTML = "";
        }
        if (caddress == "") {
            document.getElementById("caAlert").innerHTML = "Please fill address";
            flag = 1;
        } else {
            document.getElementById("caAlert").innerHTML = "";
        }
        if (paddress == "") {
            document.getElementById("paAlert").innerHTML = "Please fill permanent address";
            flag = 1;
        } else {
            document.getElementById("paAlert").innerHTML = "";
        }
        if (pincode == "") {
            document.getElementById("pinAlert").innerHTML = "PLease enter pin code";
            flag = 1;
        } else {
            document.getElementById("pinAlert").innerHTML = "";
        }

        if (flag == 0) {
            if (!namevalidate()) {
                flag = 1;
            }
            if (!fathernamevalidate()) {
                flag = 1;
            }
            if (!mothernamevalidate()) {
                flag = 1;
            }
            if (!mobileValidate()) {
                flag = 1;
            }
            if (!fathermobilevalidate()) {
                flag = 1;
            }
            if (!mothermobilevalidate()) {
                flag = 1;
            }
            if (!nationality == "Indian") {
                if (!aadharvalidate()) {
                    flag = 1;
                }
            }
            if (!emailvalidate()) {
                flag = 1;
            }
            if (!pinvalidate()) {
                flag = 1;
            }
        }




        //check pincode
        if (nationality == "Indian" && pincode.length != 6) {
            document.getElementById("pinAlert").innerHTML = "Invalid pincode Number";
        }

        if (flag != 0) {
            alert("Please Correct the errors");
        }



        //If all Good then upload to Database
        if (flag == 0) {
            //if user is to add a new user detail
            if (!retrieve(mobile) && document.getElementById("retrieveData").style.visibility == "hidden") {
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

                showForm();

            } else if (document.getElementById("retrieveData").style.visibility != "hidden") {
                //if user is editing his details

                if (window.XMLHttpRequest) {
                    // code for IE7+, Firefox, Chrome, Opera, Safari 
                    xmlhttp = new XMLHttpRequest();
                } else {
                    // code for IE6, IE5 
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }

                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        if (this.responseText != "Failed") {
                            alert(this.responseText);
                            showForm();
                            document.getElementById("countries").style.visibility = "hidden";
                        } else {
                            alert("Failed to Update");
                        }
                    }
                };

                xmlhttp.open("GET", "updateuser.php?name=" + name + "&fname=" + fname + "&mname=" + mname + "&mobile=" + mobile + "&fmob=" + fmob + "&mmob=" + mmob + "&aadhar=" + aadhar + "&blood=" + blood + "&dob=" + dob + "&gender=" + gender + "&nationality=" + nationality + "&country=" + country + "&category=" + category + "&pchallenged=" + pchallenged + "&wdp=" + wdp + "&email=" + email + "&caddress=" + caddress + "&paddress=" + paddress + "&pincode=" + pincode + "&state=" + state + "&city=" + city, true);
                xmlhttp.send();

            } else {
                alert("User with same details already exist, please click Back to Retrieve data and edit or change credentials");
            }
        }

    }




    function bodyload() {
        document.getElementById("mobNumber").style.visibility = "hidden";
        document.getElementById("countries").style.visibility = "hidden";
        document.getElementById("userForm").style.visibility = "hidden";
    }

    function hideCountry() {
        document.getElementById("countries").style.visibility = "hidden";
    }

    function showCountry() {
        document.getElementById("countries").style.visibility = "visible"
    }

    function hidemobiletext() {
        document.getElementById("mobNumber").value = "";
        document.getElementById("mobNumber").style.visibility = "hidden";
        document.getElementById("alertMessage").style.visibility = "hidden";
    }

    function showForm() {
        if (document.getElementById("sendData").value != "Back") {
            //            document.getElementById("userForm").reset();
            document.getElementById("sendData").value = "Back";
            document.getElementById("retrieveData").style.visibility = "hidden";
            document.getElementById("alertMessage").style.visibility = "hidden";
            document.getElementById("userForm").style.visibility = "visible"
            hidemobiletext();
            formeditControl("enable");
        } else {
            //reset form values and hide form
            //            document.getElementById("userForm").reset();
            document.getElementById("sendData").value = "Send Data";
            document.getElementById("userForm").style.visibility = "hidden";
            document.getElementById("retrieveData").style.visibility = "visible";
            document.getElementById("retrieveData").value = "Retrieve Data";
            document.getElementById("alertMessage").style.visibility = "visible";
            document.getElementById("alertMessage").innerHTML = "";
        }
    }


    function showEditForm() {
        document.getElementById("sendData").value = "Back";
        document.getElementById("sendData").style.visibility = "visible";
        document.getElementById("retrieveData").value = "Edit";
        document.getElementById("alertMessage").style.visibility = "hidden";
        document.getElementById("userForm").style.visibility = "visible"
        document.getElementById("submit").style.visibility = "hidden";
        document.getElementById("reset").style.visibility = "hidden";
        hidemobiletext();
        formeditControl("disable");
    }

    function process() {
        if (document.getElementById("userForm").style.visibility == "hidden") {
            if (document.getElementById("mobNumber").style.visibility == "hidden") {
                document.getElementById("mobNumber").style.visibility = "visible";
                document.getElementById("retrieveData").value = "Get";
            } else {
                var mob = document.getElementById("mobNumber").value;
                if (mob == "") {
                    document.getElementById("alertMessage").innerHTML = "Kindly enter mobile number";
                } else {
                    for (i = 0; i < mob.length; i++) {
                        if ((mob.charCodeAt(i) >= 65 && mob.charCodeAt(i) <= 90) || (mob.charCodeAt(i) >= 97 && mob.charCodeAt(i) <= 122) || mob.charCodeAt(i) == 32) {
                            document.getElementById("alertMessage").innerHTML = "Invalid Mobile number";
                            break;
                        }
                    }
                    if (i == mob.length) {
                        retrieve(mob);
                    }
                }
            }
        } else if (document.getElementById("retrieveData").value == "Discard") {
            retrieve(mob);
        } else {
            document.getElementById("retrieveData").value = "Discard";
            document.getElementById("sendData").style.visibility = "hidden";
            document.getElementById("submit").style.visibility = "visible"
            document.getElementById("reset").style.visibility = "visible"
            formeditControl("enable");
        }
    }



    function formeditControl(editcontrol) {
        var name = document.getElementById("text_Name");
        var fname = document.getElementById("text_FatherName");
        var mname = document.getElementById("text_MotherName");
        var mobile = document.getElementById("text_MobileNumber");
        var fmob = document.getElementById("text_FatherNumber");
        var mmob = document.getElementById("text_MotherNumber");
        var aadhar = document.getElementById("text_AadharNumber");
        var blood = document.getElementById("blood").options[document.getElementById("blood").selectedIndex].text;
        var dob = document.getElementById("text_Dob");
        var genderm = document.getElementById("radio_GenderM");
        var genderf = document.getElementById("radio_GenderF");
        var gendero = document.getElementById("radio_GenderO");
        var nati = document.getElementById("radio_Indian");
        var natf = document.getElementById("radio_Foreigner");
        var country = document.getElementById("countries").options[document.getElementById("countries").selectedIndex].text;
        var catsc = document.getElementById("radio_Catsc");
        var catobc = document.getElementById("radio_Catobc");
        var catst = document.getElementById("radio_Catst");
        var catgen = document.getElementById("radio_Catgen");
        var pyes = document.getElementById("radio_pYes");
        var pno = document.getElementById("radio_pNo");
        var wdpyes = document.getElementById("radio_wdpYes");
        var wdpno = document.getElementById("radio_wdpNo");
        var email = document.getElementById("text_Email");
        var caddress = document.getElementById("text_CAddress");
        var paddress = document.getElementById("text_PAddress");
        var pincode = document.getElementById("text_Pincode");
        var state = "";
        var city = "";
        if (editcontrol == "enable") {
            name.disabled = false;
            fname.disabled = false;
            mname.disabled = false;
            mobile.disabled = false;
            fmob.disabled = false;
            mmob.disabled = false;
            aadhar.disabled = false;
            blood.disabled = false;
            dob.disabled = false;
            genderm.disabled = false;
            genderf.disabled = false;
            gendero.disabled = false;
            nati.disabled = false;
            natf.disabled = false;
            catsc.disabled = false;
            catst.disabled = false;
            catobc.disabled = false;
            catgen.disabled = false;
            country.disabled = false;
            pyes.disabled = false;
            pno.disabled = false;
            wdpyes.disabled = false;
            wdpno.disabled = false;
            email.disabled = false;
            caddress.disabled = false;
            paddress.disabled = false;
            pincode.disabled = false;
            //            state.disabled = false;
            //            city.disabled = false;
        } else if (editcontrol == "disable") {
            name.disabled = true;
            fname.disabled = true;
            mname.disabled = true;
            mobile.disabled = true;
            fmob.disabled = true;
            mmob.disabled = true;
            aadhar.disabled = true;
            blood.disabled = true;
            dob.disabled = true;
            genderm.disabled = true;
            genderf.disabled = true;
            gendero.disabled = true;
            nati.disabled = true;
            natf.disabled = true;
            catsc.disabled = true;
            catst.disabled = true;
            catobc.disabled = true;
            catgen.disabled = true;
            country.disabled = true;
            pyes.disabled = true;
            pno.disabled = true;
            wdpyes.disabled = true;
            wdpno.disabled = true;
            email.disabled = true;
            caddress.disabled = true;
            paddress.disabled = true;
            pincode.disabled = true;
            document.getElementById("checkbox_SameAddress").disabled = true;
            //            state.disabled = true;
            //            city.disabled = true;
        }
    }
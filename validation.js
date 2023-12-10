node 
const validate = () => {

    var uname  = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    var age = parseFloat(document.getElementById("age").value);

    if(uname.trim() == "" || pass.trim() == "" || (!age)) {
        alert("Missing Credentials");
        return false;
    }else if(uname == "Prerna" && pass == "1234" && age >= 13){
        alert("Sign-Up Successful");
        return true;
    }else if(age < 13) {
        alert("UnderAged");
        return false;
    }else{
        alert("Wrong Username OR Password");
        return false;
    }

}

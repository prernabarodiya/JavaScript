function Print(){
    var x = document.getElementById("uname").value;
    var  y = document.getElementById("upass").value;
    if(y == "Tinni") alert("Login Successfully");
    else alert("Wrong Password");
    alert("The name is " + x + "\n The password is " + y);


}

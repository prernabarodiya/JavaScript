function fun1(){
    var x = document.getElementById("rad1");
    var y = document.getElementById("rad2");
    if(x.checked) alert("Wrong Anser. The correct answer is : " + y.value);
    else if(y.checked) alert("Right Answer");
    else alert("No Option Selcted");
}

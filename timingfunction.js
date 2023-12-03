var id = 0;

function Start(){
    id = setTimeout(function(){
        alert("I'm Vengence");
    }, 5000)
}

function Stop(){
    clearTimeout(id);
}

var id2 = 0;
var msg = () => alert("You're not brave... men are brave. You say that you want to help people,"
         + " but you can't feel their pain... their mortality... It's time you learn what it means to be a man.");
function Repeat(){
    id2 = setInterval(msg,5000);
}
var Terminate = () => clearTimeout(id2);

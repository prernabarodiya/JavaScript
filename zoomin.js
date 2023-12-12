// function increase(){
//     document.getElementById("img1").style.width = '300px';
// }
// function decrease(){
//     document.getElementById("img1").style.width = '200px'
// }


var width = 100;
var addition = 2; 
var intervalId = 0;


function increase(){
    clearInterval(intervalId);
    intervalId = setInterval(zoomin, 10);
}

function decrease(){
    clearInterval(intervalId);
    intervalId = setInterval(zoomout, 10);
}

function zoomin(){
    if(width < 200){
        width = width + addition;
        document.getElementById("img1").style.width = width;
        console.log(width);
    }else clearInterval(intervalId);
}

function zoomout(){
    if(width > 100){
        width = width - addition;
        document.getElementById("img1").style.width = width;
        console.log(width);
    }else clearInterval(intervalId);
}

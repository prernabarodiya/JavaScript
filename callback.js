function one(){
    setTimeout(function(){
        console.log("Function 1");
        two();
    },2000)
}

function two(){
    console.log("Function 2");
}

one();


function Person(friend, Person2){
    setTimeout(() => {
        console.log("My friend name is " + friend);
        Person2();
    }, 2000);
    
}

function Person2(){
    console.log("My name is Prerna");
}

Person("Aaloo", Person2);

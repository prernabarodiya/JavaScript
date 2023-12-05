function makeCoffee(){
    console.log("Here is your coffee. Have a nice day!!!");
}

try {
    makeCoffee();
    //processCoffee();
} catch (error) {
    console.log("Have a error in your code");
    console.log(error);
}

finally{
    console.log("No matter what this block will always execute");
    console.log(5/0);
}

// customisable error using throw

var a = 5;
if(a < 2) {
    throw new Error("This is a customisable error.");
}
else console.log("All working good👍👍👍");

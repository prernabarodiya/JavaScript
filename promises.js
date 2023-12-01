var prom = new Promise(function(resolve, reject){
    var drive = true;
    if(drive) resolve("Yes!!!");
    else reject("No!!!");
});

prom.then(function(resolve){
    console.log(resolve + " They can dance");
}).catch(function(reject){
    console.log(reject + " They can't dance");
})

var functions = function(){
    return new Promise(function(resolve, reject){
        resolve("Learnt C")
    })
}

var callback = function(msg){
    return new Promise(function(resolve, reject){
        resolve(msg + " and also learnt C++ ");
    })
}

var promises = function(msg){
    return new Promise(function(resolve, reject){
        resolve(msg + "Good to go for Java");
    })
}

functions().then(function(result){
    return callback(result)
}).then(function(result){
    return promises(result);
}).then(function(result){
    console.log("Well Done! " + result);
})

var regex = /Hello/g
var str1 = "Hello to Codemenia. Say Hello to everyone here";

// exec() => return the index of first occurence of the given regex;
// i => removing case sensetivity
// g => global modifier used to return the next occurence index of given regex if same exec() method is called again;

var output = regex.exec(str1);
console.log(output);
var op = regex.exec(str1);
console.log(op);

//test() => return if regex is present in given argumented string;

var op2 = regex.test(str1);
console.log(op2);


//  match() => returns array of the all regex found in str1;


var op3 = str1.match(regex);
console.log(op3);

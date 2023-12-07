var regex = /We.come/g
var str1 = "Welcome to our family. Welcome here";

// " . " character if you forgot only one letter of word you are looking for in the string also put the missing letter of the word;
// var regex = /We.come/
console.log("................................");
var output = regex.exec(str1);
console.log(output);


// " * " used if there are multiple letters that are missing between regex2. for example:
console.log("********************************");
var regex2 = /W*e/
console.log(regex2.exec(str1));

// " ^ " return true if the whole sentence starts with regex
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
regex = /^Welcome/
console.log(regex.test(str1));
console.log(regex.exec(str1));

// " $ " return if last character is regex;
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
regex = /here$/
console.log(regex.test(str1));

// " ? " (optinal metaCharacter) returns true when we ignore the character before ? and found that in string
console.log("????????????????????????????????");

regex = /Wel?come?/
var str2 = "Webcome to our family. here";
console.log(regex.test(str2));

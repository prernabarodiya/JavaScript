
/*
    " \d " is used to chech if there is any digit just before regex
    while just opposite is " \ D"  => other than digit;

    " \w is used to chech for number, alphabet, underscore "
    while " \W " is used just opposite to above mentioned i.e. symbols, space
*/
console.log("\\ddddddddddddddddddddddddddddddddddddddddddddddd")
var regex = /\d+87/
var str1 = "User phone number is 9876543210"

console.log(regex.exec(str1));


console.log("\\DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDddddddddd")
var regex2 = /\D65/

console.log(regex2.exec("User phone number is 987rw$$6543210"));


console.log("\\wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
regex = /\w+ber/
console.log(regex.exec("User phone num8ber is 9876543210"));


console.log("\\WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
regex = /\Wber/
console.log(regex.exec("User phone num  ber is 9876543210"));

/*
    " \s " is used to check for any number of space;
    " \S " is for any other than space;

*/
console.log("\\ssssssssssssssssssssssssssssssssssssssssssssssss")
regex = /\sph/
console.log(regex.exec("User     phone number is 9876543210"));
console.log(regex.exec("User &&$%phone number is 9876543210"));

console.log("\\SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
regex = /\S+is/
console.log(regex.exec("User phone number is 9876543210"));
console.log(regex.exec("User phone number 764$%6.is 9876543210"));


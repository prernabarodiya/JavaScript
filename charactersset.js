
// returns true if there is any word which contains regexwith preffix of any character of set[];

// to use range we can use like  => regex = /[a-z]def;

/* to exclude any character that shuoldn't be used as a prefix in string's found regex word
   we can do like this => regex = /[^dal]def/
   this means if there a word starting with any ""letters of set + def""; it would return false;
   */

var regex = /[abc]def/
var str1 = "This is a string containing adef";
console.log(regex.test(str1));

function EmployeeId(){
    var id = document.getElementById("eId").value;
    var check = /[MD]258[10-99]/i;
    if((check.test(id)) == true) alert("Valid Employee Id. Welcome to the MagicalWorld🙏");
    else alert("Invalid Id. Please try again");
}

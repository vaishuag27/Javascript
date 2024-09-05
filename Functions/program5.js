//function checkAge and return adult if above 18 and minor otherwise
function checkAge (age){
    if (age>=18){
    return "Adult";
    }
    else{
        return"Minor";
    }
}
console.log(checkAge(45));
console.log(checkAge(15))
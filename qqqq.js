
function validate(){
    var email = ("email");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if(email.match(pattern))
    {
        console.log("valid");
    }
    else{
        console.log("invalid");
    }
    if(email == "") {
        console.log("invalid");
    }
} 
validate ("abc_d2@mail.ru")
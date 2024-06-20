var auth = document.getElementById("auth").value;
console.log(auth)


function authi() {
    var auth = document.getElementById("auth").value;
    if (auth == "Employee") {
        document.getElementById("user-access").innerHTML = "you can access "+"<i>"+"Dietary Services"+"</i>"
    }

}
//loginpage; password en button
// namen username(bart en jan), admin. -> andere inlog en wachtwoord



var arrayUsers = [{
    name: "Jack",
    wW: "Python",
    role: "admin"
},
{
    name: "Bart",
    wW: "bb",
    role: "user"
},
{
    name: "Slim",
    wW: "cc",
    role: "admin"
},
{
    name: "Jan",
    wW: "dd",
    role: "user"
}];


var eUserName = document.getElementById('userName_id');
var eWachtwoord = document.getElementById('wachtWoord_id');

var eKnop = document.getElementById("goKnop")
eKnop.onclick = clickHandler;

function clickHandler() {
    arrayUsers.forEach(function (user) {
        if (eUserName.value === user.name && eWachtwoord.value === user.wW) {
            if (user.role === "admin") {
                sBericht = "U bent nu aangemeld als administrator";
            }
            else {
                sBericht = "U bent nu aangemeld als user";
            }
        }
        else {
            sBericht = "No No, you bad boy";
        }
        //output naar div
        var eOutput = document.querySelector('#outpud_id');
        eOutput.innerHTML = sBericht;
    })
    
}

// de evaluatie
/* function logIn() {
    if (eUserName.value == "Bart" && eWachtwoord.value == "aa") {
        sBericht = "U bent nu aangemeld als user";
    }
    else if (eUserName.value == "Admin" && eWachtwoord.value == "cc") {
        sBericht = "U bent nu aangemeld als administrator";
    }
    else {
        sBericht = "No No, you bad boy";
    }
    console.log(sBericht);
    //output naar div
    var eOutput = document.querySelector('#outpud_id');
    eOutput.innerHTML = sBericht;
} */


/* function isAdmin(obj) {
    return obj.role === "admin" ? true : false
} */




// if statement met usernamen || 


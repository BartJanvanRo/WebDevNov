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

/* eKnop.onclick = clickHandler
 */


var eOutput = document.querySelector('#outpud_id');


function clickHandler() {
    let getUser = arrayUsers.filter(user => user.name === eUserName.value && eWachtwoord.value === user.wW)

    let isUserExist = getUser[0] != undefined ? true : false
    document.getElementById("outpud_id").innerHTML = "No No, you bad boy"

    if (getUser[0].role === "admin") {
        document.getElementById("outpud_id").innerHTML = "U bent nu aangemeld als administrator";
    }
    else {
        document.getElementById("outpud_id").innerHTML = "U bent nu aangemeld als gewone user.";
    }
}

/* function clickHandler() {
    arrayUsers.forEach(function (user) {
        if (eUserName.value == user.name && eWachtwoord.value == user.wW) {
            if (user.role == "admin") {
                sBericht = "U bent nu aangemeld als administrator";
                eOutput.innerHTML = sBericht;
            }
            else {
                sBericht = "U bent nu aangemeld als user";
                eOutput.innerHTML = sBericht;
            }
        }
        else {
            sBericht = "No No, you bad boy";
            eOutput.innerHTML = sBericht;
        }

    })
} */


// de evaluatie, werkt wel

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




/* function clickHandler() {
    arrayUsers.forEach(function (user) {
        let isAdmin = user.role === 'admin' ? true : false


        if (eUserName.value != "" && eWachtwoord.value != "") {
            console.log('user exists')
            if (eUserName.value === user.name && eWachtwoord.value === user.wW) {
                isAdmin ? sBericht = 'U bent nu aangemeld als user' : sBericht = "U bent nu aangemeld als administrator"
                eOutput.innerHTML = sBericht;
                console.log(sBericht)
            }
            
        }
        else{
            sBericht = "No No, you bad boy"
            eOutput.innerHTML = sBericht;
        }
    })
}  */





var student = {
    firstName: "Jack",
    lastName: "Off"
}


student.age = 29
/* 
console.log(student)
console.log(student.firstName)
console.log(student['lastName'])
 */


/* string methods */

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco John laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. John Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


var PrintService;


PrintService = text.length;
PrintService = text.indexOf('adipiscing')
PrintService = text.lastIndexOf('commodo')
PrintService = text.search('dolore')
PrintService = text.slice(25,35)

var url = "https://www.intecbrussel.be"

PrintService = url.slice(12,url.length)
PrintService = url.substring(12) //doet hetzelfde
PrintService = text.replace("ipsum", "Shakira")  //text vervanging
PrintService = text.replace(/John/g, "010101010101010") //regExr, vervangt alle text met een bepaald woord. 
PrintService = text.toUpperCase()
PrintService = text.toLowerCase() 

var company = "                 intec"

PrintService = company.concat("brussel")
PrintService = company.trim() /// haalt witruimte weg, voor en na, niet tussen.

var myItems =laptop, desktop, etc

PrintService = typeof myItems
PrintService = myItems.split(", ")


/* number methode 
 */



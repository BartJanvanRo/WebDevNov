/* We gebruiken prefixes om gekende datatypes aan te geven
n voor getallen (bv nLeeftijd)
s voor tekst (bv sInhoud)
b voor booleaanse waarden (bv bAntwoord)
o voor objecten (bv oData)
a voor arrays (bv aWinkels)
e voor een DOM element (bv eRij)

Als er twijfel bestaat over welk type een variabele is, gebruik dan de typeof operator:

alert(typeof i);

------------------------


Het Number type is het enige getal-datatype in Javascript: alle getallen worden opgeslagen als 64-bit floating-point getallen (=double in C++). Er is geen apart integertype of dergelijke.

--------------------------------

Een String is een tekst van 0 of meer karakters, opgeslagen als 16-bit Unicode tekens.
Strings kunnen zowel met enkele als met dubbele aanhalingstekens worden geschreven:

"string"
'string'

-----------------

Een boolean kent de waarde true en false.

--------------

De speciale waarde null staat voor geen object. Als een variabele de waarde null heeft, weet je dat het een ongeldig of niet bestaand object bevat.

var element = document.getElementById('iets')
// retourneert null als 'iets' niet bestaat

undefined is de standaardwaarde voor variabelen die gedeclareerd worden, maar verder geen waarde toegekend krijgen.
------------------

var waarde
alert(waarde) //undefined

Het is ook de waarde die je krijgt voor ontbrekende members (properties, methods) van objecten.

(document.getElementById) //retourneert object
(document.getJeanSmitsByTelephone) //undefined

---------------------

"Not a Number".

Is het resultaat van een foutieve of undefined bewerking. Het duidt aan dat de waarde geen geldig getal is.

NaN kan niet vergeleken worden met iets anders, inclusief zichzelf, dus moet je gebruik maken van de speciale functie isNaN() om deze waarde te detecteren.

var som = "blabla" + 2;
console.log(isNaN(som)); //true


NaN is giftig: als NaN voorkomt in een bewerking, wordt het resultaat ook NaN:

var product = NaN * 2;
console.log(isNaN(product)); //true


--------------
Een Symbol is een nieuw primitief datatype geïntroduceerd met ECMA6.

Een Symbol is een unieke waarde dat je aanmaakt met de Symbol() factory function.

let symbol1 = Symbol();
let symbol2 = Symbol('symbol2');

De Symbol() functie heeft een optionele String parameter die een beschrijving meegeeft.

Symbols kunnen gebruikt worden als constanten en als property keys.

---------------------------
Een Array is een tabelvariabele, ideaal om lijsten van gegevens bij te houden.

We gaan verder in de cursus nog in meer detail in op arrays.

------------------------------

Een Object is een verzameling eigenschappen (properties) die elk een naam en een waarde hebben, een soort associatief array dus. Er zijn geen beperkingen op de naamgeving van de eigenschap of aan de waarde die het kan bevatten: properties kunnen eender welke Javascript waarde bevatten inclusief andere objecten.

Object methods zijn properties die naar een functie verwijzen.

We gaan verder in de cursus nog in meer detail in op objecten.

-------------------------------

Tot slot willen we nog JSON of Javascript Object Notation vermelden. Dit is niet echt een datatype, maar een gestandaardiseerd gegevensformaat. JSON maakt gebruik van voor de mens leesbare tekst in de vorm van data-objecten die bestaan uit een of meer attributen met bijbehorende waarde. Het wordt hoofdzakelijk gebruikt voor uitwisseling van data tussen server en webapplicatie, als een alternatief voor xml.

=
x = y

normale toewijzing: x krijgt de waarde y

---------

+=
x += y
x = x + y

toevoeging: x wordt verhoogd met y

-----------

-=
x -= y
x = x - y

verschil: x wordt verlaagd met y

------------

*=
x *= y
x = x * y

x wordt vermenigvuldigd met y

--------------

/=
x /= y
x = x / y

x wordt gedeeld door y

---------------

&&  expr1 && expr2      logische AND: true als beide expressies true zijn.

||  xpr1 || expr2       logische OR: true als één van beide expressies true is.

!   !expr1              logische NOT: true als expr1 false is. Keert de expressie om.

+   "hello " + "world"  concatenatie: twee string variabelen worden aan elkaar gelast.
+=  x += "world"        korte schrijfwijze voor de concatenatie x = x + "world"


Je kan ook zogenaamde anonieme of lambda functies maken. Een anonieme functie werkt net als een andere maar heeft geen naam:

div.onclick = function() { alert('new') };

Ze worden veel gebruikt bij event handlers zoals hierboven. Als het click event plaatsheeft, zal de anonieme functie uitgevoerd worden.

Een speciale vorm is een Self-Executing Anonymous Function:

(function () {
    alert('hello world');
})()

Doordat de function volledig in haakjes staat wordt het een expression. Deze expression wordt dan nog eens gevolgd door een extra paar hakjes waardoor die uitgevoerd wordt. Deze anonieme functie wordt dus onmiddellijk uitgevoerd als hij gelezen wordt door de parser.

Terug naar ons project. Als we op de knop Go klikken, moeten de ingevulde punten geëvalueerd worden en moet er een bericht verschijnen dat zegt dat de student geslaagd is of niet.

We zijn momenteel optimistisch en veronderstellen dat de gebruiker braaf getallen zal ingeven, validatie van de gegevens volgt in verdere projecten.

We hebben dus twee zaken te doen:

    een script maken dat de punten evalueert;
    dit script koppelen aan de Go knop.

We voegen de functie in het script element in.

<script>
function evalueer(){
     /* evalueert of een student geslaagd is of niet */
/*     alert('test');
    }

</script>

Bespreking:

We voegen een benoemde functie in, die bestaat uit:

   het sleutelwoord function;
   de unieke naam van de functie;
   een paar ronde haakjes ( ) met eventuele argumenten;
   het block statement tussen de accolades { }.

We hebben een voorlopig statement in de functie gezet: alert(). Dit zal een berichtenvenster doen verschijnen.

De functie is hiermee ingevoegd, maar zal niet vanzelf starten. We moeten nog de functie als event handler instellen voor het klikken op de Go knop.
	

Een beetje terminologie:

   event: De gebeurtenis (bv. click, submit, load,...)
   event handler: De functie die reageert op het event. Deze moet je zelf maken en koppelen.
*/



//alternatief. querySelector('#goKnop');
var eKnop = document.getElementById("goKnop")
eKnop.onclick = evalueer;

function evalueer() {
    /* evalueert of een student geslaagd is of niet */
    console.log('fn evalueer');

    // de invulvelden zijn objecten
    //De eerste drie variabelen zijn dus eigenlijk DOM elementen: de input velden.
    var eWiskunde = document.getElementById('wiskunde');
    var eBoekhouden = document.getElementById('boekhouden');
    var eInformatica = document.getElementById('informatica');

    //de punten
    var nWisk = parseInt(eWiskunde.value);
    var nBoek = parseInt(eBoekhouden.value);
    var nInfr = parseInt(eInformatica.value);

    var nTotl = nWisk + nBoek + nInfr;
    var nGmid = nTotl / 3;
    //console.log('totaal: ' + nTotl + '; gemiddelde:' + nGmid);
    console.log("totaal: " + nTotl);

    // de evaluatie
    if ((nWisk >= 6 && nBoek + nInfr >= 12) || nInfr == 10) {
        sBericht = "U bent geslaagd";
        if (nGmid >= 7) {
            sBericht += " met onderscheiding";
        }
        else {
            sBericht += " met voldoening";
        }
    }
    else {
        sBericht = "U bent NIET geslaagd";
    }

    console.log(sBericht);
    //output naar div
    var eOutput = document.querySelector('#output');
    eOutput.innerHTML = sBericht;
}

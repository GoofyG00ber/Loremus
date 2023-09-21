indexer = 0;
function leanimal(hatid) {
    document.getElementById(hatid).style.top = '0px';
    document.getElementById(hatid).style.top = '200px';
    //document.getElementById("gal").style.zIndex -= '0';
}
/*function felanimal(hatid) {
    document.getElementById(hatid).style.top = '650px';
    document.getElementById(hatid).style.top = '0px';
    //document.getElementById("gal").style.zIndex -= '0';
}*/

var valasz;
var pont = 0;
var kerdes_db = 0;
function Kezdes(){
    if (kerdes_db < 5) {
          document.getElementById("valasz").innerHTML = "";
    var a = Math.floor(Math.random()*100);
    var b = Math.floor(Math.random()*100);
    valasz = a + b;
    document.getElementById("kezdes").innerHTML = a+" + "+b+" =";
    document.getElementById("kerdes").innerHTML = "<input type=text id=be></input>";
    document.getElementById("tovabb").innerHTML = "<button onclick=ki()>Küld</button>";  
    }
    else{
        document.getElementById("valasz").innerHTML = "5 / " + pont + " pontot értél el";

        if (pont == 5) {
            document.getElementById("kerdes").innerHTML = "Gratulálok tökéletesen töltötted ki a tesztet!!! ☺";
            document.getElementById("tovabb").innerHTML = "Elég menő vagy úgymond!";

        }
        if (pont < 5) {
            document.getElementById("kerdes").innerHTML = "Sajnos nem lett tökéletes a teszted. 😥";
            document.getElementById("tovabb").innerHTML = "Sokat kell még tanulnod!";

        }
    }
}

function ki(){

    if (valasz == be.value) {
        document.getElementById("valasz").innerHTML = "Helyes válasz!";
        pont++;
    }
    else{
        document.getElementById("valasz").innerHTML = "Helytelen válasz!";
    }
    document.getElementById("tovabb").innerHTML = "<button onclick=Kezdes()>Tovább</button>";
    kerdes_db++;
}
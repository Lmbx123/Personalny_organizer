function menu(){
    const menuikona = document.getElementById("ikona");
    let nawigacja = document.getElementById("rozwijane");
    menuikona.classList.remove("animacja");
    menuikona.classList.remove("animacja2");
    nawigacja.classList.remove("animacja3");
    nawigacja.classList.remove("animacja4");
    void nawigacja.offsetWidth;
    if(nawigacja.style.display==="block"){
        menuikona.classList.add("animacja2");
        nawigacja.classList.add("animacja4");
        setTimeout(function(){
            nawigacja.style.display="none";
        },250)
    }else{
        menuikona.classList.add("animacja");
        nawigacja.style.display="block";
        nawigacja.classList.add("animacja3");
    }
}
function settings(){
    const ustawieniaikona = document.getElementById("ustawienia");
    let nawigacja = document.getElementById("rozwijane");
    ustawieniaikona.classList.remove("animacja5");
    nawigacja.classList.remove("animacja3");
    nawigacja.classList.remove("animacja4");
    void nawigacja.offsetWidth;
    if(nawigacja.style.display==="block"){
        nawigacja.classList.add("animacja4");
        setTimeout(function(){
            nawigacja.style.display="none";
        },250)
    }else{
        nawigacja.style.display="block";
        nawigacja.classList.add("animacja3");
    }
    ustawieniaikona.classList.add("animacja5");
}
const pon = [];
const wto = [];
const sro = [];
const czw = [];
const pia = [];
const sob = [];
const nie = [];
function organizer(){
    let typ = document.getElementById("typ").value;
    let zadanie = document.getElementById("zadanie").value;
    let blad = "";
    document.getElementById("typ").value = "";
    document.getElementById("zadanie").value = "";
    document.getElementById("blad").innerHTML = "";
    if(typ==="Poniedziałek"){
        if(zadanie===""){
            blad="Nie podano zadania!";
            document.getElementById("blad").innerHTML=blad;
        }
        else{
            document.getElementById("text1").innerHTML = "";
            pon.push(zadanie + " <br>" + "<br>");
            for(let i=0;i<pon.length;i++){
                document.getElementById("text1").innerHTML += pon[i];
            }
        }
    }
    else if(typ==="Wtorek"){
        if(zadanie===""){
            blad="Nie podano zadania!";
            document.getElementById("blad").innerHTML=blad;
        }
        else{
            document.getElementById("text2").innerHTML = "";
            wto.push(zadanie + " <br>" + "<br>");
            for(let i=0;i<wto.length;i++){
                document.getElementById("text2").innerHTML += wto[i];
            }
        }
    }
    else if(typ==="Środa"){
        if(zadanie===""){
            blad="Nie podano zadania!";
            document.getElementById("blad").innerHTML=blad;
        }
        else{
            document.getElementById("text3").innerHTML = "";
            sro.push(zadanie + " <br>" + "<br>");
            for(let i=0;i<sro.length;i++){
                document.getElementById("text3").innerHTML += sro[i];
            }
        }
    }
    else if(typ==="Czwartek"){
        if(zadanie===""){
            blad="Nie podano zadania!";
            document.getElementById("blad").innerHTML=blad;
        }
        else{
            document.getElementById("text4").innerHTML = "";
            czw.push(zadanie + " <br>" + "<br>");
            for(let i=0;i<czw.length;i++){
                document.getElementById("text4").innerHTML += czw[i];
            }
        }
    }
    else if(typ==="Piątek"){
        if(zadanie===""){
            blad="Nie podano zadania!";
            document.getElementById("blad").innerHTML=blad;
        }
        else{
            document.getElementById("text5").innerHTML = "";
            pia.push(zadanie + " <br>" + "<br>");
            for(let i=0;i<pia.length;i++){
                document.getElementById("text5").innerHTML += pia[i];
            }
        }
    }
    else if(typ==="Sobota"){
        if(zadanie===""){
            blad="Nie podano zadania!";
            document.getElementById("blad").innerHTML=blad;
        }
        else{
            document.getElementById("text6").innerHTML = "";
            sob.push(zadanie + " <br>" + "<br>");
            for(let i=0;i<sob.length;i++){
                document.getElementById("text6").innerHTML += sob[i];
            }
        }
    }
    else if(typ==="Niedziela"){
        if(zadanie===""){
            blad="Nie podano zadania!";
            document.getElementById("blad").innerHTML=blad;
        }
        else{
            document.getElementById("text7").innerHTML = "";
            nie.push(zadanie + " <br>" + "<br>");
            for(let i=0;i<nie.length;i++){
                document.getElementById("text7").innerHTML += nie[i];
            }
        }
    }
    else{
        blad="Zły dzień lub go nie podano!";
        document.getElementById("blad").innerHTML=blad;
    }

}
function Zatwierdz(){
    let nazwa = document.getElementById("nazwa").value;
    let niebieski = document.getElementById("niebieski");
    let standart = document.getElementById("standart");
    let zielony = document.getElementById("zielony");
    let body = document.querySelector("body");
    if(niebieski.checked){
        body.style.background = "royalblue";
    }
    if(standart.checked){
        body.style.backgroundImage = "url(../zdjecia/notatka-tlo.jpg)";
    }
    if(zielony.checked){
        body.style.background = "green";
    }
    document.getElementById("nazwao").innerHTML = nazwa;
}
function wyczyscn(){
    document.querySelector("textarea").value = "";
}
function cele(){
    if(document.getElementById("zadanie").value==""){
        document.getElementById("zadanie").placeholder = "Nie podano celu";
    }
    else{
        document.getElementById("celes").innerHTML += document.getElementById("zadanie").value + "<br>";
        document.getElementById("zadanie").value = "";
        document.getElementById("zadanie").placeholder = "Wpisz cel";
    }
}
function usunc(){
    document.getElementById("celes").innerHTML = "";
}
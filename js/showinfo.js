function addcontent() {
    document.getElementById("hiddenimg").src = "../media/zoo.png";
    document.getElementById("titel").innerHTML = "Build Your Zoo"
    document.getElementById("hiddentext").innerHTML = " de technieken die we gebruikt hebben zijn : <br><br> <strong>· html <br><br> · css</strong> <br><br>  we hadden toen eigenlijk nog geen skills en dit project duurde daarom ook erg lang."
    document.getElementById("sitebtnn").href = "https://88892.stu.sd-lab.nl/buildyourzoo/html/HomePage.html"
}

function addcontent2() {
    document.getElementById("hiddenimg").src = "../media/f1.png";
    document.getElementById("titel").innerHTML = "Formule 1"
     document.getElementById("hiddentext").innerHTML = " de technieken die we gebruikt hebben zijn : <br><br> <strong>· html <br><br> · css <br><br> · Javascript</strong> <br><br>  De javascript op deze website is erg onoptimaal maar dit was de eerste keer dat ik een project ermee deed dus ik ben best blij met het resultaat. Sommige elementen op deze website zijn niet meer helemaal hoe het hoort door de schoolservers helaas."
    document.getElementById("sitebtnn").href = "https://88892.stu.sd-lab.nl/zandvoort%20website/website%20zandvoort/html/homepage.html"
}

function addcontent3() {
    document.getElementById("hiddenimg").src = "../media/quiz.png";
    document.getElementById("titel").innerHTML = "Quiz website"
     document.getElementById("hiddentext").innerHTML = " de technieken die we gebruikt hebben zijn : <br><br> <strong>· html <br><br> · css <br><br> · Javascript</strong> <br><br> de site waar u op beland als u op de knop klikt is mijn deel van dit groepsproject. deze website dient u te navireren enkel via de knoppen die op beeld staan. het was het geval dat scrollen niet mogelijk was, maar dit is helaas ook kapot gegaan in de overgang van leerjaar 1 naar 2. "
    document.getElementById("sitebtnn").href = "https://88892.stu.sd-lab.nl/js%202/html/quizbob.html"
}

function addcontent4() {
    document.getElementById("hiddenimg").src = "../media/goud.png";
    document.getElementById("titel").innerHTML = "Goud"
     document.getElementById("hiddentext").innerHTML = " de technieken die we gebruikt hebben zijn : <br><br> <strong>· html <br><br> · css <br><br> · Javascript <br><br> · PHP</strong> <br><br> Goud is visueel misschien wel mijn favoriete project tot nu toe. het kleurenpallet en de verschillende kleine details maken deze website erg speciaal. "
    document.getElementById("sitebtnn").href = "https://88892.stu.sd-lab.nl/Bestel-je-Eten/bob/html/index.html"
}

function show() {
    var element = document.getElementById("hidden");
    element.classList.remove("hidden");
            

                element.style.display = "block";
                element.style.transition = ".5s ease";
                element.style.animation = "showblock .5s ease"
    
            
}
        
function hide() {
        var element = document.getElementById("hidden");
    element.classList.add("hidden");

        element.style.animation = "hideblock .5s ease";
    element.style.animationFillMode = "forwards";
}
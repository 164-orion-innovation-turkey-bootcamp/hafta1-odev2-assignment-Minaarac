const Sira = document.getElementById("player");
const allBlocs = document.getElementById("container");
const SonucEkrani = document.getElementById("result");
const Button = document.getElementById("restart");
Button.style.display = "none";
var sayac = 1;
 
for (var KontrolDegiskeni = 0; KontrolDegiskeni < 9; KontrolDegiskeni++) {
    allBlocs.children[KontrolDegiskeni].addEventListener("click", calistir);
}
let SiraBelirtecDegiskeni = "X";
let TiklananKutular = [];
 
function calistir() {
    if (this.classList[1] != "tiklandi") {
        this.classList.add("tiklandi");
        this.children[0].innerText = SiraBelirtecDegiskeni;
        kontrol_beraberlik()
        kontrol_satirlar()
        kontrol_sutunlar()
        kontrol_capraz()
        if (SiraBelirtecDegiskeni == "X") SiraBelirtecDegiskeni = "O";
        else SiraBelirtecDegiskeni = "X";
        Sira.innerText = SiraBelirtecDegiskeni + " 'in Sırası";
    } else {
        alert("Başka bir bloğa tıklayınız.");
    }
}
 
function kontrol_satirlar() {
    if (allBlocs.children[0].textContent == allBlocs.children[1].textContent && allBlocs.children[0].textContent == allBlocs.children[2].textContent && allBlocs.children[0].textContent !== "") sonuc()
    if (allBlocs.children[3].textContent == allBlocs.children[4].textContent && allBlocs.children[3].textContent == allBlocs.children[5].textContent && allBlocs.children[3].textContent !== "") sonuc()
    if (allBlocs.children[6].textContent == allBlocs.children[7].textContent && allBlocs.children[6].textContent == allBlocs.children[8].textContent && allBlocs.children[6].textContent !== "") sonuc()
}
function kontrol_sutunlar() {
    if (allBlocs.children[0].textContent == allBlocs.children[3].textContent && allBlocs.children[0].textContent == allBlocs.children[6].textContent && allBlocs.children[0].textContent !== "") sonuc()
    if (allBlocs.children[1].textContent == allBlocs.children[4].textContent && allBlocs.children[1].textContent == allBlocs.children[7].textContent && allBlocs.children[1].textContent !== "") sonuc()
    if (allBlocs.children[2].textContent == allBlocs.children[5].textContent && allBlocs.children[2].textContent == allBlocs.children[8].textContent && allBlocs.children[2].textContent !== "") sonuc()
}
 
function kontrol_capraz() {
    if (allBlocs.children[0].textContent == allBlocs.children[4].textContent && allBlocs.children[0].textContent == allBlocs.children[8].textContent && allBlocs.children[0].textContent !== "") sonuc()
    if (allBlocs.children[2].textContent == allBlocs.children[4].textContent && allBlocs.children[2].textContent == allBlocs.children[6].textContent && allBlocs.children[2].textContent !== "") sonuc()
}
function sonuc() {
    document.querySelector("#body").style.background = "#363636";
    Button.style.display = "block";
    SonucEkrani.style.display = "block";
    SonucEkrani.innerText = SiraBelirtecDegiskeni + " Kazandı !";
 
}
function kontrol_beraberlik() {
    for (KontrolDegiskeni = 0; KontrolDegiskeni < 9; KontrolDegiskeni++) {
        if (allBlocs.children[KontrolDegiskeni].classList[1] == "tiklandi") {
            sayac += 1; break;
        }
    }
    if (sayac == 10) {
        document.querySelector("#body").style.background = "#363636";
        Button.style.display = "block";
        SonucEkrani.style.display = "block";
        SonucEkrani.innerText = "Berabere !";
    }
}
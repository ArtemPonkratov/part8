let buttuon = document.querySelector(".bn")
let elemen = document.querySelector(".element")

buttuon.onclick = function() {
    elemen.style.width = "10px";
    elemen.style.height = "50px";
}

const buttuon1 = document.querySelector(".bn1")
const elemet1 = document.querySelector(".element1")



buttuon1.onclick = function() {
    elemet1.classList.add("class1", "class2", "class3");
    
}

buttuon1.onclick = function() {
    elemet1.classList.add("class1", "class2", "class3");
    elemet1.classList.remove("class1")
    
}



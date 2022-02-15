function verdeyrojo() {
    let lista=document.getElementsByTagName("p");
    for (let i = 0; i < lista.length; i++) {
        document.getElementsByTagName("p")[i].style.color = "red";
        document.getElementsByTagName("p")[i].innerHTML = "ROJO";
    }
    let lista2=document.getElementsByTagName("div");
    for (let i = 0; i < lista2.length; i++) {
        document.getElementsByTagName("div")[i].style.color = "green";
        document.getElementsByTagName("div")[i].innerHTML = "VERDE";
    }
}
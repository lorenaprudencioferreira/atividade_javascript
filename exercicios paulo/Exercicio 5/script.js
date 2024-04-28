function converter(){
    let número = parseInt(document.getElementById("medida").value);
    resultado.innerHTML = ("A conversão para centimetros é = " + número*10**2);
}
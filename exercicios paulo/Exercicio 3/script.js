function soma(){
    let número1 = parseInt(document.getElementById("primeiro").value);
    let número2 = parseInt(document.getElementById("segundo").value);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = (número1 + número2);

}
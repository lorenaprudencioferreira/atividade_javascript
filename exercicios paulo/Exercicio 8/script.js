function calcularsalario(){
    let número1 = parseInt(document.getElementById("hora").value);
    let número2 = parseInt(document.getElementById("horames").value);
    resultado.innerHTML = ("O seu salário é: " + número1*número2);
}
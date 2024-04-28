function convertetemp(){
    let número = parseFloat(document.getElementById("temperatura").value);
    resultado.innerHTML = ("A conversão para graus Fahrenheit é= " + ((número*9/5)+32).toFixed(1));
}
function convertetemp(){
    let número = parseFloat(document.getElementById("temperatura").value);
    resultado.innerHTML = ("A conversão para graus Celsius é= " + 5*((número-32)/9).toFixed(1));
}
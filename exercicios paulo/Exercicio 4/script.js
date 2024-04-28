function média(){
    let nota1 = parseInt(document.getElementById("nota_1").value);
    let nota2 = parseInt(document.getElementById("nota_2").value);
    let nota3 = parseInt(document.getElementById("nota_3").value);
    let nota4 = parseInt(document.getElementById("nota_4").value);

    let resultado= document.getElementById("resultado");
    soma = nota1+nota2+nota3+nota4;
    resultado.innerHTML = (soma/4);

}
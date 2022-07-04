function calculaIMC(){
    const massa = document.getElementById("massa").value;  
    const altura = document.getElementById("altura").value;  
    
   
    console.log("Massa: "+massa);  
    console.log("Altura: "+altura);  
    const  imc = massa/(altura**2)

    
    
    document.getElementById("resultado").innerHTML = "Resultado: "+imc; 
    
    if(imc<18.5){
        document.getElementById("resultado").innerHTML = "Resultado: "+imc.toFixed(2) + " - Abaixo do peso"
       resultado.style.color = "red"
       resultado.style.backgroundColor = "white"
       esultado.style.fontSize = "40px"
    }
    if(imc>=18.5 && imc<25){
        document.getElementById("resultado").innerHTML = "Resultado: "+imc.toFixed(2) + " - Peso ideal"
        resultado.style.color = "green"
        resultado.style.backgroundColor = "white"
    }
    if(imc>=25 && imc<30){
        document.getElementById("resultado").innerHTML = "Resultado: "+imc.toFixed(2) + " - Sobrepeso"
        resultado.style.color = "orange"
        resultado.style.backgroundColor = "white"
        resultado.style.fontSize = "32px"
    }
    if(imc>=30 && imc<35){
        document.getElementById("resultado").innerHTML = "Resultado: "+imc.toFixed(2) + " - Obesidade grau 1"
        resultado.style.color = "red"
        resultado.style.backgroundColor = "white"
        esultado.style.fontSize = "33px"
    }   
    if(imc>=35 && imc<40){  
        document.getElementById("resultado").innerHTML = "Resultado: "+imc.toFixed(2) + " - Obesidade grau 2"
        resultado.style.color = "red"
        resultado.style.backgroundColor = "white"
        esultado.style.fontSize = "34px"
    }
    if(imc>=40){
        document.getElementById("resultado").innerHTML = "Resultado: "+imc.toFixed(2) + " - Obesidade grau 3"
        resultado.style.color = "red"
        resultado.style.backgroundColor = "white"
        esultado.style.fontSize = "35px"
    }
    
}
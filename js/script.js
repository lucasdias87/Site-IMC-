function calculaIMC(){
    const massa = document.getElementById("massa").value;  
    const altura = document.getElementById("altura").value;  
   
    console.log("Massa: "+massa);  
    console.log("Altura: "+altura);  
    const  imc = massa/(altura**2)
    document.getElementById("resultado").innerHTML = "Resultado: "+imc 
    if(imc<18.5){
        document.getElementById("resultado").innerHTML = "Resultado: "+imc + " - Abaixo do peso"
    }
    if(imc>=18.5 && imc<25){
        document.getElementById("resultado").innerHTML = "Resultado: "+imc + " - Peso ideal"
        
    }
    if(imc>=25 && imc<30){
        document.getElementById("resultado").innerHTML = "Resultado: "+imc + " - Sobrepeso"
    }
    if(imc>=30 && imc<35){
        document.getElementById("resultado").innerHTML = "Resultado: "+imc + " - Obesidade grau 1"
    }   
    if(imc>=35 && imc<40){  
        document.getElementById("resultado").innerHTML = "Resultado: "+imc + " - Obesidade grau 2"
    }
    if(imc>=40){
        document.getElementById("resultado").innerHTML = "Resultado: "+imc + " - Obesidade grau 3"
    }
    
}
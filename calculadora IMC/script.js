function calculadora(){
  let altura = document.getElementById("altura").value
   / 100
  let peso = document.getElementById("peso").value

  let imc = peso / altura ** 2;
  let texto = ""
  if (imc < 18.5) {
    texto = "Seu peso está abaixo do normal"
  } else if (imc < 24.9) {
    texto = "Seu peso está normal"
  } else if (imc < 29.9) {
    texto = "Seu peso está acima do normal"
  } else if (imc < 39.9) {
    texto = "Você está com obesidade"
  } else if (imc > 39.9) {
    texto = "Você está com obseidade mórbida"
  }

  document.getElementById("texto").innerText=texto

}

//Fórmula do IMC: pegar o peso e dividir pela a altura ao quadrado.
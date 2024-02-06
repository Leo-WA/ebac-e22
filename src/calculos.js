export function calcularIMC(altura, peso) {
  
  const alturaNum = Number(altura);
  const pesoNum = Number(peso);

  if (alturaNum <= 0 || pesoNum <= 0) {
      return "Valores de altura e peso devem ser maiores que zero.";
  }

  const imc = pesoNum / (alturaNum * alturaNum);
  let classificacao = '';

  if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
  } else if (imc >= 24.9 && imc < 29.9) {
      classificacao = 'Sobrepeso';
  } else if (imc >= 29.9 && imc < 34.9) {
      classificacao = 'Obesidade grau I';
  } else if (imc >= 34.9 && imc < 39.9) {
      classificacao = 'Obesidade grau II';
  } else {
      classificacao = 'Obesidade grau III';
  }

  return `Seu IMC é: ${imc.toFixed(2)} (${classificacao})`;
}


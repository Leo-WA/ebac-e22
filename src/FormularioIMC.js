import React, { useState } from 'react';
import { calcularIMC } from './calculos';


function mascaraAltura(valor) {
  valor = valor.replace(/\D/g, ""); 
  valor = valor.replace(/(\d{1})(\d{2})$/, "$1.$2"); 
  return valor;
}

function mascaraPeso(valor) {
  valor = valor.replace(/\D/g, ""); 
  valor = valor.replace(/(\d+)(\d{2})$/, "$1.$2"); 
  return valor;
}

function FormularioIMC() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const aoClicarCalcular = () => {
    setResultado(calcularIMC(altura, peso));
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <input 
        type="text" 
        value={altura} 
        onChange={(e) => setAltura(mascaraAltura(e.target.value))} 
        placeholder="Altura em metros (ex: 1.75)" 
      />
      <input 
        type="text" 
        value={peso} 
        onChange={(e) => setPeso(mascaraPeso(e.target.value))} 
        placeholder="Peso em quilos (ex: 70.50)" 
      />
      <button onClick={aoClicarCalcular}>Calcular</button>
      <p>{resultado}</p>
    </div>
  );
}

export default FormularioIMC;

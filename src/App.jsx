import { useState } from "react";
import FormularioIMC from "./components/FormularioMC";
import ResultadoIMC from "./components/ResultadoIMC";
import HistoricoIMC from "./components/HistoricoIMC";

export default function App() {
  const [resultado, setResultado] = useState(null);
  const [historico, setHistorico] = useState([]);

  function adicionarCalculo(novoResultado) {
    setResultado(novoResultado);
    setHistorico([novoResultado, ...historico]);
  }
}

return (
  <>
    <h1>Calculadora de IMC</h1>

    <FormularioIMC onCalcular={adicionarCalculo} />

    {resultado && <ResultadoIMC resultado={resultado}/>}

    <h2>Historico de Calculos</h2>

    <HistoricoIMC itens={historico} />
  </>
)
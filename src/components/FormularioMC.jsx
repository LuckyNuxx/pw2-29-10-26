import { useState } from "react";
import {calcularIMC, classificar} from "../utils/imc";

export default function FormularioIMC(onCalcular) {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const imc = calcularIMC(ParseFloat(peso), ParseFloat(altura));
        onCalcular({imc, classificacao: classificar(imc)});

        setPeso("");
        setAltura("");
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Peso (kg)
                <input 
                    type="number"
                    step="0.1"
                    min="1"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    required
                />
            </label>
            <label>
                Altura (m)
                <input 
                    type="number"
                    step="0.01"
                    min="0.5"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Calcular IMC</button>
        </form>
    )
}
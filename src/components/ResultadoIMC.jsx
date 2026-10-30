export default function ResultadoIMC({resultado}) {
    const {imc, classificacao} = resultado;
    //jsx substitui o innerHtml com template

    return(
        <div className={`card ${classificacao.classe}`}>
            <strong>Seu IMC: {imc.toFixed(2)}</strong>
            <br />
            Classificação: {classificacao.texto}
        </div>
    );
}
export default function HistoricoIMC({itens}) {

    return(
        <ul>
            {itens.map((item, index) => (
                <li key={index}>
                    IMC {item.imc.toFixed(2)} - {item.classificacao.text}
                </li>
            ))}
        </ul>
    )
}